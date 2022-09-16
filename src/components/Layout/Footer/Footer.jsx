import React,{useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import './footer.scss'
import logo from '../../../assets/images/Logo.svg'
import phone from '../../../assets/images/phone_icon.svg'
import loc from '../../../assets/images/location.svg'
import up from '../../../assets/images/up.svg'
import email from '../../../assets/images/Email.svg'
import doGet from '../../api/api'

const Footer = () => {

	const { t } = useTranslation();

	const [contact, setContact] = useState()

	async function contInfo(){
		const res = await doGet('Contacts/')
		setContact(res.data[0])
	}
	useEffect(()=>{
		contInfo()
	},[])

	console.log('contacts', contact);

	return (
		
		<div className="footer">

			<div className="card">
				<h3><img src={logo} width='34'/> <span>mapmarkaz.uz</span></h3>
				<p>
					{t("printed")}
				</p>
			</div>

			<div className="card">
				<h3>{t("contact")}</h3>

				<p> <img src={phone}/>  {t("duty")}: </p>
                <p> <img src={phone}/>  {t("accounting")}: +998 71 233-43-44 </p>
                <p> <img src={phone}/>  {t("telegram")}: +998 99 353-49-22 </p>
                <p> <img src={email} />  mapmarkaz@umail.uz </p>
                <p> <img src={loc}/>  100060, {t("road")}, 93. </p>
			</div>

			<div className="card">
				<h3>{t("requisites")}</h3>
				<p> {t("bank")}: {t("filia")}</p>
                <p> {t("t/c")}:  20203000000447954002 </p>
                <p> {t("TIN")}:  201052239 </p>
                <p> ОКОНХ : 19400 </p>
                <p> ОКЕД :  18120 </p>
				<h3>{t("copy")}</h3>
			</div>

			<div className="bottom">

					<p style={{float:'left'}}>Copyright © 2022 mapmarkaz</p>
				

					<button><img src={up} /></button>
				

					<p style={{float:'right'}}>Developer by Napa</p>
				
			</div>

			
		</div>
	);
};

export default Footer;
