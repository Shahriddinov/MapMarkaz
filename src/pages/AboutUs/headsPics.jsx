import React,{useState, useEffect} from 'react'
// import { headsAndPics } from './headPicsMock'
import './headsPics.scss'
import pic16 from '../../assets/images/pic16.svg'
import pic17 from '../../assets/images/pic17.svg'
import cap from '../../assets/images/Capture.PNG'
import { useTranslation } from 'react-i18next'

import doGet from 'components/api/api'

const HeadsPics = () => {

    const {t,i18n} = useTranslation();

    const [aboutUs, setAboutUs] = useState([])
  
    async function getPosts(){
      const res = await doGet('AboutUsMore/')
      setAboutUs(res.data)
    }
  
    useEffect(()=>{
      getPosts()
    },[])
  return (
    
    <div className='headsPics'>
        <div className="headsPics-top">
        <div className="title"> {aboutUs[0]?.header_ru}</div>
        <img src={aboutUs[0]?.img1}/>
    </div>

            <div>
                
                <div  className="headsPics-map">
                    <div className="title">{aboutUs[1]?.header_ru}</div>
                    <div>
                        <img src={aboutUs[1]?.img1} />
                        <img src={aboutUs[1]?.img2} />
                    </div>
                </div>

                <div  className="headsPics-map">
                    <div className="title">{aboutUs[2]?.header_ru}</div>
                    <div>
                        <img src={aboutUs[2]?.img1} />
                        <img src={aboutUs[2]?.img2} />
                    </div>
                </div>

                <div className="headsPics-map">
                    <div className="title">{aboutUs[3]?.header_ru}</div>
                    <div>
                        <img src={aboutUs[3]?.img1} />
                        <img src={aboutUs[3]?.img2} />
                    </div>
                </div>

                <div className="headsPics-map">
                    <div className="title">{aboutUs[4]?.header_ru}</div>
                    <div>
                        <img src={aboutUs[4]?.img1} />
                        <img src={aboutUs[4]?.img2} />
                    </div>
                </div>
                

                <div className="headsPics-map"> 
                    <div className="title">{aboutUs[5]?.header_ru}</div>
                    <span className='.gr-text'>{t('result')}</span>
                    <div>
                        <img src={aboutUs[5]?.img1} />
                        <img src={aboutUs[5]?.img2} />
                    </div>
                </div>
            </div>

        <div className="headsPics-bottom">
            <div className="hp-bottom-post">

                <div className="hp-post-lm">
                    <img src={pic16} width='50%' />
                    <img src={cap} width='50%' />
                    <p>{t('nameInfo')}</p>
                </div>
                <div className="hp-post-st">

                    <p className='simple-text'>{t('build')}</p>
                    <img src={pic17} width='100%'/>
                </div>
            </div>

            <div className="hp-bottom-text">

                <p className='simple-text'>{t('real')}</p>
                <p className='simple-text'>{t('maps')}</p>

                <p className='simple-text'>{t('full')}</p>

                <p className='simple-text'>{t('arm')}</p>
                
                <p className='simple-text'>{t('jule')}</p>
                <p className='simple-text'>{t('technical')}</p>
                <p className='simple-text'>{t('management')}</p>
            </div>
        </div>
        
    </div>
  )
}

export default HeadsPics