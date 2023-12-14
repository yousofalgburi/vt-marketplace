import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Homepage from './Pages/Homepage.jsx';
import SignUp from './Components/SignUp.jsx';
import Login from './Components/Login.jsx';
import TopNav from './Components/TopNav.jsx';
import Items from './Pages/Items.jsx';
import Buying from './Components/Buying.jsx';
import Blog from './Components/Blog.jsx';
import Securitas from './Components/Securitas.jsx';
import Commerce from './Components/Commerce.jsx';
import BoostedListings from './Components/BoostedListings.jsx';
import About from './Components/footer/about.jsx';
import Terms from './Components/footer/terms.jsx';
import Cookies from './Components/footer/cookies.jsx';
import Responsibility from './Components/footer/responsibility.jsx';
import Accessibility from './Components/footer/accessibility.jsx';
import Usability from './Components/footer/usability.jsx';
import Help from './Components/footer/marketplace_help.jsx';
import Report from './Components/footer/report.jsx';
import Scams from './Components/footer/scams.jsx';
import AvoidingScams from './Components/footer/avoiding-scams.jsx';
import Policies from './Components/footer/purchase_policies.jsx';
import BuyItemPage from './Pages/BuyItemPage.jsx';
import SellItemPage from './Pages/SellItemPage.jsx';
import Privacy from './Components/footer/privacy';
import Footer from './Components/Footer.jsx';
import Finding from './Components/finding_things.jsx';
import SellingLocal from './Components/selling_locally.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserPage from './Pages/UserPage.jsx'
import UserSettings from './Pages/UserSettings.jsx';
import UpdateItem from './Pages/UpdateItem.jsx';
import Loading from './Pages/Loading.jsx';
import SellerPage from './Pages/SellerPage.jsx';

function App() {
  const [openLogin, setOpenLogin] = useState(false);
  const [signedIn, signIn] = useState(false);

  const handleSignOut = () => {
    setSignedIn(false);
    // Perform additional sign-out tasks, e.g., clearing tokens
  };

  const handleSignIn = (username, password) => {
    // For now, let's assume if both fields are filled, it's a successful login.
    if (username && password) {
      setSignedIn(true);
      setOpenLogin(false);
    } else {
      alert('Please enter both username and password');
    }
  };

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null)
  axios.defaults.headers.common['Authorization'] =localStorage.getItem('jwtToken')?localStorage.getItem('jwtToken'):'';

  useEffect(() => {
    async function getCurrentUser() {
        await axios.get('https://localhost:5000/user/currentUser')
        .then((res) => {
          if(res.status === 200){
            return res.data;
          }
        })
        .then((data) => {
          if(data){
            setUser(data);
            signIn(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        })
    }
    getCurrentUser();
  }, []);

  if(loading){
    console.log('loading');
    return <Loading />
  } else{
    return (
      <div>
        <BrowserRouter>
        
          <TopNav
          user={user}
          />
          <Routes>
            <Route path="/" element={<Homepage user={user} />} />
            <Route path="/home" element={<Homepage user={user} />} />
            <Route path="/signup" element={<SignUp user={user} />} />
            <Route path="/login" element={<Login user={user} />} />
            <Route path="/items" element={<Items user={user} />} />
            <Route path="/buying" element={<Buying />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/securitas" element={<Securitas />} />
            <Route path="/commerce" element={<Commerce />} />
            <Route path="/boosted-listings" element={<BoostedListings />} />
            <Route path="/about" element={<About />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/responsibility" element={<Responsibility />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/usability" element={<Usability />} />
            <Route path="/marketplace_help" element={<Help />} />
            <Route path="/purchase_policies" element={<Policies />} />
            <Route path="/report" element={<Report />} />
            <Route path="/scams" element={<Scams />} />
            <Route path="/avoiding-scams" element={<AvoidingScams />} />
            <Route path='/help' element={<Help />}/>
            <Route path='/privacy' element={<Privacy />} />
            <Route path='/cookies' element={<Cookies />} />
            <Route path="/selling" element={<SellItemPage signedIn={signedIn} />} />
            <Route path="/finding_things" element={<Finding />} />
            <Route path='/selling_locally' element={<SellingLocal />} />
            <Route path="/item_page/:_id" element={<BuyItemPage user={user} />} />
            <Route path="/sell_page" element={<SellItemPage user={user} />} />
            <Route path="/user_page" element={<UserPage user={user} />} />
            <Route path="/user_settings" element={<UserSettings user={user} />} />
            <Route path="/update_item/:id" element={<UpdateItem/>} />
            <Route path="/profile/:id" element={<SellerPage />} />
          </Routes>
          <br></br> <br></br> <br></br>
          
          <div className="footer">
            <Footer />
          </div>
        </BrowserRouter>
        {openLogin && <Login signIn={signIn} closeLogin={setOpenLogin} />}
      </div>
    );
  }
}

export default App;