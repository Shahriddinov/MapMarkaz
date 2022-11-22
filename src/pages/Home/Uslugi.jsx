import React, {useState, useEffect} from 'react'
import './uslugi.scss'
import cardImg2 from '../../assets/images/card_img2.svg'
import cardImg3 from '../../assets/images/card_img3.svg'
import cardImg4 from '../../assets/images/card_img4.svg'
import cardImg5 from '../../assets/images/card_img5.svg'
import { useTranslation } from 'react-i18next'
import YanMap from 'components/YMap'
import doGet from 'components/api/api'

const Uslugi = () => {

	const {t, i18n} = useTranslation();
	const [uslugi, setUslugi] = useState([])

	async function getUslugi(){
		const res = await doGet('Services/')
		setUslugi(res.data)
	}
	useEffect(()=>{
		getUslugi()
	},[])


  return (
    <div className='uslugi'>
        <div className="wh-title">{t('serves')}</div>

        <div className="cards">

            {uslugi.map((item)=>{
                return(

                    <div className="card" key={item.id}>
                        <div className="card-img">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="card-text">
                            <span>{item.service_name_uz}</span>
                        </div>
                    </div>
                )
            })
            }

            {/* <div className="card">
                <div className="card-img">
                    <YanMap/>
                </div>
                <div className="card-text">
                    <span>{t('various')}</span>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={cardImg2} alt="" />
                </div>
                <div className="card-text">
                    <span>{t('model')}</span>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={cardImg3} alt="" />
                </div>
                <div className="card-text">
                    <span>{t('journal')}</span>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={cardImg4} alt="" />
                </div>
                <div className="card-text">
                    <span>{t('logos')}</span>
                </div>
            </div>

            <div className="card">
                <div className="card-img">
                    <img src={cardImg5} alt="" />
                </div>
                <div className="card-text">
                    <span>{t('production')}</span>
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default Uslugi