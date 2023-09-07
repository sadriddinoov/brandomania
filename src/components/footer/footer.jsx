import './footer.scss'

import inst from '../../assets/instagram.png'
import tg from '../../assets/telegram.png'
import primetech from '../../assets/primetech.png'
import logo from '../../assets/brand1.png'
import { useTranslation } from 'react-i18next'

export default function Footer() {
    const {t} = useTranslation()
    
    return (
        <footer className="footer">
        <div className="container">
        <div className="footer_container bgc">
        <img src={logo} alt="" className="footer_img" />
        
        <ul className="header_list">
        <a href="#header" className="header_link">
        {t('header.link1')}
        </a>
        
        <a href="#product" className="header_link">
        {t('header.link3')}
        </a>
        
        <a href="#about" className="header_link">
        {t('header.link4')}
        </a>
        </ul>

        <div className="footer_img-wrap">
            <a href="https://t.me/brandomaniauz" target='_blank'>
                <img src={tg} alt="" className="footer_tg" />
            </a>

            <a href="https://instagram.com/brandomania_uz" target='_blank'>
                <img src={inst} alt="" className="footer_tg" />
            </a>
        </div>
        
        </div>
        
        <div className="footer_wrap">
        <img src={primetech} alt="" className="footer_prime" />
        </div>
        </div>
        </footer>
        )
    }