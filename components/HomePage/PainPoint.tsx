import React from "react";
import P from "../ui/P";
import H2 from "../ui/H2";
import { Button } from "../ui/Button";
import Section from "../ui/Section";
import Main from "../ui/Main";

const PainPoint = () => {
	return (
		<Section>
			<Main data-aos="fade-up">
				{/* title */}
				<H2>Keep Your Business Open 24/7 Without Extra Staff</H2>

				{/* description */}
				<div className="space-y-4 flex flex-col items-center justify-center">
					{/* pain */}
					<P className="max-w-3xl mx-auto">
						Your team clocks out at 5, but your customers don&apos;t. Every
						missed call after hours is lost revenue and a frustrated client.
					</P>

					{/* solution */}
					<P className="max-w-3xl mx-auto">
						Our AI agents handle calls day and night, capturing leads, solving
						issues, and keeping your business open 24/7 without extra staff.
					</P>
				</div>

				{/* CTA */}
				<div className="flex items-center justify-center">
					<Button>Join Waitlist</Button>
				</div>
			</Main>
		</Section>
	);
};

export default PainPoint;
