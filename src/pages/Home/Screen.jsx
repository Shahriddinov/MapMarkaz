import React from 'react'
import './screen.scss'
import jurnal from '../../assets/images/jurnal.svg'
import Weather from 'components/Layout/Weather'
import { useTranslation } from "react-i18next";

const Screen = () => {

	const {t, i18n} = useTranslation();

  return (
    <div className='screen'>
        <div className="screen-left">
            <div className="screen-title">{t('category')}</div>
            <div className="screen-text">
                {t('center')}
            </div>

            <div className='left-box-cards'>
                <div className='box-card'>
                    <p>{t('material')}</p>

                    <button>{t('allServer')}</button>
                </div>
                <div className='box-card'>
                    <img src={jurnal} width='100%'/>
                </div>
            </div>

        </div>

        <div className="screen-right">
            <Weather/>
        </div>



    </div>
  )
}

export default Screen