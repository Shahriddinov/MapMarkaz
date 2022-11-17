import React,{useState, useEffect} from 'react'
import './heros.scss'
// import {herosPic} from './heros'
import { useTranslation } from 'react-i18next'
import doGet from 'components/api/api'

const Heros = () => {
  const {t, i18n} = useTranslation();

  const [pics, setPics] = useState([])

  async function getPics(){
    const res = await doGet('Heros/')
    setPics(res.data)
  }

  useEffect(()=>{
    getPics()
  },[])

  return (
    <div className='heros'>

        <div className="title">{t('heroes')}</div>
        
        <div className="hero-map">
            {pics.map((item)=>{
                return(
                    <img src={item.img} key={item.id}/>
                )
            })}
        </div>
    </div>
  )
}

export default Heros