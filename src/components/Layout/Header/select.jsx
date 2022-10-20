import React from 'react'
import { useTranslation } from "react-i18next";
import './select.scss'

const Select = () => {

    const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };

  return (
    <select onChange={handleChangeLng}     >
        <option>Ўзбек</option>
		<option>Русский</option>
    </select>
  )
}

export default Select