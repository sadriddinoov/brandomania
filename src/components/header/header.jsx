import './header.scss'
import logo from '../../assets/brand1.png'
import { useTranslation } from 'react-i18next';
import uz from '../../assets/uzb.png'
import ru from '../../assets/ru.png'
import eng from '../../assets/eng.png'
import { useEffect, useRef, useState } from 'react';


const images = [`jordan4.jpg`, "nikegreen.jpg", "newbalance.jpg", "converse.jpg", 'adidas.jpg', "gucci.jpg"];
const delay = 2500;

export default function Header() {
    
    const { t, i18n } = useTranslation();
    
    const handleClcikLang = (e) => {
        e.preventDefault()
        i18n.changeLanguage(e.target.value);
        
        localStorage.setItem("lang", JSON.stringify(e.target.value));
    };
    
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    
    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }
    
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
            setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
            delay
            );
            
            return () => {
                resetTimeout();
            };
        }, [index]);
        
        return (
            <header id='header' className="header bgc">
            <div className="container">
            <div className="header_container">
            <div className="header_top">
            <img src={logo} alt="" className="header_logo" />
            
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
            
            <form className='header_form' onClick={handleClcikLang}>
            <input className='header_img' value={'uz'} type="image" src={uz}/>
            
            <input className='header_img' value={'ru'} type="image" src={ru}/>
            
            <input className='header_img' value={'eng'} type="image" src={eng}/>
            </form>
            </div>
            
            <div className="header_bottom">
            <div className="slideshow">
            <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
            {images.map((src, index) => (
                <img
                className="slide"
                key={index}
                src={require(`../../assets/${ src }`)}
                />
                ))}
                </div>
                
                <div className="slideshowDots">
                {images.map((_, idx) => (
                    <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                        setIndex(idx);
                    }}
                    ></div>
                    ))}
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </header>
                    )
                }