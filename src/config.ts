export const siteConfig = {
	name: "Anupa Perera",
	title: "Software Engineer",
	description: "Portfolio website of Anupa Perera",
	accentColor: "#1d4ed8",
	social: {
		email: "anupaperera112@gmail.com",
		linkedin: "https://www.linkedin.com/in/anupaperera112/",
		twitter: "",
		github: "https://github.com/anupaperera112",
	},
	aboutMe:
		" Full-Stack Engineer with a specialization in Cyber Security, currently managing the end-to-end development of BuildMarketLK. Experienced in architecting decoupled payment systems using Go and Domain-Driven Design, with a strong passion for building and securing scalable web applications.",
	skills: [
		"n8n",
		"JAVA",
		"Python",
		"JS",
		"TS",
		"C++",
		"C",
		"Go",
		"HTML",
		"CSS",
		"Tailwind CSS",
		"React JS",
		"Material UI",
		"Express",
		"Flask",
		"Spring Boot",
		"FastApi",
		"Gin",
		"Next JS",
		"MySQL",
		"MongoDB",
		"PostgreSQL",
		"git",
		"GitHub",
		"CI / CD",
		"AWS",
		"Vercel",
	],
	projects: [
		{
			name: "StaticEdge",
			description:
				"Ongoing Final Year Project designed to close the gap in vulnerability detection accuracy for TypeScript. Addressing the low recall rates of off-the-shelf SAST tools, the project utilizes a hybrid detection framework. It integrates expert manual rule engineering with an automated pipeline that leverages Deep Learning and Large Language Models (LLMs) to synthesize new detection rules dynamically from real-world security patches with Developer Workflow Integration (CLI Utility, CI/CD Pipeline Integration, Automated PR Feedback, Standardized Reporting).",
			link: "",
			skills: ["Python", "PostgreSQL", "..."],
		},
		{
			name: "SecureVote",
			description:
				"SecureVote is a high-security, end-to-end verifiable (E2E-V) electronic voting platform developed as a semester project to guarantee core democratic principles in a digital context. Built on a microservices architecture, the system utilizes FastAPI and PostgreSQL for backend operations, Flutter for the mobile voting application, and React for the administrative web dashboard.",
			link: "",
			skills: ["Flutter", "Python/FastAPI", "PostgreSQL", "React", "AWS"],
		},
		{
			name: "MedTrack",
			description:
				"Often, patients or caretakers visit multiple pharmacies just to find all the prescribed medications. This platform solves that by letting users enter their medicine list and instantly find the closest pharmacy that has everything in stock saving time, energy, and stress.",
			link: "",
			skills: ["React", "Tailwind CSS", "Ballerina", "MySQL"],
		},
		{
			name: "Tri-plan",
			description:
				"Often, patients or caretakers visit multiple pharmacies just to find all the prescribed medications. This platform solves that by letting users enter their medicine list and instantly find the closest pharmacy that has everything in stock saving time, energy, and stress.",
			link: "",
			skills: ["React", "Chakra UI", "Supabase", "Refine"],
		},
	],
	experience: [
		{
			company: "Concolabs Pvt. Ltd.",
			title: "Software Engineer (part-time)",
			dateRange: "June 2025 - Present",
			bullets: [
				"Led development of microservices architecture serving 1M+ users",
				"Reduced API response times by 40% through optimization",
				"Mentored team of 5 junior developers",
			],
		},
		{
			company: "Creative Software Pvt. Ltd.",
			title: "Software Engineer Intern",
			dateRange: "Dec 2024 - June 2021",
			bullets: [
				"Built and launched MVP product from scratch using React and Node.js",
				"Implemented CI/CD pipeline reducing deployment time by 60%",
				"Collaborated with product team to define technical requirements",
			],
		},
	],
	education: [
		{
			school: "University of Moratuwa",
			degree: "Bachelor of Science (Hons), Computer Science and Engineering",
			dateRange: "2021 - present",
			achievements: ["Graduated with 3.46 GPA"],
		},
		{
			school: "University of Colombo (UCSC)",
			degree: "Diploma in Information Technology",
			dateRange: "2021",
			achievements: ["Graduated with 3.33 GPA"],
		},
		{
			school: "Royal College Colombo",
			degree: "GCE A/L, physical sciences stream (Combined Mathematics, Physics, Chemistry)",
			dateRange: "2020",
			achievements: ["passed with 2.1323 Z-Score (3A's)"],
		},
	],
};
