import React from "react";
import "./home.scss";
import AboutUs from "./aboutUs";
import Finance from "./finance";
import Screen from "./screen";
import Uslugi from "./uslugi";
import Ads from "./ads";
import Flags from './flags'

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
