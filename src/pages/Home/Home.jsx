import React from "react";
import "./home.scss";

import Screen from "./Screen";
import AboutUs from "./AboutUs";
import Uslugi from "./Uslugi";
import Pagination from "./Pagination";
import Ads from "./Ads";



const Home = () => {

	return (
		
		<div className="Home">			
			<Screen/>
			<AboutUs/>
			<Uslugi/>
			<Pagination/>
			<Ads/>
		</div>
	);
};

export default Home;
