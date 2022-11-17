import React,{useState, useEffect} from 'react'
import sloy from '../../assets/images/sloy0.svg'
// import { headsAndPics } from './headPicsMock'
import './headsPics.scss'
import pic16 from '../../assets/images/pic16.svg'
import pic17 from '../../assets/images/pic17.svg'
import { useTranslation } from 'react-i18next'

import sloy1 from '../../assets/images/sloy1.svg'
import sloy2 from '../../assets/images/sloy2.svg'
import sloy3 from '../../assets/images/sloy3.svg'
import sloy4 from '../../assets/images/sloy4.svg'
import sloy5 from '../../assets/images/sloy5.svg'
import sloy6 from '../../assets/images/sloy6.svg'
import sloy7 from '../../assets/images/sloy7.svg'
import sloy8 from '../../assets/images/sloy8.svg'
import sloy9 from '../../assets/images/sloy9.svg'
import sloy10 from '../../assets/images/sloy10.svg'
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
        <div className="title">{aboutUs[0]?.header}</div>
        <img src={aboutUs[0]?.img1}/>
    </div>

        {/* {
         headsAndPics.map((item)=>{return(
            <div className="headsPics-map" key={item.id}>
                <div className="title">{item.headText}</div>
                <div>
                    <img src={item.pic1} />
                    <img src={item.pic2} />
                </div>
            </div>
        )})
        } */}

            <div>
                
                <div  className="headsPics-map">
                    <div className="title">{aboutUs[1]?.header}</div>
                    <div>
                        <img src={aboutUs[1]?.img1} />
                        <img src={aboutUs[1]?.img2} />
                    </div>
                </div>

                <div  className="headsPics-map">
                    <div className="title">{aboutUs[2]?.header}</div>
                    <div>
                        <img src={aboutUs[2]?.img1} />
                        <img src={aboutUs[2]?.img2} />
                    </div>
                </div>

                <div className="headsPics-map">
                    <div className="title">{aboutUs[3]?.header}</div>
                    <div>
                        <img src={aboutUs[3]?.img1} />
                        <img src={aboutUs[3]?.img2} />
                    </div>
                </div>

                <div className="headsPics-map">
                    <div className="title">{aboutUs[4]?.header}</div>
                    <div>
                        <img src={aboutUs[4]?.img1} />
                        <img src={aboutUs[4]?.img2} />
                    </div>
                </div>
                

                <div className="headsPics-map"> 
                    <div className="title">{aboutUs[5]?.header}</div>
                    <span className='.gr-text'>{t('result')}</span>
                    <div>
                        <img src={aboutUs[5]?.img1} />
                        <img src={aboutUs[5]?.img2} />
                    </div>
                </div>
            </div>

        <div className="headsPics-bottom">
            <div className="hp-bottom-post">
                <div className="hp-post-left">
                    <div className="title">{t('names')}</div>
                    <p className='simple-text'>{t('build')}</p>
                    <img src={pic17} width='100%'/>
                </div>

                <div className="hp-post-right">
                    <img src={pic16} width='100%' />
                    <p>{t('nameInfo')}</p>
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