import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Logo from "../../../assets/images/Logo.svg"
import { useWindowDimensions } from "hooks";
import { useNavigate } from "react-router-dom";
import icon from '../../../assets/images/menu-icon.svg'
import xicon from '../../../assets/images/75519.png'
import Select from "./select";

const Header = ({ speak, changeSpeakSwitcher }) => {
	const { width } = useWindowDimensions();
	let location = useLocation();
	const {t, i18n} = useTranslation();

    const handleChangeLng = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("lng", lng);
    };
	const currentLangCode = useSelector(state => state.system.currentLangCode);

	const navigate = useNavigate()
	const sideB = useRef()
	const [click, setClick] = useState(false)

	function showSidebar(){
		if(click == false){
			sideB.current.style.display = 'none'
			// alert('none')
		}else{
			// alert('block')
			sideB.current.style.display = 'block'
		}

		setClick(!click)
	}


	const onSubmit = values => {
		window.history.pushState("", location.pathname, `${currentLangCode}/news/search/${values.searchValue}`);
		window.location.reload();
	};
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (width <= 1024) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	return (
		<>
			<div className="navbar">
				<div className="navLeft">
					<div style={{display: "flex", alignItems: "center"}}>
						<img style={{cursor: "pointer"}} src={Logo} onClick={()=>navigate('/')}/>
						<div className="navTitle" onClick={()=>navigate('/')}>mapmarkaz.uz</div>
					</div>
        
					<div className="select">
						<Select/>
					</div>

					{/* <div className="options">
						<button className="flagButton" onClick={() => handleChangeLng("uz")}>
							<img className="iconFlag" src={UzFlag} alt=""/>
							O'z
						</button>
						<button className="flagButton" onClick={() => handleChangeLng("ru")}>
							<img className="iconFlag" src={RuFlag} alt=""/>
							Ру
						</button>
					</div> */}
				</div>
				<div className="navRight">
					<ul>
						<li onClick={()=>navigate('/')}>{t("basic")}</li>
					</ul>
					<ul>
						<li onClick={()=>navigate('/aboutus')}>{t("weAbout")}</li>
					</ul>
					<ul>
						<li onClick={()=>navigate('/contacts')}>{t("contact")}</li>
					</ul>
				</div>

				<div className="sidebarNav">
					<img src={icon} onClick={showSidebar}/>
				</div>

				<div className="sidebar"  ref={sideB}>
					<p className="x-btn" onClick={showSidebar}><img src={xicon} width={'20px'}/></p>

					<div className="sidebar-link">
						<p onClick={()=>navigate('/')}>{t('basic')}</p>
						<p onClick={()=>navigate('/aboutus')}>{t('weAbout')}</p>
						<p onClick={()=>navigate('/contacts')}>{t('contact')}</p>
						<p><Select/></p>
					</div>
				</div>


			</div>
		</>
	);
};

export default Header;
