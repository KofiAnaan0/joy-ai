import hp from "@/public/Brand_logos/hp.svg";
import ibm from "@/public/Brand_logos/ibm.svg";
import mit from "@/public/Brand_logos/MIT.svg";
import earthlink from "@/public/Brand_logos/earthlink.svg";
import um from "@/public/Brand_logos/um.svg";
import nu from "@/public/Brand_logos/nu.svg";
import smartasset from "@/public/Brand_logos/Smartasset-Logo.svg";

// Nav Links
export const navLinks = [
	{
		id: 1,
		label: "Products",
		url: "#",
	},
	{
		id: 2,
		label: "About Us",
		url: "#",
	},
	{
		id: 3,
		label: "Contact",
		url: "#",
	},
];

// Brand logos
export const brandLogo = [
	{
		id: 1,
		url: "#",
		href: hp,
		height: 45,
	},
	{
		id: 2,
		url: "#",
		href: ibm,
		height: 55,
	},
	{
		id: 3,
		url: "#",
		href: mit,
		height: 55,
	},
	{
		id: 4,
		url: "#",
		href: earthlink,
		height: 180,
	},
	{
		id: 5,
		url: "#",
		href: um,
		height: 140,
	},
	{
		id: 6,
		url: "#",
		href: smartasset,
		height: 80,
	},
];

// service data
export const servicesData = [
	{
		id: "government",
		title: "Government",
		description:
			"AI for complex policy decisions, legal frameworks and public sector operations",
		icon: "/service/government.svg",
		learnMoreUrl: "/",
	},
	{
		id: "insurance",
		title: "Insurance",
		description:
			"Automate underwriting, fraud detection and claims processing with precision.",
		icon: "/service/insurance.svg",
		learnMoreUrl: "/",
	},
	{
		id: "education",
		title: "Education",
		description:
			"Enhance students learning, assessments and Research with domain-tuned AI tools",
		icon: "/service/school.svg",
		learnMoreUrl: "/",
	},
	{
		id: "finance",
		title: "Finance",
		description:
			"Drive smarter forecasting, risk modelling, and customer services in real-time",
		icon: "/service/finance.svg",
		learnMoreUrl: "/",
	},
];
