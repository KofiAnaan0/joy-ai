"use client";

import useServices from "@/hooks/useServices";
import React from "react";
import ServiceCard from "../helper/ServiceCard";
import H2 from "../ui/H2";
import P from "../ui/P";

const Services = () => {
	// custom hook to fetch services
	const { services, loading, bookDemo, error } = useServices();

	return (
		<div className="pt-16 pb-4">
			<div
				className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto space-y-8"
				data-aos="fade-up"
			>
				{/* title */}
				<H2>Who&apos;s it for?</H2>

				{/* description */}
				<P className="text-center">
					Designed for enterprise teams across governments, finance, and
					education who want to <span className="hidden lg:block"></span>
					automate repetitive tasks, reduce costs, and improve response times
					with AI.
				</P>

				{/* Error display */}
				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-center">
						{error}
					</div>
				)}

				{/* Grid Services */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{services.map((service, index) => (
						<ServiceCard
							key={service.id}
							services={service}
							loading={loading}
							onBookDemo={bookDemo}
							data-aos="fade-up"
							data-aos-delay={index * 100}
							data-aos-anchor-placement="top-center"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Services;
