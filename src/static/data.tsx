import { GitHub, Email, LinkedIn, Phone } from "@mui/icons-material";

import ticoPyme from "../assets/images/projects/ticoPyme.png";
import ficq from "../assets/images/projects/ficq.png";
import coocique from "../assets/images/projects/coocique.png";
import csj from "../assets/images/projects/csj.png";
import angular from "../assets/images/projects/angular.png";

export const staticData = {
  homeSection: {
    welcome: "Hi, my name is",
    name: "Alvaro Lainer!",
    description:
      "Front-end developer, passionate about web design and modern technologies",
  },
  aboutSection: {
    title: "About me",
    text: `Digital transformation process consultant, with experience in
    Corporate Identity and Digital Environment.I have working renewal
    process and change of graphic brand in addition to the adaptation of
    new technologies to the advertising and transactional process, being
      in charge of products such as informational sites, transactional
    site and mobile app.`,
  },
  experienceSection: {
    title: "Work experience",
    text: `I've done some projects in my career as a developer, here are some examples:`,
    projectList: [
      {
        title: "TycoPyme",
        technologies: ["HTML", "CSS", "Bootstrap", "SQL Server"],
        img: ticoPyme,
        link: 'https://ticopyme.com/'
      },
      {
        title: "FicQ",
        technologies: ["HTML", "CSS", "Javascript", "SQL Server"],
        img: ficq,
        link: 'https://ficq.fi.cr/'
      },
      {
        title: "Coocique",
        technologies: ["HTML", "CSS", "Javascript", "SQL Server"],
        img: coocique,
        link: 'https://www.coocique.com/login'
      },
      {
        title: "Concretos San Jorge",
        technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
        img: csj,
        link: 'https://concretossanjorge.com/'
      },
      {
        title: "Sticker & Gif Finder",
        technologies: ["HTML", "CSS", "Angular", "Bootstrap"],
        img: angular,
        link: 'https://github.com/lainevaro/angular-project'
      },
    ],
  },
  technologiesSection: {
    title: "Technologies",
    text: `Here are a few technologies I’ve been working with recently:`,
    icons: [
      {
        title: "Python",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      },
      {
        title: "HTML",
        icon: "https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      },
      {
        title: "CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
      },
      {
        title: "Angular",
        icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
      },
      {
        title: "SQL Server",
        icon: "https://o.remove.bg/downloads/0a6b8c88-0c71-4c0f-9aa7-ca5b3061335f/sql-removebg-preview.png",
      },
      {
        title: "React JS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],
  },
  contactSection: {
    title: "Let's talk",
    text: "Feel free to contact me through any of my networks",
    networks: [
      {
        title: "Github",
        icon: <GitHub sx={{ fontSize: 50 }} />,
        link: "https://github.com/lainevaro",
      },
      {
        title: "Email",
        icon: <Email sx={{ fontSize: 50 }} />,
        link: "mailto:laineralvaro@outlook.com",
      },
      {
        title: "LinkedIn",
        icon: <LinkedIn sx={{ fontSize: 50 }} />,
        link: "https://www.linkedin.com/in/alvarolainer",
      },
      {
        title: "+506 8351-1543",
        icon: <Phone sx={{ fontSize: 50 }} />,
        link: "#/",
      },
    ],
  },
};
