"use client";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const NavContainer = () => {
	const [showNav, setShowNav] = useState(false);

	const openNav = () => {
		setShowNav(true);
	};

	const closeNav = () => {
		setShowNav(false);
	};

	return (
		<>
			<Nav openNav={openNav} />
			<MobileNav closeNav={closeNav} showNav={showNav} />
		</>
	);
};

export default NavContainer;
