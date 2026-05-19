import NavContainer from "./Navbar/NavContainer";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Work from "./Work/Work";

const Home = () => {
	return (
		<div className="overflow-hidden">
			<NavContainer />
			<Hero />
			<About />
			<Services />
			<Work />
		</div>
	);
};

export default Home;
