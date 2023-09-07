import './contact.scss'
import { useTranslation } from 'react-i18next'

import location from '../../assets/location.png'
import call from '../../assets/phone.png'
import email from '../../assets/mail.png'
import tg from '../../assets/telegram.png'
import inst from '../../assets/instagram.png'

export default function Contact() {
    const {t} = useTranslation()

    return (
        <section id='about' className="contact">
            <div className="container">
                <ul className="contact_container bgc">
                    <li className="contact_item">
                        <h1 className="contact_heading">
                            {t('contact.about')}
                        </h1>

                        <p className="contact_text">
                            {t(`contact.text`)}
                        </p>

                        <div className="contact_wrap">
                            <a href="https://instagram.com/brandomania_uz?igshid=MjEwN2IyYWYwYw==" target='_blank'>
                                <img src={inst} alt="" className="contact_img" />
                            </a>

                            <a href="https://t.me/brandomaniauz" target='_blank'>
                                <img src={tg} alt="" className="contact_img" />
                            </a>
                        </div>
                    </li>

                    <li className="contact_item">
                        <h1 className="contact_heading">
                            {t('contact.contact')}
                        </h1>

                        <div className="contact_wrap">
                            <img src={location} alt="" className="contact_img1" />
                            <a href="https://maps.app.goo.gl/wx7q5XBfZP2XPv3G6" target='_blank' className="contact_text">
                                {t('contact.locat')}
                            </a>
                        </div>

                        <div className="contact_wrap">
                            <img src={call} alt="" className="contact_img1" />
                            <a href="tel:+998909420301"  className="contact_text">
                            +998 90 942 03 01
                            </a>
                        </div>

                        <div className="contact_wrap">
                            <img src={email} alt="" className="contact_img1" />
                            <a href="mailto: segamqulov@list.ru"  className="contact_text">
                            segamqulov@list.ru
                            </a>
                        </div>
                    </li>

                    <li className="contact_item">
                        <h1 className="contact_heading">
                            {t('contact.location')}
                        </h1>

                        <iframe className='contact_frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.3407677143978!2d69.19743749999999!3d41.2796875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4d50c7d70cf%3A0x47991f899add235b!2zNzVIVytWWCwg0KLQvnNoa2VudCAxMDAwMDA!5e0!3m2!1sru!2s!4v1693982595854!5m2!1sru!2s" width="304" height="303" style={{border: 'none', borderRadius: '20px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    </li>
                </ul>
            </div>
        </section>
    )
}