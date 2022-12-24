import React from 'react'
import '../style/header.css'

const nav_links = [
    {
        path:'#home',
        display:'Home'
    },
    {
        path:'#Shop',
        display:'Shop'
    },
    {
        path:'#About',
        display:'About'
    },
    {
        path:'#Contact',
        display:'Contact'
    }
]
const Header = () => {

  return (
    <header className='header'>
        <div className='container'>
            <div className=''>
                <h1>Logo</h1>
            </div>
            <div className='menu'>
                <ul>
                    {
                        nav_links.map((item)=>{
                        <li className='item'>
                            <a href={item.path}>{item.display}</a>
                        </li>
                        })
                    }
                </ul>
            </div>
            <div className='search'>

            </div>
        </div>
    </header>
  )
}

export default Header
