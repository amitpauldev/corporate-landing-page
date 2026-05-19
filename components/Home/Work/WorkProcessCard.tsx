import React from "react";

type Props = {
	number: string;
	title: string;
	isExtraClass?: boolean;
};
const WorkProcessCard = ({ number, title, isExtraClass }: Props) => {
	return (
		<div
			className={`flex items-center gap-3 ${isExtraClass && "lg:border-r-2 lg:border-gray-300"}`}
		>
			<div className="text-[40px] md:text-[60px] lg:text-[80px] font-bold mr-5 leading-none text-primary-light">
				{number}
			</div>
			<div>
				<h4 className="text-gray-800 font-semibold text-xl">{title}</h4>
				<p className="lg:w-90/100 mt-3 leading-8 font-medium text-gray-700">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse quidem
					sed nam eveniet.
				</p>
			</div>
		</div>
	);
};

export default WorkProcessCard;
