import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: " Final year project- Ongoing",
    des: "AI-powered Hair Fall Stage Detection and Medical Feedback System.",
    img: "/ai.png",
    iconLists: ["/nlp1.png", "/gpt.png", "/xai.png", "/cnn.png", "/pyco.png"],
    // link: "/ui.earth.com",
  },
  {
    id: 2,
    title: " Intern Management System",
    des: "Built a scalable platform connecting interns with employers seamlessly.",
    img: "/p2.svg",
    iconLists: ["/re.svg", "/sp.png", "/gql.png", "/pql1.png", "/boots.png"],
    // link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "Book Nest: Book Reader App",
    des: "Built a web app for reading, searching, and interacting with books.",
    img: "/book.png",
    iconLists: ["/next.svg", "/ts.svg"],
    link: "https://github.com/Vithus24/bookreader",
  },
  {
    id: 4,
    title: "Movie Management System",
    des: "Built a collaborative full-stack CRUD app to manage movies.",
    img: "/movies.png",
    iconLists: ["/sp.png", "/re.svg", "/mysql.png"],
    link: "https://dms.uom.lk/s/dGzAt3XQiwcWKsN",
  },
  {
    id: 5,
    title: " User Management System",
    des: "Built user management CRUD app with Redux and performance enhancements.",
    img: "/user.png",
    iconLists: ["/re.svg", "/redux.png"],
    link: "https://github.com/Vithus24/CrudAppUsingRedux",
  },
  {
    id: 6,
    title: " Animated Glassmorphic Login Page",
    des: "Created responsive glassmorphic login UI with animations.",
    img: "/login.png",
    iconLists: ["/re.svg", "/css.png"],
    link: "https://github.com/Vithus24/LoginRegisterPageReactJS",
  },
  {
    id: 7,
    title: "Cubethon",
    des: "Developed  Beginner level Unity Game with cube navigation and jumping mechanics.",
    img: "/cu.png",
    iconLists: ["/c1.png", "/unity.jpg"],
    link: "https://vithus.itch.io/cubethon",
  },
  {
    id: 8,
    title: "French Fry Maker Machine",
    des: "Built automated French fry system to boost efficiency and cut costs.",
    img: "/p4.svg",
    iconLists: ["/c.svg", "/nlp1.png", "/cnn.png"],
    // link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    desc: "Software Engineer with 6 months of internship experience as a Full-Stack Developer, specializing in front-end development using Next.js and back-end development with Java and Spring Boot.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Video Edit Master | AIESEC",
    desc: " Organization committee member and video editing team lead of leadership development seminar call LEAD CS conducted by Aiesec in colombo south.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/Vithus24",
  },
  {
    id: 2,
    img: "/link.svg",
    url: "https://www.linkedin.com/in/vithus-sithiravealautham",
  },
  {
    id: 3,
    img: "/mail.png",
    url: "mailto:vithus24082000@gmail.com",
  },
  // {
  //   id: 4,
  //   img: "/twit.svg",
  // },
];
