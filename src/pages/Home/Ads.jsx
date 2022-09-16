import React from 'react'
import './ads.scss'

import eyeBtn from '../../assets/images/eyeBtn.svg'
import downl from '../../assets/images/down.svg'
import up from '../../assets/images/upv.svg'
import { useTranslation } from "react-i18next";

const Ads = () => {
	const {t} = useTranslation();

	return (
    <div className="ads">
				<div className="title">{t("ads")}</div>

				<div className="box">
					<div className="top">
						<p>{t("tenders")}</p>
						<img src={up} />
					</div>

					<div className="bottom">
						<button className="blue_btn">{t("download")} PDF <img src={downl} /></button>
						<button className="dark_btn">{t("view")} <img src={eyeBtn} /></button>
					</div>
				</div>

				<div className="box">
					<div className="top">
						<p>{t("save")}</p>
						<img src={up} />
					</div>

					<div className="bottom">
						<button className="blue_btn">{t("download")} PDF <img src={downl} /></button>
						<button className="dark_btn">{t("view")} <img src={eyeBtn} /></button>
					</div>
				</div>

				<div className="box">
					<div className="top">
						<p>{t("jobs")} </p>
						<img src={up} />
					</div>

					<div className="bottom">
						<button className="blue_btn">{t("download")} PDF <img src={downl} /></button>
						<button className="dark_btn">{t("view")} <img src={eyeBtn} /></button>
					</div>
				</div>
			</div>
  )
}

export default Ads