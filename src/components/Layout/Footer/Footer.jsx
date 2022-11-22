import React,{useEffect, useState, useRef} from "react";
import { useTranslation } from "react-i18next";
import './footer.scss'
import logo from '../../../assets/images/Logo.svg'
import phone from '../../../assets/images/phone_icon.svg'
import loc from '../../../assets/images/location.svg'
import up from '../../../assets/images/upbt.png'
import email from '../../../assets/images/Email.svg'
import foo_logo from '../../../assets/images/napa_automotive.svg'
import doGet from '../../api/api'

const Footer = () => {

	const { t } = useTranslation();
	const copyRef = useRef();

	
	function scrollTop(){
		window.scrollTo(0,0)
	}

	const [contact, setContact] = useState([])
	const [requisite, setRequisite] = useState([])


	async function contInfo(){
		const cont = await doGet('Contacts/')
		const req = await doGet('Requisites/')
		setContact(cont.data)
		setRequisite(req.data)
	}

	function copy(){
		navigator.clipboard.writeText(
			[
			t("duty"), contact[0]?.dejurniy,'\n',
			t("accounting"),contact[0]?.buhgalteriya,'\n',
			t("telegram"),contact[0]?.telegram,'\n',
			contact[0]?.email,'\n',
			contact[0]?.location,'\n',
		],
			)
			copyRef.current.style.display = 'block'
			
			setTimeout(()=>{
				copyRef.current.style.display = 'none'

			},1500)

	}
	
	useEffect(()=>{
		contInfo()
	},[])



	return (
		
		<div className="footer">

			<div className="card">
				<h3><img src={logo} width='34'/> 
				<span>mapmarkaz.uz</span></h3>
				<p>
					{t("printed")}
				</p>
			</div>

			<div className="card">
				<h3>{t("contact")}</h3>

				<p> <img src={phone}/>  {t("duty")}: {contact[0]?.dejurniy}</p>
                <p> <img src={phone}/>  {t("accounting")}: {contact[0]?.buhgalteriya} </p>
                <p> <img src={phone}/>  {t("telegram")}: {contact[0]?.telegram} </p>
                <p> <img src={email}/>  {contact[0]?.email} </p>
                <p> <img src={loc}/> {contact[0]?.location} </p>
			</div>

			<div className="card">
				<h3>{t("requisites")}</h3>
				<p> {t("bank")}: {requisite[0]?.bank}</p>
                <p> {t("t/c")}:  {requisite[0]?.RS} </p>
                <p> {t("TIN")}:  {requisite[0]?.INN} </p>
                <p> ОКОНХ : {requisite[0]?.OKOHX} </p>
                <p> ОКЕД :  {requisite[0]?.OKED} </p>

				<h3 onClick={copy} style={{cursor:'pointer'}}>
					{t("copy")} 
					<span ref={copyRef} id='copied'>{t("copied")}</span>
				</h3>
			</div>

			<div className="bottom">

					<p style={{float:'left'}}>Copyright © 2022 mapmarkaz</p>
				

					<button onClick={scrollTop} id='myBtn'><img src={up} /></button>
				

					<img src={foo_logo} style={{float:'right', width:'100px'}}/>
				
			</div>

			
		</div>
	);
};

export default Footer;
