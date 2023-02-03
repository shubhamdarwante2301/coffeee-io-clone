import React from 'react'
import style from '../styles/home.module.css'
import facebook from '../component/icons/facebook.png'
import twitter from '../component/icons/twitter.png'
import instagram from '../component/icons/instagram.png'
import linkedin from '../component/icons/linkedin.png'

const Footer = () => {
    return (
        <div className={style.footer}>
            <div>
                <p className={style.copyright}>Copyright © 2023 www.coffeee.io. All rights reserved.</p>
                <div>
                    <a href="/">Privacy Policy</a>
                    <a href="/">Terms of Use</a>
                    <a href="/">Sitemap</a>
                </div>
            </div>
            <div className={style.sociallinks}>
                <span>Follow us</span>
                <img src={facebook} alt="facebook icon" />
                <img src={twitter} alt="twitter icon" />
                <img src={instagram} alt="instagram icon" />
                <img src={linkedin} alt="linkedin icon" />
            </div>
        </div>
    )
}

export default Footer
