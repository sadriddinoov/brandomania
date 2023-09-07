import './pluc.scss'
import { useTranslation } from 'react-i18next'

import gul from '../../assets/flower-removebg-preview 1.png'
import doc from '../../assets/doc.png'
import guarant from '../../assets/guranat.png'
import box from '../../assets/gif.png'

export default function Pluc() {
    const {t} = useTranslation()

    return (
        <section className="pluc">
            <div className="container">
                <div className="pluc_container">
                    <h1 className="pluc_heading">
                        {t('pluc.title')}
                        <span className="color">
                            {t('pluc.subtitle')}
                        </span>
                    </h1>
                <ul className="pluc_list bgc">
                    <li className="pluc_item">
                       <div className="pluc_wrap">
                       <img src={doc} alt="" className="pluc_img" />
                       </div>
                       <h3 className="pluc_item-heading">
                        {t('pluc.name1')}
                       </h3>

                       <p className="pluc_text">
                        {t('pluc.text1')}
                        </p> 
                    </li>

                    <li className="pluc_item">
                       <div className="pluc_wrap">
                       <img src={guarant} alt="" className="pluc_img" />
                       </div>
                       <h3 className="pluc_item-heading">
                        {t('pluc.name2')}
                       </h3>

                       <p className="pluc_text">
                        {t('pluc.text2')}
                        </p> 
                    </li>

                    <li className="pluc_item">
                      <div className="pluc_wrap">
                      <img src={box} alt="" className="pluc_img" />
                      </div>
                       <h3 className="pluc_item-heading">
                        {t('pluc.name3')}
                       </h3>

                       <p className="pluc_text">
                        {t('pluc.text3')}
                        </p> 
                    </li>
                </ul>

                <img src={gul} alt="" className="pluc_absolut" />
                </div>
            </div>
        </section>
    )
}