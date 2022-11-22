import React from "react";
import "./home.scss";
import AboutUs from "./aboutUs.jsx";
import Finance from "./finance.jsx";
import Screen from "./screen.jsx";
import Uslugi from "./uslugi.jsx";
import Ads from "./ads.jsx";
import Flags from './flags.jsx'

const Home = () => {

	return (
		
		<div className="mainhome">			
			<Screen/>
            <Flags/>
			<AboutUs/>
			<Uslugi/>
			<Finance/>
			<Ads/>
		</div>
	);
};

export default Home;
