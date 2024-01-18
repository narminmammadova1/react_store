import React from 'react'
import { Navbar } from '../Navbar'
import styles from "./Header.module.css"
export const Header = () => {
  return (
    <div className={styles.header}>
      <Navbar/>
    </div>
  )
}

