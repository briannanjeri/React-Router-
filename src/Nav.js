import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
  const navstyle={
    color:'white'
  };

  return (
    <nav>
        <h3>log</h3>
        <ul className='Nav-links'>
            <Link style={navstyle} to='/about'>
            <li>About</li>
            </Link>
            <Link style={navstyle} to='/shop'>
            <li>Shop</li>
            </Link>

        </ul>
    </nav>
  )
}

export default Nav