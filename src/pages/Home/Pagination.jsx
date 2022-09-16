import React from 'react'
import searchBtn from '../../assets/images/searchBtn.svg'
import eyeBtn from '../../assets/images/eyeBtn.svg'
import downl from '../../assets/images/down.svg'
import './pagination.scss'
import { useTranslation } from "react-i18next";
const Pagination = () => {
	const {t} = useTranslation();

	return (
    <div className="pagination">
				<div className="title">{t("financial")}</div>

				<div className="box">
					<div className="top">

						<select>
							<option value="2022">2022</option>
							<option value="2021">2021</option>
							<option value="2020">2020</option>
							<option value="2019">2019</option>
							<option value="2018">2018</option>
						</select>

						<button>1</button>
						<button>2</button>
						<button>3</button>
						<button>4</button>
						<button className="dark_btn">{t("search")} <img src={searchBtn} /></button>
					</div>
					<hr />

					<div className="bottom">
						<p>{t("file")}</p>
						<button className="blue_btn">{t("download")} PDF <img src={downl} /></button>
						<button className="dark_btn">{t("view")} <img src={eyeBtn} /></button>
					</div>
				</div>
			</div>
  )
}

export default Pagination