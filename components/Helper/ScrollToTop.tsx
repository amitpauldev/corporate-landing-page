"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
	const [isShowBtn, setIsShowBtn] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsShowBtn(true);
			} else {
				setIsShowBtn(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="fixed bottom-4 right-4">
			{isShowBtn && (
				<button
					onClick={scrollToTop}
					className="bg-primary-light text-white animate-pulse p-4 rounded-full cursor-pointer shadow-lg transition duration-300 hover:bg-tertiary"
				>
					<FaArrowUp size={20} />
				</button>
			)}
		</div>
	);
};

export default ScrollToTop;
