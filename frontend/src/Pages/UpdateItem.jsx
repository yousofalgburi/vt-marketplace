import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import DropdownMenu from '../Components/CategoryDropdownMenu';

const UpdateItem = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { item, user } = state || {}; // Default to an empty object if state is undefined
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [updatedItem, setUpdatedItem] = useState({
        title: '',
        description: '',
        image: '',
        tag: '',
        price: null,
        bid: null,
        type: '',
    });
    
    const [selectedCategory, setSelectedCategory] = useState('Please Select a Category');
    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setUpdatedItem(prevItem => ({ ...prevItem, tag: category }));
    };
    useEffect(() => {
        async function getCurrentUser() {
            try {
                // Assuming 'https://localhost:5000/user/currentUser' returns the user data if logged in
                const response = await axios.get('https://localhost:5000/user/currentUser');
                if (response.data) {
                    // User is logged in, we have the user data
                    setIsLoading(false);
                } else {
                    // User is not logged in or session expired
                    navigate("/login");
                }
            } catch (error) {
                console.error('Error fetching user data: ', error);
                navigate("/login");
            }
        }
    
        getCurrentUser();
    }, [navigate]);
    async function getCurrentUser() {
        try {
            // Assuming 'https://localhost:5000/user/currentUser' returns the user data if logged in
            const response = await axios.get('https://localhost:5000/user/currentUser');
            if (response.data) {
                // User is logged in, we have the user data
                setIsLoading(false);
            } else {
                // User is not logged in or session expired
                navigate("/login");
            }
        } catch (error) {
            console.error('Error fetching user data: ', error);
            navigate("/login");
        }
    }

    useEffect(() => {
        if (isLoading) return; // Don't do anything while loading

        if (!user) {
            // alert("Please log in to update the item.");
            // navigate("/login");
            getCurrentUser();
            return; // Exit early
        }

        if (!item) {
            alert("Error getting item data.");
            navigate("/");
            return; // Exit early
        }
        setUpdatedItem({
            title: item.title || '',
            description: item.description || '',
            image: item.image || '',
            tag: item.tag || 'Please Select a Category',
            price: item.price || null,
            bid: item.bid || null,
            type: item.type || '',
        });
        setSelectedCategory(item.tag || 'Please Select a Category');
        // ... rest of your useEffect that depends on item and user
    }, [user, item, navigate, isLoading]);

  const [imageFile, setImageFile] = useState(null);
  if (isLoading) {
    return <div>Loading...</div>; // Or any other loading indicator like a spinner
}


  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (window.confirm('Are you sure you want to update this item?')) {
      let imageUrl = updatedItem.image;

      if (imageFile) {
        const formData = new FormData();
        formData.append('file', imageFile);
        formData.append('upload_preset', 'your_preset_here');

        try {
          const imageResponse = await axios.post('https://api.cloudinary.com/v1_1/your_cloudinary_name/image/upload', formData);
          imageUrl = imageResponse.data.url;
        } catch (error) {
          alert('Error uploading image');
          console.error(error);
          return;
        }
      }

      try {
        const response = await axios.patch(`/posts/${item._id}`, {
          ...updatedItem,
          image: imageUrl,
        });

        console.log(response.data);
        alert('Item updated successfully!');
        navigate('/items');
      } catch (error) {
        alert('Error updating item');
        console.error(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedItem({ ...updatedItem, [name]: value });
  };

  return (
    <div className="update-item-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Update Item</h1>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={updatedItem.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea name="description" value={updatedItem.description} onChange={handleChange} required />
        </div>
        {item.type === 'Price' ?
          <>
            <div className="form-group">
              <label>Price:</label>
              <input type="number" name="price" value={updatedItem.price} onChange={handleChange} required />
            </div>
          </>
          :
          <>
            {item.bidCount === 0 &&
              <div className="form-group">
                <label>Starting Bid:</label>
                <input type="number" name="bid" value={updatedItem.bid} onChange={handleChange} required />
              </div>
            }
          </>
        }
        <div className="form-group">
          <label>Current Image:</label>
          <input type="file" onChange={handleImageChange} />
          {updatedItem.image && <img src={updatedItem.image} alt="Item" className='item-page-image'/>}
        </div>
        <div className="form-group">
          <label>Category:</label>
          <div className="dropdown">
            <button className="dropdown-toggle" type="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              {selectedCategory}
            </button>
            <DropdownMenu isDropdownOpen={isDropdownOpen} handleItemClick={handleCategorySelect} />
          </div>
        </div>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItem;
