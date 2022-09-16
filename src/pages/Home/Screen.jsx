import React, {useState, useEffect} from 'react'
import './screen.scss'
import Weather from "components/Layout/Weather";
import jurnal from '../../assets/images/jurnal.svg'
import flag from '../../assets/images/mini_flag.svg'
import moon from '../../assets/images/moon.svg'
import { cities } from 'components/Layout/Weather/data';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const Screen = () => {
	const {t} = useTranslation();

  const [city, setCity] = useState('tashkent')
  const [temp, setTemp] = useState([])
  const [descr, setDescr] = useState()

    let key = 'c7c30e148cab370ab65e14edb2d310cd'



      console.log('weather', temp);



  return (

    <div className="screen">

				<div className="left">
            <div className="title">{t("category")}</div>
            <div className="text">
				{t("center")}
            </div>

            <div className="magazine">
                <div className="leftCard">
					{t("material")}
                    <button className='blue_btn'>{t("allServer")}</button>
                </div>

                <div className="rightCard">
                   <img src={jurnal} width='100%' />
                </div>
            </div>
        </div>

        <div className="right">
          <Weather/>
        </div>


        <div className="bottom">

          <div className="b_left">

              <div className="f_card">
                <h3>{t("useLink")}</h3>
                <div className='links'>
                  <p>mudofaa.uz</p>
                  <p>uzspace.uz</p>
                  <p>kadastr.uz</p>
                  <p>gisinfo.uz</p>
                </div>
              </div>

              <div className="s_card">
                <h3>{t("siteVisit")}</h3>

                <div className='flags'>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>

                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>

                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>
                    <p><img src={flag}/>5</p>


                </div>
              </div>

          </div>

          <div className="b_right">

              <div className="inputs">
                <select >
                  {cities.map((item)=>{return <option
                      value={item.value}
                      key={item.id}
                      >
                        {item.name}</option>
                  })}

                </select>

                <input type="date" />
              </div>

              <div className="celcium">

                <div className="nowTemp">
                    <p className='mainCelc'>27°C</p>
                    <p>{temp}</p>
                    <p>H:29°  L:15°</p>
                </div>

                <div className='days'>
                    <div className='day_temp'>
                        <p>20:00</p>
                        <img src={moon} width='35%'/>
                        <p>18°C</p>
                    </div>

                    <div className='day_temp'>
                        <p>21:00</p>
                        <img src={moon} width='35%'/>
                        <p>18°C</p>
                    </div>

                    <div className='day_temp'>
                        <p>22:00</p>
                        <img src={moon} width='35%'/>
                        <p>18°C</p>
                    </div>

                    <div className='day_temp'>
                        <p>23:00</p>
                        <img src={moon} width='35%'/>
                        <p>18°C</p>
                    </div>

                    <div className='day_temp'>
                        <p>00:00</p>
                        <img src={moon} width='35%'/>
                        <p>18°C</p>
                    </div>
                </div>
            </div>
          </div>

        </div>

	  </div>
  )
}

export default Screen