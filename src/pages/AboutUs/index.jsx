import Weather from 'components/Layout/Weather'
import React from 'react'
import './index.scss'
import img1 from '../../assets/images/voennoe_logo.svg'
import img2 from '../../assets/images/voennoe_logo2.svg'
import Content from './content'
import ImgPosts from './ImgPosts'
import Bottom from './Bottom'
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();

  return (
    <div className='aboutUsMore'>

        <div className="mainDiv">
            <div className="left">
                <p>{t("weAbout")}</p>
            </div>
            
            <div className="right">
                <Weather/>
            </div>
        </div>

        <div className="box">
            <div className="images">
                <img src={img1} width='50%'/>
                <img src={img2} width='50%'/>
            </div>

            <div className="text">
                <h3>{t("story")} Mapmarkaz</h3>
                <p>
                    {t("info")}
                </p>
                <p>
                    {t("performs")}
                </p>
            </div>
        </div>

        <div className="content">
            <Content/>
        </div>

        <div className="imgPosts">
            <ImgPosts/>
        </div>

        <div className="bottom">
            <Bottom/>
        </div>
    </div>
  )
}

export default AboutUs