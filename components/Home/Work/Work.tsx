import React from "react";
import WorkProcessCard from "./WorkProcessCard";

const Work = () => {
	return (
		<div id="work" className="pt-20 pb-24 bg-white">
			<p className="text-lg text-secondary text-center font-medium tracking-widest">
				Work Process
			</p>
			<h3 className="text-3xl md:text-5xl text-center font-bold mt-4">
				Transforming Ideas into <br /> Digital Reality
			</h3>

			<div className="w-80/100 mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14 items-center">
				<WorkProcessCard
					number="01"
					title="Discover & Narrative"
					isExtraClass={true}
				/>
				<WorkProcessCard number="02" title="Secure Architecture" />
				<WorkProcessCard
					number="03"
					title="Seamless Integration"
					isExtraClass={true}
				/>
				<WorkProcessCard number="04" title="Scale & Accelerate" />
			</div>
		</div>
	);
};

export default Work;
