"use client";

import { motion } from "motion/react";
import { FaBullseye } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi";

const AboutProgressbar = () => {
	const data = [
		{
			id: 1,
			title: "Digital Marketing",
			percentage: 95,
			icon: <FaBullseye className="text-white text-3xl" />,
		},
		{
			id: 2,
			title: "Digital Business",
			percentage: 85,
			icon: <HiOutlineChartBar className="text-white text-3xl" />,
		},
	];

	return (
		<div className="space-y-8 py-6 md:py-10">
			{data.map((item) => (
				<div
					key={item.id}
					className="flex items-center gap-6 bg-white rounded-xl shadow-md p-6"
				>
					<div className="w-12 h-12 bg-[#AF9D7A] flex items-center justify-center">
						{item.icon}
					</div>
					<div className="flex-1">
						<div className="flex justify-between items-center mb-2">
							<h3 className="text-lg md:text-2xl font-bold">{item.title}</h3>
							<p className="font-semibold text-gray-800">{item.percentage}%</p>
						</div>

						<div className="w-full bg-gray-300 rounded-full h-2.5 ">
							{/* <div
								className="bg-[#AF9D7A] h-2.5 rounded-full"
								style={{ width: `${item.percentage}%` }}
							></div> */}

							<motion.div
								className="bg-[#AF9D7A] h-2.5 rounded-full"
								initial={{ width: "0%" }}
								whileInView={{ width: `${item.percentage}%` }}
								viewport={{ once: true }}
								transition={{ duration: 2 }}
							/>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AboutProgressbar;
