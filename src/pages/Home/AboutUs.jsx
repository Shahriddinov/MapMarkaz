import React, {useState, useEffect} from 'react'
import postImg1 from '../../assets/images/rect1.svg'
import postImg2 from '../../assets/images/rect2.svg'
import postImg3 from '../../assets/images/rect3.svg'
import './aboutUs.scss'
import { useTranslation } from "react-i18next";
import doGet from 'components/api/api'

const AboutUs = () => {
	const {t, i18n} = useTranslation();

    const [texts, setTexts] = useState([])

    async function getText(){
        const res = await doGet('AboutUs/')
        setTexts(res.data)
    }
    useEffect(()=>{
        getText()
    },[])

  return (
    <div className='aboutUs'>
        <div className="first-post">
            <div className="post-img">
                <img src={postImg1} alt="" />
            </div>
            <div className="post-text">
                <div className='title'>{t('weAbout')}</div>
                <p>{texts[0]?.[`text_${localStorage.getItem("lng")}`]}</p>
                <p>{texts[1]?.[`text_${localStorage.getItem("lng")}`]}</p>
            </div>
        </div>

        <div className="second-post">
            <div className="post-img">
                <img src={postImg2} alt="" />
            </div>
            <div className="post-text">
                <p>{texts[2]?.[`text_${localStorage.getItem("lng")}`]}</p>
                <p>{texts[3]?.[`text_${localStorage.getItem("lng")}`]}</p>
            </div>
        </div>

        <div className="third-post">
            <div className="post-img">
                <img src={postImg3} alt="" />
            </div>
            <div className="post-text">
                <p>{texts[4]?.[`text_${localStorage.getItem("lng")}`]}</p>
                
            </div>
        </div>
    </div>
  )
}

export default AboutUs