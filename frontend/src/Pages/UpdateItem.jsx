import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../Components/CategoryDropdownMenu';

const UpdateItem = () => {
    const navigate = useNavigate();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
        setIsDropdownOpen(false);
        setUpdatedItem(prevItem => ({ ...prevItem, tag: category }));
    };

    useEffect(() => {
      const itemID = window.location.pathname.split('/').pop();
      if (!itemID) {
        navigate('/');
      }
      getItemDetails(itemID);
    }, []);

  async function getItemDetails(itemID) {
    await axios.get(`/home/${itemID}`)
    .then((res) => {
      if(res.status === 200){
        return res.data;
      }
    })
    .then((data) => {
      if(data){
        setUpdatedItem(data);
        setSelectedCategory(data.tag);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const [imageFile, setImageFile] = useState(null);

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
        const response = await axios.patch(`/posts/${updatedItem._id}`, {
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
        {updatedItem.type === 'Price' ?
          <>
            <div className="form-group">
              <label>Price:</label>
              <input type="number" name="price" value={updatedItem.price} onChange={handleChange} required />
            </div>
          </>
          :
          <>
            {updatedItem.bidCount === 0 &&
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
