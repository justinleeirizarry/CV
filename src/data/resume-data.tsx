import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Justin Irizarry",
  location: "Sydney, Australia",
  locationLink: "https://www.google.com/maps/place/sydney",
  about: "Full Stack Engineer",
  summary:
    "Experienced Full Stack Engineer with a proven track record in delivering high-performance web applications. Excels in collaborative environments, continuously adapts to emerging technologies, and committed to project excellence.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "justinleeirizarry.com",
  contact: {
    email: "justinleeirizarry@gmail.com",
    tel: "+61405542310",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/justinleeirizarry",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/justin-irizarry/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://twitter.com/justin_irizarry",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Nevada, Las Vegas ",
      degree: "MFA",
      start: "2010",
      end: "2013",
    },
    {
      school: "University of North Texas ",
      degree: "MA",
      start: "2010",
      end: "2008",
    },
    {
      school: "University of North Texas ",
      degree: "BA",
      start: "2003",
      end: "2007",
    },
  ],
  work: [
    {
      company: "Zable Health",
      badges: [],
      title: "FullStack Developer",
      start: "2023",
      end: "2023",
      description:
        "• Led the refinement of the main booking system, focusing on enhancing accessibility and implementing responsive design principles on the frontend, alongside a comprehensive backend and database structure refactoring to support new changes. This holistic approach markedly improved user engagement and the overall user experience.\n" +
        "• Overhauled the search and filter functionality within the main booking system, significantly enhancing user navigability and efficiency in finding relevant options.\n" +
        "• Developed and deployed internal dashboards for real-time monitoring and data-driven decision-making, streamlining operational efficiency and team responsiveness.\n" +
        "• Instrumental in forging partnerships with external services, generating additional revenue streams and expanding the company's service offerings. This strategic move diversified our portfolio and opened new market opportunities.\n" +
        "• Engaged closely with the CEO and Product Manager, providing technical expertise and ensuring development initiatives aligned with organizational objectives and product strategies. This collaboration was crucial in steering project direction to meet strategic goals.\n" +
        "• Contributed to a collaborative hybrid work environment, effectively coordinating with cross-functional teams to achieve project milestones and ensure the timely delivery of high-quality solutions. My role facilitated seamless communication and integration of efforts across departments.\n" +
        "• Employed a diverse technology stack including AWS, NextJS, TypeScript, Express, PostgreSQL, and Styled Components to build robust, scalable solutions that catered to evolving business needs and user demands.\n" +
        "• Worked with a variety of technologies and tools including AWS (ECS instances, Secrets Manager, SQS) to support backend operations.",
    },
    {
      company: "Freelance FullStack Developer",
      badges: [],
      title: "FullStack Developer",

      start: "2020",
      end: "2023",
      description:
        "• Delivered full-stack development solutions for small businesses and startups, employing a diverse array of modern technologies including JavaScript, CSS, Tailwind, React, TypeScript, Python, Flask, Django, Webpack, Babel, PHP, Wordpress, GCP, firebase, and AWS.\n" +
        "• Accelerated development timelines by harnessing no-code platforms and crafted intuitive, visually appealing user interfaces using advanced design tools like Figma and Adobe Illustrator.\n" +
        "• Prioritised adherence to accessibility standards and responsive design principles across various devices, enhancing user experience, and implemented SEO best practices, driving a notable increase in online visibility and traffic for client websites.\n" +
        "• Demonstrated strong communication skills to foster effective collaboration with clients and cross-functional teams.",
    },
    {
      company: "Netflix",
      badges: [],
      title: "Data Analyst",

      start: "2015",
      end: "2017",
      description:
        "• Orchestrated the scheduling and maintenance of ETL processes, ensuring timely data availability for robust analysis.\n" +
        "• Fostered collaborative relationships with engineering teams, prioritising and efficiently resolving platform issues to enhance functionality.\n" +
        "• Leveraged skills in Data Visualisation and Python to drive actionable insights from complex data sets.\n" +
        "• Worked closely with cross-functional teams to identify and address data-related issues, significantly improving platform functionality and user experience.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "GraphQL",
    "REST",
    "Next.js",
    "CSS",
    "Tailwind",
    "Python",
    "Django",
    "Flask",
    "Webpack",
    "SQL",
    "AWS",
    "GCP",
    "Figma",
  ],
  projects: [
    {
      title: "Karen",
      techStack: [
        "Side Project",
        "TypeScript",
        "Tailwind",
        "Next.js",
        "RSC",
        "Langchain",
        "Autogen",
        "DrizzleORM",
        "PostgreSQL",
        "WIP",
      ],
      description: "A platform to solve tasks using LLMs",
      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "KoKo",
      techStack: [
        "Side Project",
        "TypeScript",
        "React-Native",
        "Addroid",
        "iOS",
        "WIP",
      ],
      description:
        "A chat app that focuses on non-traditional/non-verbal communication feautures",

      link: {
        label: "github.com",
        href: "",
      },
    },
    {
      title: "justinleeirizarry.com",
      techStack: ["Side Project", "Next.js", "GSAP"],
      description: "My personal website and blog. Built with Next.js",
      link: {
        label: "personal website",
        href: "justinleeirizarry.com",
      },
    },
  ],
} as const;
