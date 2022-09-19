import React, {useState, useEffect} from 'react'
import { heros } from './images'
import './ImgPosts.scss'
import cher from '../../assets/images/cherte.svg'
import sloy1 from '../../assets/images/sloy1.svg'
import sloy2 from '../../assets/images/sloy2.svg'
import sloy3 from '../../assets/images/sloy3.svg'
import sloy4 from '../../assets/images/sloy4.svg'
import sloy5 from '../../assets/images/sloy5.svg'
import sloy6 from '../../assets/images/sloy6.svg'
import sloy7 from '../../assets/images/sloy7.svg'
import sloy8 from '../../assets/images/sloy8.svg'
import sloy9 from '../../assets/images/sloy9.svg'
import sloy10 from '../../assets/images/sloy10.svg'
import { useTranslation } from "react-i18next";
import doGet from 'components/api/api'


const ImgPosts = () => {
    const {t} = useTranslation();
    const [posts, setPost] = useState([])
    const [heros, setHeros] = useState([])

    async function getHeros(){
        const res = await doGet('Heros/')
        setHeros(res.data)
    }
    async function getPosts(){
        const res = await doGet('AboutUsMore/')
        setPost(res.data)
    }

    useEffect(()=>{
        getHeros()
        getPosts()
    },[])

    return (
    <div className='imgPosts'>
        <p>{t("heroes")}</p>

        <div className="posts">
            {heros.map((item)=>{
                return <img src={item.img} key={item.id} width='33%'/>
            })}
        </div>

        <div className="someClass">
            <p> {t("lines")}</p>
            <div> <img src={cher} width='100%'/></div>
        </div>

        {posts.map((item)=>{
            return(
                <div className="someClass" key={item.id}>
                    <p> {item.header}</p>
                    <div className='d_img'>
                         <img src={item.images} width='50%'/> 
                         <img src={item.images} width='50%'/></div>
                    </div>
            )
        })}


        {/* <div className="someClass">
            <p> {t("factory")}</p>
            <div className='d_img'> <img src={sloy1} width='50%'/> <img src={sloy2} width='50%'/></div>
        </div>

        <div className="someClass">
            <p> {t("printers")}  </p>
            <div className='d_img'><img src={sloy3} width='50%'/> <img src={sloy4} width='50%'/></div>
        </div>

        <div className="someClass">
            <p>{t("easel")}</p>
            <div className='d_img'><img src={sloy5} width='50%'/> <img src={sloy6} width='50%'/></div>
        </div>

        <div className="someClass">
            <p> {t("park")}</p>
            <div className='d_img'><img src={sloy7} width='50%'/> <img src={sloy8} width='50%'/></div>
        </div>

        <div className="someClass">
            <p> {t("earthquake")} 26.04.1966</p>
            <span>{t("result")}</span>
            <div className='d_img'><img src={sloy9} width='50%'/> <img src={sloy10} width='50% '/></div>
        </div> */}

    </div>
  )
}

export default ImgPosts