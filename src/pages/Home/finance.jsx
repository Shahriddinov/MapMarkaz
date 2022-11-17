import React, {useState} from 'react'
import './finance.scss'
import searchBtn from '../../assets/images/searchBtn.svg'
import down from '../../assets/images/down.svg'
import see from '../../assets/images/eyeBtn.svg'
import { useTranslation } from 'react-i18next'

const Finance = () => {

	const {t, i18n} = useTranslation();

    const [active, setActive] = useState(1)
    const [empty, setEmpty] = useState("")


    function handleClick(e){
        const eventValue = e.target.dataset.id;
        setActive(eventValue);
    }
    


  return (
    <div className='finance'>
        <div className="title">{t('financial')}</div>

        <div className='pages'>
            <div className="pages-top">
                <div className='select-wrapper'>
                    <p htmlFor="slct">{t('curYear')}</p>
                    <select id='slct'>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                    </select>
                </div>

                <div className="pages-btn">
                    
                    <div className='btn-div'>
                        <p>Квартал</p> 
                        <button >1</button>
                    </div>

                    <div className='btn-div'>
                        <p>Квартал</p> 
                        <button >2</button>
                    </div>

                    <div className='btn-div'>
                        <p>Квартал</p> 
                        <button >3</button>
                    </div>

                    <div className='btn-div'>
                        <p>Квартал</p> 
                        <button>4</button>
                    </div>
                    
                </div>

                <div className='search-btn'>
                    <button> <span>{t('search')}</span> <img src={searchBtn} /> </button>
                </div> 
            </div>
            <hr />
            <div className="pages-bottom">
                <p>{t('file')}</p>
                <button className='btn-down'> {t('download')} <img src={down}/> </button>
                <button className='btn-see'> {t('view')} <img src={see}/> </button>
            </div>
        </div>
    </div>
  )
}

export default Finance