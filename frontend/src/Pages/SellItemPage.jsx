import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import TopNav from '../Components/TopNav';
import Footer from '../Components/Footer';
import CategoryDropdownMenu from '../Components/CategoryDropdownMenu';
import { useNavigate } from 'react-router-dom';

const SellItemPage = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Select Category');
  const [image, setImage] = useState(null);
  const [item, setItem] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    category: '',
    //tag: '',
    type: 'Price'
  });

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setItem({ ...item, category });
    setIsDropdownOpen(false);
  };

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

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    let imageUrl = "";
    if (image) {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "ml_default");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dwigsfksu/upload",
        formData
      );
      imageUrl = response.data.url;
    }

    const submitPost = {
      ...item,
      image: imageUrl,
      category: selectedCategory
    };

    // TODO: Replace with your actual endpoint and POST the item details
    // await axios.post("http://localhost:3001/list-item", submitPost);

    console.log('Item submitted', submitPost);
    navigate('/success-page'); // Redirect to a success page or handle accordingly
  } catch (err) {
    console.error(err);
    // Handle errors such as displaying a message to the user
  }
};
  
  const handleImageUpload = async (e) => {
    const data = new FormData();
    data.append('file', e.target.files[0]);
    data.append('upload_preset', 'ml_default');
  
    axios.post('https://api.cloudinary.com/v1_1/dwigsfksu/upload', data)
      .then(response => {
        console.log(response.data);
        console.log(response.data.url);
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
//        err.response.data.msg && setError(err.response.data.msg);
//     }
// }
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

  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item submitted', item);
  };*/

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
      <Footer />
    </div>
  );

  /*return (
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
  );*/
};

export default SellItemPage;
