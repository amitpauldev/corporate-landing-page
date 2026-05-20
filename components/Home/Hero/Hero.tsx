import Image from "next/image";
import React from "react";

const Hero = () => {
	return (
		<div
			id="home"
			className="w-full h-[80vh] bg-bg-primary flex flex-col justify-center scroll-mt-28"
		>
			<div className="w-80/100 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
				<div className="z-10">
					{/* Title  */}
					<h1 className="text-4xl md:text-6xl font-bold text-white">
						We shape your digital story with passion & precision
					</h1>

					{/* Description  */}
					<p className="text-sm md:text-base ml-0 md:ml-10 font-semibold text-white mt-5 md:mt-10">
						We build secure, seamless payment solutions designed to simplify
						global transactions, protect customer data, and accelerate your
						business growth.
					</p>

					{/* Button  */}
					<button className="px-8 py-3 rounded-full mt-10 ml-0 md:ml-10 text-white font-semibold outline-2 outline-gray-300 hover:bg-primary cursor-pointer transition-all duration-300">
						Discover More
					</button>
				</div>

				{/* Image  */}
				<div className="absolute top-0 right-48 hidden lg:block">
					<Image
						src="/images/hero.png"
						alt="hero"
						width={550}
						height={550}
						priority
						className="w-auto"
					/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
