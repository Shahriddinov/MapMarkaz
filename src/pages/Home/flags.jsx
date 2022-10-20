import React from 'react'
import mflag from '../../assets/images/mini_flag.svg'
import './flags.scss'
import { cities } from '../../components/Layout/Weather/cities'
import { useTranslation } from "react-i18next";
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const Flags = () => {

  const {t, i18n} = useTranslation();
  const [location, setLocation] = useState('tashkent')
  const [data, setData] = useState([])
  const [dt, setDt] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')

  
  const weather_key = 'c7c30e148cab370ab65e14edb2d310cd'
  
  
  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weather_key}&units=metric&lang=ru`).then((response)=>{
      setData(response.data)
      setDt(response.data.dt)
    

      const cityTimeHour = new Date(dt*1000).getHours()
      const cityTimeMinute = new Date(dt*1000).getMinutes()

      setHour(cityTimeHour)
      setMinute(cityTimeMinute)

    })
    
  },[location])

  return (
    <div className='flags-card'>
         <div className="flags">
              <div className="flags-leftbox">
                  <div>{t('useLink')}</div>
                  <div className="flags-leftbox-links">
                    <p><a href='https://mudofaa.uz/' target='_blanked'>mudofaa.uz</a></p>
                    <p><a href='https://uzspace.uz/' target='_blanked'>uzspace.uz</a></p>
                    <p><a href='https://kadastr.uz/' target='_blanked'>kadastr.uz</a></p>
                    <p><a href='https://gisinfo.ru/' target='_blanked'>gisinfo.ru</a></p>
                  </div>
               </div>

           <div className="flags-rightbox">
                <div>{t('siteVisit')}</div>
                <div className='rightbox-mini-flag'>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>
                    <p> <img src={mflag}/> 5 </p>   
                </div>
            </div>

      </div> 

        <div className="weather-bottom-class">
        <div className="wea-bottom">
          <div className="wea-inputs">
            <select onChange={(e)=>setLocation(e.target.value)}>
              {cities.map((item)=>{return(
                <option key={item.id} value={item.value}> {item.name}</option>
              )})}
            </select>

            <input type="date" className='inp'/>
          </div>

          <div className="tepms">
            <div className="main-temp">
              {data.main ? <p>{data.main.temp}°</p> : null}
              {data.weather ? <span>{data.weather[0].description}</span> : null}
              <br />
              {data.weather ? <span>{data.main.feels_like}°, {data.main.humidity}°</span> : null}
            </div>

            <div className="tn-temp">
              <p>{hour+1}:{minute}</p>
               {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}

            </div>

            <div className="tn-temp">
              <p>{hour+2}:{minute}</p>
              {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}
            </div>

            <div className="tn-temp">
             <p>{hour+3}:{minute}</p>
              {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}
            </div>

            <div className="tn-temp">
              <p>{hour+4}:{minute}</p>
              {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}
            </div>

            <div className="tn-temp">
              <p>{hour+5}:{minute}</p>
              {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}
            </div>
          </div>
        </div>
        </div>
  </div>
  )
}

export default Flags