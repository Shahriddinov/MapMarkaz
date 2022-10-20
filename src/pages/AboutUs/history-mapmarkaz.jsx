import React,{useState, useEffect} from 'react'
import vLogo1 from '../../assets/images/voennoe_logo.svg'
import vLogo2 from '../../assets/images/voennoe_logo2.svg'
import sol1 from '../../assets/images/soldier1.svg'
import sol2 from '../../assets/images/soldier2.svg'
import sol3 from '../../assets/images/soldier3.svg'
import sol4 from '../../assets/images/soldier4.svg'
import sol5 from '../../assets/images/soldier5.svg'
import pic1 from '../../assets/images/item1.svg'
import pic2 from '../../assets/images/item2.svg'
import pic3 from '../../assets/images/item3.svg'
import pic4 from '../../assets/images/item4.svg'
import pic5 from '../../assets/images/item5.svg'
import pic6 from '../../assets/images/item6.svg'
import port1 from '../../assets/images/portret1.svg'
import port2 from '../../assets/images/portret2.svg'
import './history-mapmarkaz.scss'
import { useTranslation } from 'react-i18next'
import doGet from 'components/api/api'


const HistoryMapmarkaz = () => {

  const {t, i18n} = useTranslation();

  const [post, setPost] = useState([])
  const [aboutUs, setAboutUs] = useState([])

  async function getPosts(){
    const res = await doGet('History/')
    const abus = await doGet('AboutUsMore/')
    setPost(res.data)
    setAboutUs(abus.data)
  }

  useEffect(()=>{
    getPosts()
  },[])

  return (
    <div className='historyMapmarkaz'>
        <div className="history-mapmarkaz">
            <div className="hm-box">
                <div className="hm-box-left">
                    <img src={vLogo1} />
                    <img src={vLogo2} />
                </div>

                <div className="hm-box-right">
                    <div className='title'>{t('story')}</div>

                    <p>{post[0]?.text}</p>
                    <p>{post[1]?.text}</p>
                </div>
            </div>

            <div className="hm-soldiers">
                <div className="hm-soldiers-left">
                    <div className="soldier-img">
                        <img src={sol1}/>
                        <p>{t('soldier1')}</p>
                    </div>
                    <div className="soldier-img">
                        <img src={sol2}/>
                        <p> {t('soldier2')}</p>
                    </div>
                    <div className="soldier-img">
                        <img src={sol3}/>
                        <p>{t('soldier3')}</p>
                    </div>
                </div>

                <div className="hm-soldiers-right">

                    <p>{post[2]?.text}</p>
                    <p>{post[3]?.text}</p>
                </div>
            </div>

            <div className="hm-soldiers">
                <div className="hm-soldiers-left">
                    <div className="soldier-img">
                        <img src={sol4}/>
                        <p>{t('soldier4')}</p>
                    </div>
                    <div className="soldier-img">
                        <img src={sol5}/>
                        <p>{t('soldier5')}</p>
                    </div>
                </div>

                <div className="hm-soldiers-right">

                    <p>{post[4]?.text}</p>
                    <p>{post[5]?.text}</p>
                </div>
            </div>

            <div className="portret">
                <div className="portret-pic">
                    <img src={port1} />
                    <img src={port2} />
                </div>

                <div className="portret-text">
                   
                <p>{t('september')}</p>
                <p>{t('january')}</p>
                <p>{t('may')}</p>
                <p>{t('1937-38')}</p>
                <p>{t('regard')}</p>
                </div>
            </div>

            <div className="hm-posts">

                <div className="title-img">
                    <p>{t('photos')}</p>
                    <img src={pic1} />
                    <img src={pic2} />
                </div>

                <div className="title-img">
                    <p>{t('replacing')}</p>
                    <img src={pic3} />
                    <img src={pic4} />
                </div>

                <div className="title-img">
                    <p>{t('oldCar')}</p>
                    <img src={pic5} />
                    <img src={pic6} />
                </div>

                <div className="hm-post-text">
                    <p>{t('department')}</p>

                    <p>{t('during')}</p>

                    <p>{t('august')}</p>
                    <p>{t('think')}</p>

                    <p>{t('become')}</p>
                </div>

            </div>


        </div>
    </div>
  )
}

export default HistoryMapmarkaz