import './main.scss'
import { useTranslation } from 'react-i18next'

import { useState } from 'react';
import { typeData } from './render';

export default function Main() {
    const [type, setType] = useState("all");

    const {t} = useTranslation()


    return (
        <section id='product' className="main">
            <div className="container">
            <h1 className="main_heading">
                        {t('main.title')}
                        <span className="color">
                            {t('main.title2')}
                        </span>

                        {t('main.title3')}
                </h1>
                <div className="main_container">

                    <div className="main_filter">
                        <h2 className="main_filter_main">
                            {t('main.filter')}
                        </h2>
                    <div className="main_fliter-kind">
                        <h2 className="main_filter-heading">
                            {t('main.kind')}
                        </h2>

                        <div className="main_filter-wrap">
                            <button onClick={() => setType("all")} className={`main_filter-btn ${type === "all" ? "active" : ""}`}>
                                {t('main.all')}
                            </button>

                            <button onClick={() => setType("makasina")} className={`main_filter-btn ${type === "makasina" ? "active" : ""}`}>
                                {t('main.makasina')}
                            </button>

                            <button onClick={() => setType("krosovka")} className={`main_filter-btn ${type === "krosovka" ? "active" : ""}`}>
                                {t('main.classic')}
                            </button>

                            <button onClick={() => setType("tufli")} className={`main_filter-btn ${type === "tufli" ? "active" : ""}`}>
                                {t('main.tufli')}
                            </button>
                        </div>
                        </div>

                        <div className="main_fliter-color">
                        <h2 className="main_filter-heading">
                            {t('main.color')}
                        </h2>

                        <div className="main_filter-wrap">
                            <button onClick={() => setType("white")} className={`main_filter-btn ${type === "white" ? "active" : ""}`}>
                                {t('main.white')}
                            </button>

                            <button onClick={() => setType("blue")} className={`main_filter-btn ${type === "blue" ? "active" : ""}`}>
                                {t('main.blue')}
                            </button>

                            <button onClick={() => setType("black")} className={`main_filter-btn ${type === "black" ? "active" : ""}`}>
                                {t('main.black')}
                            </button>

                            <button onClick={() => setType("red")} className={`main_filter-btn ${type === "red" ? "active" : ""}`}>
                                {t('main.red')}
                            </button>

                            <button onClick={() => setType("green")} className={`main_filter-btn ${type === "green" ? "active" : ""}`}>
                                {t('main.gren')}
                            </button>
                        </div>
                        </div>
                    </div>

                    <div id='render_main' className="main_render">
                        {
                            typeData[type].map((item, index) => (
                                <div className='main_div'> 
                                   <img src={require(`../../assets/${item.image}`)} alt="" className="main__img" />
                                   <h3 className="main_div-heading">
                                    {t(item.name)}
                                   </h3>

                                   <p className="main_div-price">
                                    {t('main.narx')} : <span className="main_div-span">
                                        {item.price} 000
                                    </span>
                                   </p>

                                   <div className="main_div-wrap">
                                   <p className="main_div-text">
                                    {t('main.size')} : <span>{item.size}</span>
                                   </p>

                                   <div className="main_heading-wrap">
                                  <div className='main_color-wrap'>
                                   {
                                    item.colors.map((item, index) => (
                                       <div className='main_colors' style={{backgroundColor: `${item}`}}>
                                       </div> 
                                    ))
                                   }
                                    </div>
                                 </div> 
                                   </div>
                                 
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </section>
    )
}