import React from 'react'
import style from './header.module.css'
export default function Header() {
  return (
    <div className={`${style.header}`}>
    <h1 className={`${style.title}`}>Welcome To E Store</h1>
    <div className={`${style.welcome}`}>
    </div>
    
    </div>
  )
}
