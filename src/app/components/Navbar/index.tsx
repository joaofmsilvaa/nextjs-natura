import React from 'react'
import styles from "./styles.module.css"
import { usePathname } from 'next/navigation'
import NavbarClient from './Client'

export default function Navbar() {

  return (
    <NavbarClient/>
  )
}
