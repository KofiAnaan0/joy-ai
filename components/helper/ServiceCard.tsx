import { ServiceCardProps } from "@/types/serviceType";
import React from "react";
import Image from "next/image";
import H3 from "../ui/H3";
import P from "../ui/P";
import { Button } from "../ui/Button";
import Link from "../ui/NextLink";

const ServiceCard = ({
	services,
	loading = false,
	onBookDemo,
}: ServiceCardProps) => {
	// handle demo booking
	const handleBookDemo = () => {
		if (!loading) {
			onBookDemo(services.id);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center space-y-6 p-4 h-full rounded-sm shadow-md hover:shadow-lg bg-gray-200 transition duration-200">
			{/* Icon */}
			<div className="p-3 rounded-full bg-gray-300 overflow-hidden">
				<Image
					src={services.icon}
					alt={`${services.id} icon`}
					height={24}
					width={24}
				/>
			</div>

			{/* Title */}
			<H3 className="text-center">{services.title}</H3>

			{/* Description */}
			<P className="text-center">{services.description}</P>

			{/* CTA */}
			<div className="flex items-center justify-between lg:flex-col lg:space-y-4  w-full">
				{/* book demo */}
				<Button
					variant="default"
					size="sm"
					onClick={handleBookDemo}
					loading={loading}
				>
					Book a Demo
				</Button>

				{/* learn more */}
				<Link href={services.learnMoreUrl}>Learn More</Link>
			</div>
		</div>
	);
};

export default ServiceCard;
