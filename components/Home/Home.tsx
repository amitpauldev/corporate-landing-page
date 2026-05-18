import React from "react";
import NavContainer from "./Navbar/NavContainer";
import Hero from "./Hero/Hero";
import About from "./About/About";

const Home = () => {
	return (
		<div className="overflow-hidden">
			<NavContainer />
			<Hero />
			<About />
		</div>
	);
};

export default Home;
