import React,{useEffect, useState} from 'react'
import './content.scss'
import soldier1 from '../../assets/images/soldier1.svg'
import soldier2 from '../../assets/images/soldier2.svg'
import soldier3 from '../../assets/images/soldier3.svg'
import soldier4 from '../../assets/images/soldier4.svg'
import soldier5 from '../../assets/images/soldier5.svg'

import portret1 from '../../assets/images/portret1.svg'
import portret2 from '../../assets/images/portret2.svg'

import item1 from '../../assets/images/item1.svg'
import item2 from '../../assets/images/item2.svg'
import item3 from '../../assets/images/item3.svg'
import item4 from '../../assets/images/item4.svg'
import item5 from '../../assets/images/item5.svg'
import item6 from '../../assets/images/item6.svg'
import { useTranslation } from "react-i18next";
import doGet from 'components/api/api'


const Content = () => {
    const {t} = useTranslation();
    const [soldier, setSoldier] = useState()

    // async function getHeros(){
    //     const res = await doGet('History/')
    //     setSoldier(res.data)
    // }
    // useEffect(()=>{
    //     getHeros()
    // },[])

  return (
    <div className='content'>
        
        <div className="mainPost">
            <div className="images">
                
                <div className='image_class'>
                    <img src={''} />
                    <p></p>
                </div>
                {/* {hero.map((item)=>{return(
                    <div className='image_class' key={item.id}>
                        <img src={item.img} />
                </div>
                )})} */}

            </div>

            <div className="texts">
                <p> 
                    {t("history")}
                </p>

                <p>
                    {t("years")}
                </p>
            </div>
        </div>


        <div className="mainPost2">
            <div className="images">
                <div className='image_class'>
                    <img src={soldier4} />
                    <p>{t("generals")}</p>
                </div>

                <div className='image_class'>
                    <img src={soldier5} />
                    <p>{t("general")}</p>
                </div>

            </div>

            <div className="texts">
                <p>
                    {t("cars")}
                </p>

                <p>
                    {t("try")}
                </p>
            </div>
        </div>
        
        
        <div className="post2">
            <div className="pics">
                <img src={portret1} width='50%'/>
                <img src={portret2} width='50%'/>
            </div>

            <div className="texts">
                <p>
                    {t("september")}
                </p>

                <p>
                    {t("january")}
                </p>

                <p>
                    {t("may")}
                </p>
                
                <p>
                    {t("regard")}
                </p>
               
            </div>
        </div>

        <div className="box2">

            <div className="boxItem">
                <p>{t("photos")}</p>
                <img src={item1} />
                <img src={item2} />
            </div>

            <div className="boxItem">
                <p>{t("replacing")}</p>
                <img src={item3} />
                <img src={item4} />
            </div>

            <div className="boxItem">
                <p>{t("oldCar")}</p>
                <img src={item5} />
                <img src={item6} />
            </div>

            <div className="texts2">
                <p>
                    {t("department")}
                </p>

                <p>
                    {t("during")}
                </p>

                <p>
                    {t("august")}
                </p>

                <p>
                    {t("think")}
                </p>

                <p>
                    {t("mln")}
                </p>

                <p>
                    {t("become")}
                </p>
            </div>

        </div>
    </div>
  )
}

export default Content