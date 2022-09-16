import Weather from 'components/Layout/Weather'
import React from 'react'
import './style.scss'
import phone from '../../assets/images/phone_icon.svg'
import mail from '../../assets/images/mail_icon.svg'
import loc from '../../assets/images/location.svg'
import insta from '../../assets/images/instagram.svg'
import fecabook from '../../assets/images/facebook.svg'
import teleg from '../../assets/images/telegram.svg'
import vk from '../../assets/images/vk.svg'
import tiktok from '../../assets/images/tiktok.svg'
import { useTranslation } from "react-i18next";


const Contacts = () => {
    const {t} = useTranslation();

    return (
    <div className='contacts'>

        <div className="left">
            <div className="title">{t("set")}</div>
            
            <div className="text">
                {t("city")}
            </div>

            <div className="inputs">

                <div className="input">
                    <label htmlFor="name">{t("fullName")}</label>
                    <input type="text" id='name'/>
                </div>

                <div className="input">
                    <label htmlFor="name">{t("phoneNumber")}</label>
                    <input type="text" id='name'/>
                </div>
            </div>

            <div className="textarea">
                <label htmlFor="msg">{t("sms")}</label>
                <textarea name="msg" id="msg"/>
            </div>

            <div className="btns">
                <button>{t("sends")}</button>
                <button>{t("setTel")}</button>
            </div>

        </div>

        <div className="right">
            <div className="info">
                <h1 className="contText">{t("contact")}</h1>
                <p> <img src={phone}/>  {t("duty")}: +998 71 233-17-37 </p>
                <p> <img src={phone}/>  {t("accounting")}: +998 71 233-43-44 </p>
                <p> <img src={phone}/>  {t("telegram")}: +998 99 353-49-22 </p>
                <p> ✉  mapmarkaz@umail.uz </p>
                <p> <img src={loc}/>  100060, {t("road")}, 93. </p>

                <div className="socials">

                    <div className="insta">
                        <img src={insta}/>
                    </div>

                    <div className="facebook">
                        <img src={fecabook}/>
                    </div>

                    <div className="telegram">
                        <img src={teleg}/>
                    </div>

                    <div className="vk">
                        <img src={vk}/>
                    </div>

                    <div className="tiktok">
                        <img src={tiktok}/>
                    </div>


                </div>
        </div>
            <Weather/>
        </div>



    </div>
  )
}

export default Contacts