import Link from "next/link";
import React from "react";
import { MdApartment } from "react-icons/md";

const Logo = () => {
	return (
		<Link href={"/"}>
			<div className="flex items-center space-x-2">
				<div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-col">
					<MdApartment className="w-6 h-6 text-white" />
				</div>
				<h1 className="text-xl md:text-2xl hidden md:block font-bold text-secondary">
					NextFuture
				</h1>
			</div>
		</Link>
	);
};

export default Logo;
