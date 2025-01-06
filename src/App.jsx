import React from 'react';
import Register from './Componet/Register/Register';
import './Common/LoginRegister.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import LayoutOne from './Layouts/LayoutOne';
import Home from './Pages/Home/Home';
import Login from './Componet/Login/Login';
import Service from './Pages/Service/Service';
import About from './Pages/About/About';
import Shop from './Pages/PortfolioPage/Shop';
import Contact from './Pages/Contact/Contact';
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage'; // Corrected name
import ProductDetailCard from './Componet/ShopComponent/ProductDetailCard';
import app from './firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import ForgetPassWord from './Componet/ForgetPassWord/ForgetPassWord';
import Profile from './Componet/Profile/Profile';
import LayoutTwo from './Layouts/LayoutTwo';
import Navber2 from './Componet/Navber/Navber2';
import FriendRequest from './Pages/ProfilePages/FriendRequest';

const App = () => {
  const myrout = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayoutOne />}>
          <Route index element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/porfoliopage" element={<PortfolioPage />} />
          <Route path="/productdetailcard" element={<ProductDetailCard />} />
          {/* Fixed the route path */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassWord />} />
        </Route>
        <Route path="/layouttwo" element={<Profile />} />
        <Route path="/register" element={<Register />} />

        <Route path="/layouttwo" element={<LayoutTwo />} />
          <Route index element={<Profile />} />
          <Route path="/friendrequest" element={<FriendRequest />} />
        <Route />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myrout} />
      <ToastContainer />
    </>
  );
};

export default App;