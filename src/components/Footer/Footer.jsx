import React from 'react'
import './Footer.css'
import twitterIcon from '../../assets/images/Twitter.png'
import linkedinIcon from '../../assets/images/LinkedIn.png'
import facebookIcon from '../../assets/images/Facebook.png'
import instagramIcon from '../../assets/images/Instagram.png'

function Footer() {
    const socialMedia = [
        {
            name: 'twitter',
            icon: twitterIcon,
            url: 'https://twitter.com'
        },
        {
            name: 'linkedin',
            icon: linkedinIcon,
            url: 'https://www.linkedin.com'
        },
        {
            name: 'facebook',
            icon: facebookIcon,
            url: 'https://facebook.com'
        },
        {
            name: 'instagram',
            icon: instagramIcon,
            url: 'https://instagram.com'
        }
    ]
  return (
    <div className='footer-main-container'>
        <span>© Bidima Inc. All rights reserved</span>
        <div>
            {socialMedia.map((socialMedia, index)=> {
                return (
                    <a href={socialMedia.url} target='_blank' rel='noreferrer' key={index}>
                        <img src={socialMedia.icon} alt={socialMedia.name} />
                    </a>
                )
            })}
        </div>
    </div>
  )
}

export default Footer