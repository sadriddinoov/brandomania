import './otziv.scss'
import { useTranslation } from 'react-i18next'

import opa1 from '../../assets/opa.png'
import opa2 from '../../assets/opa2.png'
import gul1 from '../../assets/flower2-removebg-preview 1.png'
import gul2 from '../../assets/flower1-removebg-preview 2.png'

export default function Otziv() {
    const {t} = useTranslation()

    return (
        <section className="otziv">
            <div className="container">
                <div className="otziv_container">
                    <h1 className="otziv_heading">
                        {t('otzives.title')} 
                        <span className="color">
                            {t('otzives.subtitle')}
                        </span>
                    </h1>

                    <ul className="otziv_list">
                        <li className="otziv_item bgc">
                            <img src={opa1} alt="" className="otziv_img" />
                            <h2 className="otziv_item-heading">
                                {t('otzives.name1')}
                            </h2>

                            <p className="otziv_text">
                                {t('otzives.text1')}
                            </p>
                        </li>

                        <li className="otziv_item bgc">
                            <img src={opa2} alt="" className="otziv_img" />
                            <h2 className="otziv_item-heading">
                                {t('otzives.name2')}
                            </h2>

                            <p className="otziv_text">
                                {t('otzives.text2')}
                            </p>
                        </li>
                    </ul>

                    <img src={gul1} alt="" className="otziv_flower1" />
                    <img src={gul2} alt="" className="otziv_flower2" />
                </div>
            </div>
        </section>
    )
}