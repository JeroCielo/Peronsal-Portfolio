import React from 'react';
import {FiDribbble} from 'react-icons/fi'
import {FiFigma} from 'react-icons/fi';
import {FaGithub} from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs'

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href='https://dribbble.com' target={'_blank'}><FiDribbble /></a>
      <a href='https://figma.com' target={'_blank'}><FiFigma /></a>
      <a href='https://github.com' target={'_blank'}><FaGithub /></a>
      <a href='https://twitter.com' target={'_blank'}><BsTwitter /></a>
      <a href='https://instagram.com' target={'_blank'}><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocial