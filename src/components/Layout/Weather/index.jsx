import React, {useState} from 'react'
import './weather.scss'
import earth from "../../../assets/images/earth-gif.gif"

const Weather = () => {
   
  const [city, setCity] = useState([])
  return (
    <div className='main'>
        <div className="wrapper">
          
              <img src={earth}/>
            
        </div>

        

    </div>
  )
}

export default Weather