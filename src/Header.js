import React from 'react'

const Header = () => {

  return (
    <header className='header'>
        <h1>My Website</h1>
        <nav>
            <ul className='header-ul'>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Home</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>About</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Services</a></li>
                <li><a href="#" onClick={(e) => e.preventDefault()}>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header