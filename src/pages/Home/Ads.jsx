import React from 'react'
import './ads.scss'
import down from '../../assets/images/down.svg'
import see from '../../assets/images/eyeBtn.svg'
import up from '../../assets/images/up.svg'
import { useTranslation } from 'react-i18next'

const Ads = () => {

    const {t, i18n} = useTranslation();
  return (
    <div className='ads'>
        <div className="title">{t('ads')}</div>

        <div className="ads-card">
            <div className="card-top">
                <p>{t('tenders')}</p><img src={up} />
            </div>

            <div className="card-bottom">
                <button className='card-btn-down'>{t('download')} <img src={down}/> </button>
                <button className='card-btn-see'>{t('view')} <img src={see}/> </button>
            </div>
        </div>

        <div className="ads-card">
            <div className="card-top">
                <p>{t('save')}</p><img src={up} />
            </div>

            <div className="card-bottom">
                <button className='card-btn-down'>{t('download')} <img src={down}/> </button>
                <button className='card-btn-see'>{t('view')} <img src={see}/> </button>
            </div>
        </div>

        <div className="ads-card">
            <div className="card-top">
                <p>{t('jobs')}</p><img src={up} />
            </div>

            <div className="card-bottom">
                <button className='card-btn-down'>{t('download')} <img src={down}/> </button>
                <button className='card-btn-see'>{t('view')} <img src={see}/> </button>
            </div>
        </div>
    </div>
  )
}

export default Ads