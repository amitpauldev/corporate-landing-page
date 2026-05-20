import Logo from "@/components/Helper/Logo";
import { NAVLINKS } from "@/constant/NavLinks";
import Link from "next/link";
import { HiBars3BottomRight } from "react-icons/hi2";

const Nav = ({ openNav }: { openNav: () => void }) => {
	return (
		<div className="h-[12vh] relative z-10 lg:mt-8">
			<div className="h-full flex items-center justify-between w-[90%] xl:w-[80%] mx-auto">
				<Logo />

				<div className="hidden lg:flex items-center bg-white h-[10vh] md:pl-4 gap-8 xl:gap-10">
					{NAVLINKS.map((link) => (
						<Link
							href={link.url === "home" ? "/" : `/${link.url}`}
							key={link.id}
							className="text-black hover:text-primary hover:font-semibold transition-all duration-200"
						>
							{link.label}
						</Link>
					))}
					{/* Button  */}
					<button className="h-full p-3 bg-secondary text-white font-bold cursor-pointer">
						Create Account
					</button>
				</div>

				{/* Hamburger icon for mobile */}
				<div className="lg:hidden" onClick={openNav}>
					<HiBars3BottomRight className="w-9 h-9 text-tertiary cursor-pointer" />
				</div>
			</div>
		</div>
	);
};

export default Nav;
