import Weather from 'components/Layout/Weather'
import React from 'react'
import './index.scss'


import HistoryMapmarkaz from './history-mapmarkaz'
import Heros from './heros.jsx'
import HeadsPics from './headsPics'
import { useTranslation } from 'react-i18next'

const Index = () => {

  const {t, i18n} = useTranslation();
  return (
    <div className='aboutUsMore'>

        <div className="aboutUsMore-top">
            <div className="aboutUsMore-left">
                <div className="title">{t('weAbout')}</div>
            </div>
    
            <div className="aboutUsMore-right">
                <Weather/>
            </div>
        </div>

        <HistoryMapmarkaz/>
        <Heros/>
        <HeadsPics/>
    </div>
  )
}

export default Index