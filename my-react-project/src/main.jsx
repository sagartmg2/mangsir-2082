import { createRoot } from "react-dom/client";
import "./index.css";

let colors = ["red", "blue"];
let title = "React Project";

let topics = ["html", "Css", "js", "react"];

let mappedTopics = topics.map((el) => {
  return <li>{el}</li>;
});

// [<li>html</li>,<li>css</li>,<li>js</li>]

// let courses  = ["mern","python","qa"]
let courses = [{ title: "mern" }, { title: "qa" }, { title: "python" }];

courses = [
  {
    title: "MERN Stack Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/mern-banner-min_nplbrgN.jpg",
    featured: true,
    duration: "3 months",
    price: 10000,
  },
  {
    title: "Python with Django Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg",
    featured: true,
  },
  {
    title: "Digital Marketing Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/DIGITAL-MARKETING-banner-min_JBHENk4.webp",
  },
  {
    title: "Quality Assurance Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/qa-banner-min_l0DzbAP.jpg",
  },
  {
    title: "Graphic Design Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/banner11-min_6ANDad7.png",
  },
  {
    title: "Flutter Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/flutter-banner-min_DUDTPdH.jpg",
  },
  {
    title: "DevOps Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/DevOps_Training.png",
  },
];

createRoot(document.getElementById("root")).render(
  <div>
    <h1>{title}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita harum natus sit molestias vel voluptatum numquam excepturi nesciunt neque? Voluptas labore deserunt, veniam rem asperiores saepe quos quas voluptate?</p>
    <ul>
      {/* <li>html</li>
      <li>css</li>
      <li>js</li>
      {[<li>html</li>,<li>css</li>,<li>js</li>]} */}
      {mappedTopics}
      
    </ul>

  
  </div>,
);
