import React, { useState } from 'react'
import './aboutUs.scss'
import firstImg from '../../assets/images/firstImg.svg'
import sectImg from '../../assets/images/secImg.svg'
import thirdImg from '../../assets/images/thirdImg.svg'
import { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import doGet from 'components/api/api'





const AboutUs = () => {
	const {t} = useTranslation();

	const r = '>'

	const [text, setText] = useState([])

	// 	async function getAboutUs(){
	// 		const res = await doGet('AboutUs/')
	// 		setText(res.data[0])
	// 	}
	// useEffect(()=>{
	// 	getAboutUs()
	// },[])

	// console.log('aboutUs', text);

  return (
    <div className="aboutUs">
				<div className="first">
					<div className="img">
						<img src={firstImg} width='100%'/>
					</div>

					<div className="text">
						<p className="fp">{t("weAbout")}</p>

						<p className="sp">
							{t("info")}
					    <br />
					    <br />
							{t("performs")}
						</p>
					</div>

				</div>

				<div className="second">
					<div className="img">
						<img src={sectImg} width='100%'/>
					</div>

					<div className="text">
						<p className="sp">
							{t("history")}
							<br />
							<br />
							{t("years")}
						</p>
					</div>

				</div>

				<div className="third">
					<div className="img">
						<img src={thirdImg} width='100%'/>
					</div>

					<div className="text">

						<p className="sp">
							{t("card")}
						</p>
					<button>{t("more")} {r} </button>
					</div>

				</div>
			</div>
  )
}

export default AboutUs