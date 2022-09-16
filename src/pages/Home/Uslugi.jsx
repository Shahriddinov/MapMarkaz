import React from 'react'
import './uslugi.scss'

import vleft from '../../assets/images/VectorLeft.svg'
import vright from '../../assets/images/VectorRight.svg'
import cart2 from '../../assets/images/card_img2.svg'
import cart3 from '../../assets/images/card_img3.svg'
import cart4 from '../../assets/images/card_img4.svg'
import cart5 from '../../assets/images/card_img5.svg'
import YanMap from 'components/YMap'
import { useTranslation } from "react-i18next";


const Uslugi = () => {
	const {t} = useTranslation();


  return (
    <div className="uslugi">
				<h1>{t("serves")}</h1>

				<div className="cards">
			
					<div className="card">
						<YanMap/>
						<p>{t("various")}</p>
						<button className="btnLeft"><img src={vleft} /></button>
						<button className="btnRight"><img src={vright} /></button>
					</div>

					<div className="card">
						<img src={cart2} />
						<p>{t("model")}</p>
					</div>

					<div className="card">
						<img src={cart3} />
						<p>{t("journal")}</p>
					</div>

					<div className="card">
						<img src={cart4} />
						<p>{t("logos")}</p>
					</div>

					<div className="card">
						<img src={cart5} />
						<p>{t("production")}</p>
					</div>
					
				</div>
			</div>
  )
}

export default Uslugi