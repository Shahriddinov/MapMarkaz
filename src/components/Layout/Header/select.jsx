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
    <select onChange={ e => handleChangeLng(e.target.value)}>
        <option onClick={e =>handleChangeLng("uz")} value="uz">O'zbek</option>
		    <option onClick={e =>handleChangeLng('ru')} value='ru'>Русский</option>
        <option onClick={e =>handleChangeLng('uz_kiril')} value='uz_kiril'>Ўзбек</option>
    </select>
  )
}

export default Select