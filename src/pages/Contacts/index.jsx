import Weather from 'components/Layout/Weather'
import React,{useState,useEffect} from 'react'
import './contacts.scss'
import { useTranslation } from "react-i18next";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import doGet from 'components/api/api';

import vPhone from '../../assets/images/Vector-phone.svg';
import vEmail from '../../assets/images/vector-email.svg';
import vLoc from '../../assets/images/vector-loca.svg';
import tg from '../../assets/images/telegram.svg';


const Contacts = () => {
	const {t, i18n} = useTranslation();
	const [contact, setContact] = useState([])

    async function getContacts(){
        const res = await doGet('Contacts/')
		setContact(res.data)

    }

    const [fullname, setFullname] = useState('')
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')
    
    function postCont(e){
        e.preventDefault()
        try{
            const res = axios.post('http://backend.mapmarkaz.uz/send_email/', {
                name: fullname,
                phone_number: number,
                message: text,
            });
        } catch(error){
            console.log(error);
            toast(t('toastFalse'))

        }
        
        setFullname('')
        setNumber('')
        setText('')
        toast(t('toastTrue'))

    }

    function phoneNumb(){
        toast(contact[0]?.dejurniy)

    }
    useEffect(()=>{
        getContacts()
    },[])


  return (
    <div className='contacts'>
        <div className="contact-left">
            <div className="title">{t('set')}</div>

            <div className="contact-text">
                {t('city')}
            </div>
            <form onSubmit={postCont}>

            <div className="send-contacts">
                <div className="send-fullname">
                    <p className='m-title'>{t('fullName')}</p>
                    <input value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" />
                </div>

                <div className="send-number">
                    <p className='m-title'>{t('phoneNumber')}</p>
                    <input value={number} onChange={(e)=>setNumber(e.target.value)} 
                    type="text" placeholder='+998 (_ _) _ _ _-_ _-_ _'/>
                </div>

                <div className="send-text">
                    <p className='m-title'>{t('sms')}</p>
                    <textarea value={text} onChange={(e)=>setText(e.target.value)} name="" id=""></textarea>
                </div>

                <div className="send-btns">
                    <button type='submit' className='btn-send'>{t('sends')}</button>
                    <input type='tel' value={t('setTel')} className='btn-call' onClick={phoneNumb}/>
                    
                </div>
            </div> 
            </form>
        </div>

        <div className="contact-right">
            <Weather/>

            <div className="cont-link-class">
                <div className='cl-title'>{t('forConnect')}</div>

                <div  className='cl-title-it'> 
                    <img src={vPhone}/> <span>{t('duty')}:</span> 
                    <span>{contact[0]?.dejurniy}</span>
                </div>

                <div  className='cl-title-it'> 
                    <img src={vPhone}/> <span>{t('accounting')}:</span> 
                    <span>{contact[0]?.buhgalteriya}</span>
                </div>

                <div  className='cl-title-it'> 
                    <img src={vPhone}/> 
                    <span>{t('telegram')}:</span> 
                    <span>{contact[0]?.telegram}</span>
                </div>

                <div  className='cl-title-it'> 
                    <img src={vEmail}/> 
                    <span>{contact[0]?.email}</span>
                </div>
                
                <div  className='cl-title-it'> 
                    <img src={vLoc}/> 
                    <span>{contact[0]?.location}</span>
                </div>
            </div>

            <div className="social-media-link">
                <div className='sm-link-item'>
                    
                    <a href='https://t.me/mapmarkaz' target={'_blanked'} className="tg">
                        <img src={tg}/>
                    </a>

                </div>
            </div>
        </div>
        <ToastContainer/>
    </div>
  )
}

export default Contacts