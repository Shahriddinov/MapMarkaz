import React,{useEffect, useState} from 'react'
import './ads.scss'
import down from '../../assets/images/down.svg'
import see from '../../assets/images/eyeBtn.svg'
import up from '../../assets/images/up.svg'
import { useTranslation } from 'react-i18next'
import doGet from 'components/api/api'
import axios from 'axios'


const Ads = () => {

    const [files, setFiles] = useState([])

    async function getFiles(){
        await axios.get('http://backend.mapmarkaz.uz/Announcements/').then((res)=>{
            setFiles(res.data)
        })
    }

    useEffect(()=>{

        getFiles()
    },[])

    const {t, i18n} = useTranslation();
  return (
    <div className='ads'>
        <div className="title">{t('ads')}</div>

        <div className="ads-card">
            <div className="card-top">
                <p>{t('tenders')}</p><img src={up} />
            </div>

            <div className="card-bottom">
               <a href={files[0]?.file} target="_blanked" download={files[0]?.file} className='card-btn-down'>{t('download')} <img src={down}/> </a>
              <a href={files[0]?.file} target="_blanked" download={files[0]?.file} className='card-btn-see'>{t('view')} <img src={see}/>  </a>
            </div>
        </div>

        <div className="ads-card">
            <div className="card-top">
                <p>{t('save')}</p><img src={up} />
            </div>

            <div className="card-bottom">
               <a href={files[1]?.file} target="_blanked" download={files[1]?.file} className='card-btn-down'>{t('download')} <img src={down}/> </a>
              <a href={files[1]?.file} target="_blanked" download={files[1]?.file} className='card-btn-see'>{t('view')} <img src={see}/>  </a>
            </div>
        </div>

        <div className="ads-card">
            <div className="card-top">
                <p>{t('jobs')}</p><img src={up} />
            </div>

            <div className="card-bottom">
               <a href={files[2]?.file} target="_blanked" download={files[2]?.file} className='card-btn-down'>{t('download')} <img src={down}/> </a>
              <a href={files[2]?.file} target="_blanked" download={files[2]?.file} className='card-btn-see'>{t('view')} <img src={see}/>  </a>
            </div>
        </div>
    </div>
  )
}

export default Ads