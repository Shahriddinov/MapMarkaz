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
  const [temp, setTemp] = useState()
  const [lons, setLons] = useState()
  const [hour, setHour] = useState('')
  const [desc, setDesc] = useState('')
  const [feelLike, setFeelLike] = useState()
  const [humadity, setHumadity] = useState()

  const [oneVisitor, setOneVisitor] = useState('')
  const [allTimeVisits, setAllTimeVisits] = useState('')
  const [allTimeVisitors, setAllTimeVisitors] = useState([])

  const [daily, setDaily] = useState([])
  const [sDaily, setSDaily] = useState()



  const weather_key = 'c7c30e148cab370ab65e14edb2d310cd'
  
  // calendar default value
  let curr = new Date();
  let curr2 = new Date()
  curr.setDate(curr.getDate());
  let today = curr.toISOString().substring(0,10);

  let day = curr2.getDate()
  let month = curr2.getMonth()+1
  let year = curr2.getFullYear()



  function getVisitors(){
    let oneDayVisitor = localStorage.getItem('_ym_wv2rf:90960684:0')
    let allTime = localStorage.getItem('_ym90960684:0_reqNum')

    setOneVisitor(oneDayVisitor)
    setAllTimeVisits(allTime)
    setAllTimeVisitors(allTime)

  }

  const getThatDay=(e)=>{
    
    setSDaily(e.target.value)
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lon=${lons}&lat=${lats}&appid=${weather_key}&units=metric&lang=ru`).then((response)=>{
      setDaily(response.data)

    })
    
  }
  
  
  useEffect(()=>{

    axios.get(`https://api.openweathermap.org/data/2.5/weather?lon=${lons}&lat=${lats}&q=${location}&appid=${weather_key}&units=metric&lang=ru`).then((response)=>{  
      setData(response.data)
      setDt(response.data.dt)
      setDesc(response.data.weather[0].description)
      setFeelLike(response.data.main.feels_like)
      setHumadity(response.data.main.humidity)
      setLons(response.data.coord.lon)
      setLats(response.data.coord.lat)
      setTemp(response.data.main.temp)
      let cityTimeHour = new Date().getHours()

      setHour(cityTimeHour)

      switch (sDaily) {
        case "0" : setTemp(daily.current.temp)
          break;
      
        case "1" : setTemp(daily.hourly[1].temp)
          break;

        case "2" : setTemp(daily.hourly[2].temp)
          break;

        case "3" : setTemp(daily.hourly[3].temp)
          break;

        case "4" : setTemp(daily.hourly[4].temp)
          break;

        case "5" : setTemp(daily.hourly[5].temp)
          break;

        case "6" : setTemp(daily.hourly[6].temp)
          break;
      }

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

                  <noindex>
                  <a><img src="https://s01.flagcounter.com/count2/t9Wd/bg_FFFFFF/txt_000000/border_FFFFFF/columns_5/maxflags_12/viewers_3/labels_0/pageviews_0/flags_0/percent_0/"/></a>
                  </noindex>

                </div>
            </div>

      </div> 

        <div className="weather-bottom-class">
        <div className="wea-bottom">
          <div className="wea-inputs">
            <select className='selectMap' onChange={(e)=>setLocation(e.target.value)}>
              {cities.map((item)=>{return(
                <option key={item.id} value={item.value}> {item.name}</option>
              )})}
            </select>

             {/* <input type={'date'} defaultValue={today} className='inp' onChange={getThatDay}/> */}

            <select className='selectDay' defaultValue={"0"} onChange={getThatDay}>
              <option value="0">{today}</option>
              <option value="1">{year}-{month}-{day+1}</option>
              <option value="2">{year}-{month}-{day+2}</option>
              <option value="3">{year}-{month}-{day+3}</option>
              <option value="4">{year}-{month}-{day+4}</option>
              <option value="5">{year}-{month}-{day+5}</option>
              <option value="6">{year}-{month}-{day+6}</option>

            </select>
          </div>

          <div className="tepms">
            <div className="main-temp">
              {/* {data.main ? <p>{data.main.temp}°</p> : null} */}
              <p>{temp}°</p>
              <span>{desc}</span> 
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