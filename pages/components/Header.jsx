import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className=''>
        <header>
            <h1>Fakebook</h1>
        </header>
        <nav className=''>
            <ul className=''>
                <li className=''><Link className='nav-link' href='/'>Home</Link></li>
                <li className=''><Link className='nav-link' href='/about'>About</Link></li>
                <li className=''><Link className='nav-link' href='/contact'>Contact</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header