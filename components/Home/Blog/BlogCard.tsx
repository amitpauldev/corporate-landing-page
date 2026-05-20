import Image from "next/image";
import React from "react";
import { BiCalendar } from "react-icons/bi";
import { FaRegFolderOpen } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";

type Props = {
	image: string;
	title: string;
};

const BlogCard = ({ image, title }: Props) => {
	return (
		<div className="bg-gray-100 rounded-lg overflow-hidden">
			<Image
				src={image}
				alt="service"
				width={300}
				height={206}
				className="w-full"
			/>

			<div className="p-6">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-3">
						<FaRegFolderOpen className="text-primary-light w-6 h-6" />
						<p className="font-semibold text-gray-800 text-sm">Category</p>
					</div>

					<div className="flex items-center space-x-3">
						<BiCalendar className="text-primary-light w-6 h-6" />
						<p className="font-semibold text-gray-800 text-sm">
							October 27, 2025
						</p>
					</div>
				</div>

				<h4 className="text-lg mt-6 font-bold text-gray-900 hover:text-primary-light transition-all duration-300 cursor-pointer">
					{title}
				</h4>

				<button className="flex ml-auto cursor-pointer mt-8">
					<span className="flex text-sm font-semibold uppercase text-gray-800 hover:text-primary space-x-2">
						Read More
						<FiArrowDownRight className="w-5 h-5 text-primary hover:text-primary-light" />
					</span>
				</button>
			</div>
		</div>
	);
};

export default BlogCard;
