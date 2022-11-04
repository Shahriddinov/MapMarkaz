import React from 'react'
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
  const [dt, setDt] = useState([])
  const [lats, setLats] = useState()
  const [lons, setLons] = useState()
  const [hour, setHour] = useState('')

  const [oneVisitor, setOneVisitor] = useState('')
  const [allTimeVisits, setAllTimeVisits] = useState('')
  const [allTimeVisitors, setAllTimeVisitors] = useState([])

  const [daily, setDaily] = useState([])
  const [sDaily, setSDaily] = useState()



  const weather_key = 'c7c30e148cab370ab65e14edb2d310cd'
  
  // calendar default value
  let curr = new Date();
  curr.setDate(curr.getDate());
  let today = curr.toISOString().substring(0,10);



  function getVisitors(){
    let oneDayVisitor = localStorage.getItem('_ym_wv2rf:90960684:0')
    let allTime = localStorage.getItem('_ym90960684:0_reqNum')

    setOneVisitor(oneDayVisitor)
    setAllTimeVisits(allTime)
    setAllTimeVisitors(allTime)

  }

  const getThatDay=(e)=>{
    
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lon=${lons}&lat=${lats}&appid=${weather_key}&units=metric&lang=ru`).then((response)=>{
      setDaily(response.data)
    })
    setSDaily(e.target.value)
    console.log("s",daily, "d", sDaily);


  }
  
  
  useEffect(()=>{

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lon=${lons}&lat=${lats}&q=${location}&appid=${weather_key}&units=metric&lang=ru`).then((response)=>{  
      setData(response.data)
      setDt(response.data.dt)
      setLons(response.data.coord.lon)
      setLats(response.data.coord.lat)

      let cityTimeHour = new Date().getHours()

      setHour(cityTimeHour)

    })
    
    getVisitors()
    
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
                <div>{t('siteVisitDay')} {oneVisitor}  {t('siteVisitAllTime')} {allTimeVisits}</div>
                <div className='rightbox-mini-flag'>


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

             <input type={'date'} defaultValue={today} className='inp' onChange={getThatDay}/>

            {/* <select className='inp' onChange={getThatDay}>
              <option value="b">today</option>
              <option value="e">tomorrow</option>

            </select> */}
          </div>

          <div className="tepms">
            <div className="main-temp">
              {data.main ? <p>{data.main.temp}°</p> : null}
              {data.weather ? <span>{data.weather[0].description}</span> : null}
              <br />
              {data.weather ? <span>{data.main.feels_like}°, {data.main.humidity}°</span> : null}
            </div>

            <div className="tn-temp">
              <p>{hour+1}:00</p>
               {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}

            </div>

            <div className="tn-temp">
              <p>{hour+2}:00</p>
              {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}
            </div>

            <div className="tn-temp">
             <p>{hour+3}:00</p>
              {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}
            </div>

            <div className="tn-temp">
              <p>{hour+4}:00</p>
              {data.weather ? <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}/> : null}
              <br />
              <br />
              {data.main ? <p>{data.main.temp}°</p> : null}
            </div>

            <div className="tn-temp">
              <p>{hour+5}:00</p>
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