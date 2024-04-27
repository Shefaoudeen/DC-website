import { luffy, zoro, sanji } from "../assets";

const units = [
  {
    id: 1,
    division: "PRIME",
    description1:
      "At PRIME, our speciality lies in creating captivating visuals with Adobe Photoshop, Illustrator, and much more. From projects such as ",
    works: "Rejouir, Neura, Reflections Newsletter and PTU 2024 Calendar",
    description2:
      ", we aim to make a lasting impact on frames with impactful designs.",
    motto: "Think, Design, Innovate!",
    video: luffy,
    link: "/prime",
    index: 30,
  },
  {
    id: 2,
    division: "VIDEO",
    description1:
      "At VIDEO, we harness the power of After Effects, Premiere Pro, Blender, Da Vinci Resolve, and more! Our past projects include ",
    works: "University Intro, Symposium Trailers",
    description2: ", and beyond. we craft cinematic experiences together!",
    motto: "Lights, Camera, Edit!",
    video: zoro,
    link: "/video",
    index: 20,
  },
  {
    id: 3,
    division: "DEVELOPMENT",
    description1: "In DEVELOPMENT, we specialize in creating and maintaining ",
    works: "University Website and Portfolios ",
    description2:
      "Utilizing technologies such as React, Node, and various JavaScript frameworks, we handle projects from concept to execution. We work together to bring a digital vision to life!",
    motto: "Coding Dreams into Reality!",
    video: sanji,
    link: "/development",
    index: 10,
  },
];

export { units };
