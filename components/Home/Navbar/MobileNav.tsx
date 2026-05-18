import { NAVLINKS } from "@/constant/NavLinks";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

const MobileNav = ({
	showNav,
	closeNav,
}: {
	showNav: boolean;
	closeNav: () => void;
}) => {
	return (
		<div>
			{/* Overlay */}
			<div
				className={`fixed inset-0 z-[1000] w-full bg-black opacity-70 transition-all duration-500 ${
					showNav ? "translate-x-0" : "translate-x-[-100%]"
				}`}
				onClick={closeNav}
			></div>
			{/* NavLinks  */}
			<div
				className={`fixed top-0 h-full w-[70%] sm:w-[60%] bg-primary flex flex-col justify-center gap-6 z-1050 transform transition-all duration-500 delay-300 ${
					showNav ? "translate-x-0" : "translate-x-[-100%]"
				}`}
			>
				{NAVLINKS.map((link) => (
					<Link
						href={link.url}
						key={link.id}
						className="w-fit text-white text-xl sm:text-3xl ml-12 border-b-[1.5px] pb-1 border-white transition-all duration-200"
						onClick={closeNav}
					>
						{link.label}
					</Link>
				))}

				{/* Closed Button  */}
				<button className="absolute top-4 right-4" onClick={closeNav}>
					<CgClose className="w-6 h-6 sm:w-10 sm:h-10 text-white cursor-pointer" />
				</button>
			</div>
		</div>
	);
};

export default MobileNav;
