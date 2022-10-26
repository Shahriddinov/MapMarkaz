import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import i18next from "i18next";
import './App.css';
import systemActions from "store/actions/system";
import config from "config";
import { helpers } from "services";
import { withRouter } from "utils";
import ReactGa from 'react-ga'

function App({ children }) {
	const dispatch = useDispatch();

	const setLanguage = () => {
		const pathname = window.location.pathname;
		const locationLang = pathname.split("/")[1];

		if (helpers.isEnableLang(locationLang)) {
			i18next.changeLanguage(locationLang);
			dispatch(systemActions.ChangeLanguage(locationLang));
		} else {
			i18next.changeLanguage(config.DEFAULT_LANGUAGE);
			dispatch(systemActions.ChangeLanguage(config.DEFAULT_LANGUAGE));
		}
	};

	useEffect(() => {
		setLanguage();
		dispatch(systemActions.GetMenu());
		dispatch(systemActions.GetSettings());
		//eslint-disable-next-line

		ReactGa.initialize('G-7ZQCMTTC8Z')
		ReactGa.pageview('/')
	}, []);

	return (
		<>
			<div className="main-page-mapMarkaz" id="custom-alert-zone" />
			{children}
		</>
	);
}

export default withRouter(App);
