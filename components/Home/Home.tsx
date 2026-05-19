import NavContainer from "./Navbar/NavContainer";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Project from "./Project/Project";

const Home = () => {
	return (
		<div className="overflow-hidden">
			<NavContainer />
			<Hero />
			<About />
			<Services />
			<Work />
			<Project />
		</div>
	);
};

export default Home;
