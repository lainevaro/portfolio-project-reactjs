export const staticData = {
  homeSection: {
    welcome: 'Hi, my name is',
    name: 'Alvaro Lainer!',
    description: 'Front-end developer, passionate about web design and modern technologies'
  },
  aboutSection: {
    title: 'About me',
    text: `Digital transformation process consultant, with experience in
    Corporate Identity and Digital Environment.I have working renewal
    process and change of graphic brand in addition to the adaptation of
    new technologies to the advertising and transactional process, being
      in charge of products such as informational sites, transactional
    site and mobile app.`
  },
  experienceSection: {
    title: 'Work experience',
  },
  technologiesSection: {
    title: 'Technologies',
  },
  contactSection: {
    title: "Let's talk",
  }
}



const skillsList = [
  { title: "React JS", value: 75 },
  { title: "Next js", value: 80 },
  { title: "Material UI", value: 80 },
  { title: "Styled components", value: 80 },
  { title: "Node JS ", value: 60 },
  { title: "Express JS ", value: 70 },
  { title: "Firebase", value: 70 },
];

const projectList = [
  {
    id: 1,
    title: "Tunflix",
    technologies: ["React JS", "Node JS", "MongoDB"],
    backgroundImage:
      "https://cdn.cbeditz.com/cbeditz/preview/#0d0d0d-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
    frontImage: "https://i.ibb.co/L0F7mKX/tunflix.png",
  },
  {
    id: 2,
    title: "Code Hub",
    technologies: ["React JS"],
    backgroundImage:
      "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
    frontImage: "https://i.ibb.co/zNMJFTW/Webp-net-resizeimage.png",
  },
  {
    id: 3,
    title: "Burpees.io",
    technologies: ["React JS", "Node JS", "MongoDB"],
    backgroundImage:
      "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    frontImage: "https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg",
  },
];

const experienceList = [
  {
    id: 0,
    company: "Code Hub",
    links: {
      website: "https://www.codehub.tn",
      facebook: "https://www.facebook.com/codehubtn/",
      instagram: "https://www.instagram.com/codehub.coworking/",
    },
  },
  {
    id: 1,
    company: "vapoter.tn",
    links: {
      instagram: "https://www.instagram.com/vapoter.tn/",
    },
  },
];

export { skillsList, projectList, experienceList };