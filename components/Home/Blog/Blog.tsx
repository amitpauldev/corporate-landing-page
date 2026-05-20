import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
	return (
		<div id="blog" className="pt-16 pb-16 bg-white">
			<p className="text-secondary text-lg text-center font-medium tracking-widest">
				Blog
			</p>
			<h3 className="text-3xl md:text-5xl text-center font-bold mt-4">
				Latest news & articles <br /> From Our Blog
			</h3>
			<div className="w-80/100 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
				<div>
					<BlogCard
						image="/images/b1.png"
						title="The Future of Payment Processing"
					/>
				</div>
				<div>
					<BlogCard
						image="/images/b2.png"
						title="For Payment Solutions & Gateways"
					/>
				</div>
				<div>
					<BlogCard image="/images/b3.png" title="Security & Compliance" />
				</div>
			</div>
		</div>
	);
};

export default Blog;
