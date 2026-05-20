import NavContainer from "./Navbar/NavContainer";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Services from "./Services/Services";
import Work from "./Work/Work";
import Project from "./Project/Project";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const Home = () => {
	return (
		<div className="overflow-hidden">
			<Hero />
			<About />
			<Services />
			<Work />
			<Project />
			<Blog />
			<Contact />
		</div>
	);
};

export default Home;
