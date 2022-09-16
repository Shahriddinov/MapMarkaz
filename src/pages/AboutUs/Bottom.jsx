import React from 'react'
import './bottom.scss'
import pic17 from '../../assets/images/pic17.svg'
import pic16 from '../../assets/images/pic16.svg'
import { useTranslation } from "react-i18next";

const Bottom = () => {
    const {t} = useTranslation();

    return (
    <div className='bottom'>

        <div className="left">

            <div className="title">{t("names")}</div>

            <p>
                {t("build")}
            </p>

            <img src={pic17} />
        </div>

        <div className="right">
            <img src={pic16} />
            <p>
                {t("nameInfo")}
            </p>
        </div>

        <div className="b_bottom">
          <p>
              {t("real")}
          </p>

          <p>
              {t("maps")}
          </p>

          <p>
              {t("full")}
          </p>

          <p>
              {t("arm")}
          </p>

          <p>
              {t("jule")}
          </p>

          <p>
              {t("technical")}
          </p>

          <p>
              {t("management")}
          </p>
        </div>


    </div>
  )
}

export default Bottom