import { Projects } from "@/types/projects";

// Optionally import images or use a string path
import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import image3 from "@/public/images/user/user-01.png";
import image4 from "@/public/images/user/user-02.png";
import image5 from "@/public/images/user/user-01.png";

export const ProjectsData: Projects[] = [
  {
    id: "1",
    title: "Manufacturing & Commercial",
    description:
      "Enterprise-level manufacturing and commercial platform built with modern technologies.",
    technologies: [
      "Sitecore XM Cloud",
      "C#",
      "Next.js",
      "Docker",
      "Azure DevOps",
      "Git",
    ],
    duration: "2 Months",
    image: image1.src,
  },
  {
    id: "2",
    title: "Healthcare and Banking",
    description:
      "Comprehensive healthcare and banking solution with robust security features.",
    technologies: [
      "Sitecore SXA",
      "C#",
      "jQuery",
      "Docker",
      "Azure DevOps",
      "Git",
      "Unicorn",
      "SOLR",
    ],
    duration: "2 Years+",
    image: image2.src,
  },
  {
    id: "3",
    title: "ACCU Application",
    description:
      "Financial management application with modern web technologies.",
    technologies: ["ASP.NET MVC", "C#", "jQuery", "SQL", "Git"],
    duration: "6 Months",
    image: image3.src,
  },
  {
    id: "4",
    title: "Mastersoft Cloud",
    description: "Educational ERP system for institution management.",
    technologies: [
      "ASP.NET",
      "ASP.NET MVC",
      "C#",
      "jQuery",
      "SQL",
      "Tortoise SVN",
    ],
    duration: "2 Years+",
    image: image4.src,
  },
  {
    id: "5",
    title: "4Play",
    description: "Web-based entertainment platform with API integration.",
    technologies: [
      "ASP.NET MVC",
      "Web API",
      "C#",
      "jQuery",
      "SQL",
      "Git",
    ],
    duration: "6 Months",
    image: image5.src,
  },
];
