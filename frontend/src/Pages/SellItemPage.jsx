import { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import CategoryDropdownMenu from '../Components/CategoryDropdownMenu';
import { useNavigate } from 'react-router-dom';

const SellItemPage = ({user}) => {
    useEffect(() => {
        console.log("CLICKED USER:", user)
        if(!user){
            console.log(user)
          navigate("/")
        }
      });
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Please Select a Category');
  const [image, setImage] = useState(null);
  const [item, setItem] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    tag: '',
    type: 'Price'
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setItem({ ...item, tag: category});
    setIsDropdownOpen(false);
  };


const axiosInstance = axios.create({
  baseURL: 'https://api.cloudinary.com/v1_1/dwigsfksu',
  headers: {}
});

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let imageUrl = "";
    if (image) {
      const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'ml_default');

    await axiosInstance.post('/image/upload', data, {withCredentials: false, headers:{Authorization: undefined}})
      .then(response => {
        console.log(response.data);
        console.log(response.data.url);
        imageUrl = response.data.url;
      })
      .catch(error => {
        console.error(error);
        alert('Error uploading image');
        return;
      });
    }

    const submitPost = {
      ...item,
      image: imageUrl,
      tag: selectedCategory,
      bid: item.type === 'Auction' ? item.price : undefined,
      price: item.type === 'Price' ? item.price : undefined
    };

    await axios.post('/create', submitPost)
    console.log("Item created successfully");
    navigate('/items');
  } catch (err) {
    alert ('Error creating item');
    console.error(err);
    // Handle errors such as displaying a message to the user
  }
};



  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  return (
    <div>
      <div className="sell-item-form-container">
        <form onSubmit={handleSubmit}>
          <h1>List an Item for Sale</h1>
          <div className="form-group">
            <label>Title:</label>
            <input type="text" name="title" value={item.title} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea name="description" value={item.description} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <button className="dropdown-toggle" type="button">
                {selectedCategory}
              </button>
              <CategoryDropdownMenu isDropdownOpen={isDropdownOpen} handleItemClick={handleCategorySelect} />
            </div>
          </div>
          <div className="form-group">
            <label>Image:</label>
            <input type="file" onChange={handleImageChange} />
            {item.image && <img src={item.image} alt="Uploaded" />}
          </div>
          <div className="form-group">
            <label>Price:</label>
            <input type="number" name="price" value={item.price} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Type:</label>
            <select name="type" value={item.type} onChange={handleChange} required>
              <option value="Price">Price</option>
              <option value="Auction">Auction</option>
            </select>
          </div>
          <button type="submit">List Item</button>
        </form>
      </div>
    </div>
  );
};

export default SellItemPage;
