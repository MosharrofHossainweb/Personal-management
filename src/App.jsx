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
          <Route path="/porfoliopage" element={<PortfolioPage />} />{' '}
          {/* Fixed the route path */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myrout} />
    </>
  );
};

export default App;
