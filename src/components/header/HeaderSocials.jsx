import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='' target='_blank'><BsLinkedin/></a>
      <a href='' target='_blank'><BsGithub/></a>
      <a href='' target='_blank'><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials
