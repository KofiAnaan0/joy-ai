import React from "react";
import Hero from "./HomePage/Hero";
import PainPoint from "./HomePage/PainPoint";
import Approach from "./HomePage/Approach";
import Contact from "./HomePage/Contact";

const Home = () => {
	return (
		<div className="w-full overflow-hidden">
			<Hero />
			<PainPoint />
			<Approach />
			<Contact />
		</div>
	);
};

export default Home;
