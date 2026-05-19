"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";

const PROJECT_IMAGES = [
	"/images/p1.jpg",
	"/images/p2.jpg",
	"/images/p3.jpg",
	"/images/p4.jpg",
	"/images/p5.jpg",
	"/images/p6.jpg",
];

const Project = () => {
	return (
		<div className="pt-16 pb-16 bg-black">
			<p className="text-lg text-primary-light text-center font-medium tracking-widest">
				Portfolio
			</p>
			<h3 className="text-3xl text-white md:text-5xl text-center font-bold mt-4">
				Our Proven Impact
			</h3>

			<div className="w-80/100 mx-auto mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{PROJECT_IMAGES.map((image, index) => (
					<div className="relative" key={index}>
						<Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
							<Image
								src={image}
								alt="img"
								width={500}
								height={500}
								className="w-full h-full cursor-pointer"
							/>
						</Tilt>
					</div>
				))}
			</div>
		</div>
	);
};

export default Project;
