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

  async function getPosts(){
    const res = await doGet('History/')
    setPost(res.data)
    console.log(res.data);

  }

  useEffect(()=>{
    getPosts()

  },[])


  return (
    <div className='historyMapmarkaz'>
        <div className="history-mapmarkaz">
            <div className="hm-box">

                <div className="hm-box-top">
                    <div className='title' style={{textAlign:'center'}}>{t('story')}</div>

                    <p>{post[0]?.[`text_${localStorage.getItem("lng")}`]}</p>
                    <p>{post[1]?.[`text_${localStorage.getItem("lng")}`]}</p>
                    <p>{post[2]?.[`text_${localStorage.getItem("lng")}`]}</p>
                    <p>{post[3]?.[`text_${localStorage.getItem("lng")}`]}</p>
                    <p>{post[4]?.[`text_${localStorage.getItem("lng")}`]}</p>
                    <p>{post[5]?.[`text_${localStorage.getItem("lng")}`]}</p>
                </div>

                <div className="hm-box-bottom">
                    <img src={post[0]?.img1} />
                    <img src={post[1]?.img1} />
                </div>

                <div className="hm-box-soldiers">

                    <div className="soldier-img">
                        <img src={post[2]?.img1}/>
                        <p>{t('soldier1')}</p>
                    </div>
                    <div className="soldier-img">
                        <img src={post[2]?.img2}/>
                        <p> {t('soldier2')}</p>
                    </div>
                    <div className="soldier-img">
                        <img src={post[3]?.img1}/>
                        <p>{t('soldier3')}</p>
                    </div>

                </div>

                <div className="hm-box-soldiers">
                    
                    <div className="soldier-img">
                        <img src={post[4]?.img1}/>
                        <p>{t('soldier4')}</p>
                    </div>
                    <div className="soldier-img">
                        <img src={post[5]?.img1}/>
                        <p>{t('soldier5')}</p>
                    </div>
                </div>
            </div>


            <div className="portret">

                <img src={port1} />
                <p style={{textAlign:'center', fontSize:'20px'}}>{t('topografi')}</p>
                <img src={port2} />


                <div className="portret-text">
                   
                <p>{t('september')}</p>
                <p>{t('january')}</p>
                <p>{t('may')}</p>
                <p>{t('1937-38')}</p>
                <p>{t('regard')}</p>
                </div>
            </div>

            <div className="hm-posts">

                <p className='hm-posts-imgs-title-red'>{t('tech')}</p>
                <p className='hm-posts-imgs-title'>{t('photos')}</p>
                <div className="title-img">
                    <img src={pic1} />
                    <img src={pic2} />
                </div>

                <p className='hm-posts-imgs-title'>{t('replacing')}</p>
                <div className="title-img">
                    <img src={pic3} />
                    <img src={pic4} />
                </div>

                <p className='hm-posts-imgs-title'>{t('oldCar')}</p>
                <div className="title-img">
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