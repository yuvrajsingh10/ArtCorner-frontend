import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from "./Components/Navigation/Navigation";
import Collections from "./Components/Navigation/Collections";
import Profile from './Components/UI/Profile'
import Shipping from './Components/UI/Shipping'
import Categories from './Components/UI/Categories'
import Home from "./Components/Home/Home";
import Footer from './Components/Footer/Footer'
import SellPaintings from './Components/SellPaintings/SellPaintings';

import Login from './pages/Login';
import Register from './pages/Register';
import Forgotpassword from './pages/Forgotpassword';
import ResetPassword from './pages/ResetPassword';


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Checkout from './Components/UI/Shipping';
import { useContext } from 'react';
import { userContext } from './Context/userContext';
import { PrivateRoute } from './routings/PrivateRoute';


function App() {
  const user_utx = useContext(userContext)
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Categories />} />
          <Route path={`/:id`} element={<Collections />} />

          if(user_utx.user !== "Seller") 
          navigate("/")
          else
          <Route path='/sell-paintings' element={<SellPaintings />}/>
          <Route path='/profile' element={<Profile />} />

          <Route path='/login' element={<Login />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/forgetpassword' element={<Forgotpassword />} ></Route>
          <Route path='/resetpassword' element={<ResetPassword />} ></Route>
          <Route path='/checkout' element={<Shipping />}></Route>
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}

export default App;