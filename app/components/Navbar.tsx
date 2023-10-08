import React from 'react'
import Link from 'next/link'
import styles from '../Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
    <div className={styles.logo}>
      <Link href="/">Assignment1</Link>
    </div>
    <ul className={styles.navLinks}>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/pages/aboutus">About</Link>
      </li>
      <li>
        <Link href="/pages/contactus">Contact</Link>
      </li>
      <li>
        <Link href="/users/products">Products</Link>
      </li>
      <li>
        <Link href="/users">Users</Link>
      </li>
    
    </ul>
  </nav>
  )
}

export default Navbar
