import React from "react";
import Main from "../ui/Main";
import Section from "../ui/Section";
import H2 from "../ui/H2";
import { reviewData } from "@/comstants/data/reviews";
import ReviewCard from "../helper/ReviewCard";
import { Button } from "../ui/Button";
import Grid from "../ui/Grid";

const Review = () => {
	return (
		<Section className="bg-gray-200">
			<Main className="lg:w-[60%]" data-aos="fade-up">
				<H2>What are Clients Say</H2>

				{/* Review grid */}
				<Grid>
					{/* Render ReviewCard components */}
					{reviewData.map((review, index) => (
						<ReviewCard
							key={review.id}
							review={review}
							data-aos="fade-up"
							data-aos-delay={index * 100}
							data-aos-anchor-placement="top-center"
						/>
					))}
				</Grid>

				{/* CAT */}
				<div className="flex items-center justify-center">
					<Button>Book a Demo</Button>
				</div>
			</Main>
		</Section>
	);
};

export default Review;
