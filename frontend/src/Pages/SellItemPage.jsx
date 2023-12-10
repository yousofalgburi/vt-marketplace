import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import DropdownMenu from '../Components/CategoryDropdownMenu';
import { useNavigate } from 'react-router-dom';

const SellItemPage = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [image, setImage] = useState('');
  const [item, setItem] = useState({
    title: '',
    description: '',
    image: '', // This could be a URL or base64 encoded string
    type: 'Price', // Default type set to 'Price'
    price: '',
    tag: ''
  });
//   const handleImageUpload = async (e) => {
//     const file = e.target.files[0];
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('upload_preset', 'ml_default'); 
  
//     try {
//       const response = await axios.post('https://api.cloudinary.com/v1_1/$dwigsfksu/upload', formData);
//       const data = response.data;
//       const fileUrl = data.secure_url; 
  
//       setItem({ ...item, image: fileUrl }); 
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };
const handleImageUpload = async (e) => {
    const data = new FormData();
data.append('file', e.target.files[0]);
data.append('timestamp', '173719931');
data.append('api_key', 'dKTb7XBEW6ThWHsyjSoPcp99oP0');
data.append('signature', 'a781d61f86a6f818af');

axios.post('https://api.cloudinary.com/v1_1/demo/image/upload', data)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
  };
  
// async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       let imageUrl = "";
//       if (image) {
//         const formData = new FormData();
//         formData.append("file", image);
//         formData.append("upload_preset", "ml-default");
//         const dataRes = await axios.post(
//           "cloudinary://139997819647154:dKTb7XBEW6ThWHsyjSoPcp99oP0@dwigsfksu",
//           formData
//         );
//         imageUrl = dataRes.data.url;
//       }

//       const submitPost = {
//         image: imageUrl,
//       };
//       console.log(selectedCommunity);
//       await axios.post("http://localhost:3001/store-image", submitPost);
//     } catch (err) {
//       err.response.data.msg && setError(err.response.data.msg);
//     }
//   }
async function handleSubmit2(e) {
    e.preventDefault();
    try {
      let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "ml_default");
        const dataRes = await axios.post(
          "cloudinary://139997819647154:dKTb7XBEW6ThWHsyjSoPcp99oP0@dwigsfksu",
          formData
        );
        imageUrl = dataRes.data.url;
      }

      const submitPost = {
        image: imageUrl,
      };
      console.log(selectedCommunity);
    //   await axios.post("http://localhost:3001/store-image", submitPost);
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleTagSelect = (tagName) => {
    setItem({ ...item, tag: tagName });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item submitted', item);
  };

  return (
    <div>
      <TopNav />
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
            <label>Image:</label>
            <input type="file" onChange={handleImageUpload} />
        {item.image && <img src={item.image} alt="Uploaded" />}
            {/* <input type="text" name="image" value={item.image} onChange={handleChange} /> */}
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
      <Footer />
    </div>
  );
};

export default SellItemPage;
