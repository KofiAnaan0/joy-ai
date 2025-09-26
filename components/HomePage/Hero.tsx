import React from "react";
import Image from "next/image";
import HeroImage from "@/public/joyHero.png";
import LogoCloud from "../logo-cloud";
import P from "../ui/P";
import H1 from "../ui/H1";
import { Button } from "../ui/Button";
import Main from "../ui/Main";
import Section from "../ui/Section";

const Hero = () => {
	return (
		<Section className="py-36 md:py-38">
			{/* main content */}
			<Main data-aos="fade-up">
				{/* Title */}
				<H1>Build & Deploy Voice AI That Handles Sales & Support 24/7</H1>

				{/* description */}
				<P className="max-w-4xl mx-auto">
					Facing skyrocketing staffing costs? Cut Cost with Voice AI Agents that
					manages 1,000+ calls, drives conversions, and supports customers 24/7.
				</P>

				{/* CAT */}
				<div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 pb-6 w-full">
					{/* try */}
					<Button className="border-black w-full md:w-fit">
						Join Waitlist
					</Button>

					{/* Demo */}
					<Button variant="outline" size="default" className=" w-full md:w-fit">
						Book a Demo
					</Button>
				</div>

				{/* video explanation */}
				<div
					className="mx-auto flex items-center justify-center"
					data-aos="fade-up"
					data-aos-delay="150"
				>
					<Image
						src={HeroImage}
						alt={"hero image"}
						height={400}
						className="rounded-md shadow-md shadow-black/20 hover:shadow-lg hover:shadow-black/40 hover:rotate-1 hover:scale-110 transform transition-all disabled:pointer-events-none cursor-pointer duration-300 mx-auto"
					/>
				</div>

				{/* Brands */}
				{/* <LogoCloud /> */}
			</Main>
		</Section>
	);
};

export default Hero;
