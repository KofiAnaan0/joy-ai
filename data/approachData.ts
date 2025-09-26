import { ApproachType } from "@/types/approachType";
import Sales from "@/public/approach/sales.png";
import Support from "@/public/approach/support.png";

export const approachData: ApproachType[] = [
	{
		id: 1,
		title: "Turn Conversations Into Closed Deals",
		description:
			"Learn how AI gathers customer info, qualifies leads, and delivers competitive quotes automatically.",
		imageUrl: Sales,
	},
	{
		id: 2,
		title: "Deliver 24/7 Support Without Extra Staff",
		description:
			"Discover how AI manages support, appointments, and servicing in one smooth, automated conversation.",
		imageUrl: Support,
	},
];
