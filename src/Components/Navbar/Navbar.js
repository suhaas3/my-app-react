import React, { useState } from "react";
import './Navbar.css';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import CustomLoginForm from "../CustomLoginForm/CustomLoginForm";


function Navbar() {

  const links = [
    { path: '/home', name: 'Home' },
    { path: '/courses', name: 'Courses' },
    { path: '/events', name: 'Events' },
    { path: '/clubs', name: 'Clubs' },
  ]

  const [openLogin, setOpenLogin] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();


  function navigateFun(path) {
    navigate(path)
  }

  function openLoginForm() {
    setOpenLogin(prev => !prev)
  }

  console.log(openLogin, 'clicked login')

  return (
    <>
      <div className="navbar-section">

        <ul type='none' className='nav-lists'>
          {links.map((item, index) => (
            <li className={`lists ${location.pathname === item.path ? 'active-link' : ""}`} key={index} onClick={() => navigateFun(item.path)}>{item.name}
            </li>
          ))}
        </ul>

        <input className="search" type="text" placeholder="Type ur need" onClick={() => navigateFun('/search')} />

        <img src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-14.png" className="cart-logo" onClick={() => navigateFun('/cart')} />

        <button className="login-button-navbar" onClick={
          openLoginForm
        }>Login</button>

      </div>

      {openLogin && <CustomLoginForm openLogin={openLogin} setOpenLogin={setOpenLogin}/>}
    </>
  )
}

export default Navbar;