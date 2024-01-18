import React from 'react'
import styles from "./Navbar.module.css"
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../ROUTER'
export const Navbar = () => {
    const navigate=useNavigate()
  return (
    <div>
      <ul>
      <li onClick={()=>navigate(ROUTER.HOME)}>Home</li>

        <li onClick={()=>navigate(ROUTER.ABOUT)}>About us</li>
      <li  onClick={()=>navigate(ROUTER.CONTACT)}>Contact</li>
      <li  onClick={()=>navigate(ROUTER.FAVORITES)}>Favorites</li>

      <li  onClick={()=>navigate(ROUTER.BASKET)}>Basket</li>

      </ul>
    </div>
  )
}

