import Image from "next/image";
import React from "react";
import AboutProgressbar from "./AboutProgressbar";

const About = () => {
	return (
		<div className="pt-16 pb-16 bg-white">
			<div className="w-80/100 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="relative flex justify-center items-center">
					<Image
						src={"/images/a33.png"}
						alt="img"
						width={500}
						height={500}
						className="animate-spin [animation-duration:20s]"
					/>

					<Image
						src={"/images/a4.png"}
						alt="img"
						width={350}
						height={350}
						className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl md:ml-4 w-40 h-40 md:w-75 md:h-75"
					/>
				</div>

				<div>
					<p className="text-blue-700 text-lg font-medium tracking-widest">
						About us
					</p>
					<h2 className="text-3xl md:text-5xl font-bold mt-4">
						Innovative solutions for digital success
					</h2>
					<p className="ml-0 md:ml-12 mt-5 md:mt-10 text-sm md:text-base font-semibold leading-loose">
						We empower modern businesses to thrive in a fast-paced digital
						economy. By combining cutting-edge technology with strategic
						insight, we build tools that simplify operations, boost efficiency,
						and drive measurable growth.{" "}
					</p>

					<AboutProgressbar />
				</div>
			</div>
		</div>
	);
};

export default About;
