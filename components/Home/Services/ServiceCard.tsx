import Image from "next/image";

type Props = { image: string; icon: string; title: string };

const ServiceCard = ({ image, icon, title }: Props) => {
	return (
		<div className="bg-white rounded-lg overflow-hidden group">
			<Image src={image} alt="service" width={300} height={179} />
			<div className="p-4">
				<div className="relative w-22 h-22 -mt-14 ml-auto rounded-lg z-10 flex items-center justify-center flex-col bg-secondary group-hover:bg-black transition-all duration-300">
					<Image src={icon} alt="icon" width={60} height={60} />
				</div>
				<div className="w-16 mt-6 h-px bg-gray-600"></div>
				<h4 className="text-sm text-gray-700 mt-2">Our Service</h4>
				<p className="text-gray-800 mb-4 mt-2 font-semibold text-nowrap">
					{title}
				</p>
			</div>
		</div>
	);
};

export default ServiceCard;
