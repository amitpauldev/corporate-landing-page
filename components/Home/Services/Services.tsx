import Image from "next/image";
import ServiceCard from "./ServiceCard";

const Services = () => {
	return (
		<div className="pt-20 pb-25 relative">
			<Image
				src="/images/service_bg.png"
				alt="service"
				width={300}
				height={300}
				className="absolute right-0"
			/>

			<div className="w-80/100 mx-auto">
				<p className="text-lg text-primary-light font-medium tracking-widest">
					Our Services
				</p>
				<h3 className="text-3xl md:text-5xl font-bold mt-4 text-white">
					We offer a wide range of services
				</h3>

				<div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-center ">
					<div className="cursor-pointer">
						<ServiceCard
							image="/images/s1.png"
							icon="/images/sicon1.png"
							title="Digital Brand Storytelling"
						/>
					</div>
					<div className="cursor-pointer">
						<ServiceCard
							image="/images/s2.png"
							icon="/images/sicon2.png"
							title="Fintech Security & Compliance"
						/>
					</div>
					<div className="cursor-pointer">
						<ServiceCard
							image="/images/s3.png"
							icon="/images/sicon3.png"
							title="Merchant Growth Consulting"
						/>
					</div>
					<div className="cursor-pointer">
						<ServiceCard
							image="/images/s4.png"
							icon="/images/sicon4.png"
							title="Global Payment Gateway"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
