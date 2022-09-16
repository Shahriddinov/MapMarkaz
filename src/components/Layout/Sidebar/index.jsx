import React from 'react'
import './style.scss'
import { useNavigate } from "react-router-dom";


const Sidebar = ({click}) => {


	  const navigate = useNavigate()

    return (
    <div className='sidebar'>
      <div onClick={click}>X</div>
      <p onClick={()=>navigate('/')}>Главная</p>
      <p onClick={()=>navigate('/aboutus')}>О Нас</p>
      <p onClick={()=>navigate('/contacts')}>Контакты</p>
      <p>
        <select >
          <option value="русский">Руский</option>
          <option value="o'zbek">O'zbek</option>
          <option value="ўзбек">Ўзбек</option>
        </select>
      </p>

    </div>
  )
}

export default Sidebar