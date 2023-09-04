import React from 'react'
import './Header.css'
import CV from './Action'
import ME from '../../assets/myImg.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amulya Rawat</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CV/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt=''/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
