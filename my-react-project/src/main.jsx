import { createRoot } from "react-dom/client";
import "./index.css";
import Course from "./Course";

let title = "React Project";
let topics = ["html", "Css", "js", "react"];

let courses = [
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
    duration: "3 months",
    price: 20000,
  },
  {
    title: "Digital Marketing Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/DIGITAL-MARKETING-banner-min_JBHENk4.webp",
    featured: true,
    duration: "3 months",
    price: 4000,
  },
  {
    title: "Quality Assurance Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/qa-banner-min_l0DzbAP.jpg",
    featured: false,
    duration: "3 months",
    price: 10000,
  },
  {
    title: "Graphic Design Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/banner11-min_6ANDad7.png",
    featured: false,
    duration: "3 months",
    price: 10000,
  },
  {
    title: "Flutter Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/flutter-banner-min_DUDTPdH.jpg",
    featured: false,
    duration: "3 months",
    price: 10000,
  },
  {
    title: "DevOps Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/DevOps_Training.png",
    featured: false,
    duration: "3 months",
    price: 10000,
  },
];

//  Component
function CourseOld(props) {
  console.log({ props });
  // console.log({duration});
  // console.log({price});
  // console.log({title});

  return (
    <li className="course course-component">
      <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.duration}</p>
      <p>Rs. {props.price}</p>
      <p className={props.featured ? "action" : ""}>view more {`->`} </p>
      {props.featured ? <p>featured</p> : <p>normal</p>}
    </li>
  );
}

function Course1(el) {
  return (
    <li className="course">
      <img src={el.image} />
      <p>{el.title}</p>
      <p>{el.duration}</p>
      <p>Rs. {el.price}</p>
    </li>
  );
}

createRoot(document.getElementById("root")).render(
  <div>
    <h1>{title}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita harum natus sit molestias vel voluptatum numquam excepturi nesciunt neque? Voluptas labore deserunt, veniam rem asperiores saepe quos quas voluptate?</p>
    <ul>
      {/* <li>html</li>
      <li>css</li>
      <li>js</li>
      {[<li>html</li>,<li>css</li>,<li>js</li>]} */}
      {/* {mappedTopics} */}
      {topics.map((el) => {
        return <li>{el}</li>;
      })}
    </ul>
    <h2>Featured Courses</h2>
    <ul className="courses">
      {courses.map((el) => {
        if (el.featured) {
          return (
            <li className="course">
              <img src={el.image} />
              <p>{el.title}</p>
              <p>{el.duration}</p>
              <p>Rs. {el.price}</p>
            </li>
          );
        }

        return undefined;
      })}
    </ul>
    <hr />
    <h2>Courses</h2>
    <ul className="courses">
      {courses.map((el) => {
        return (
          <li className="course">
            <img src={el.image} alt={el.title} />
            <p>{el.title}</p>
            <p>{el.duration}</p>
            <p>Rs. {el.price}</p>
            <a href="#">Learn more </a>
          </li>
        );
      })}
    </ul>
    <hr />
    {/* {Course(courses[0])}
    {Course(courses[1])}
    {Course(courses[2])} */}

    <h2>Featured Courses using component</h2>
    <ul className="courses">
      {courses.map((el) => {
        if (el.featured) {
          return <Course featured={el.featured} image={el.image} title={el.title} price={el.price} duration={el.duration} />;
        }
      })}
      {/* <Course image={courses[0].image} title={courses[0].title} price={courses[0].price} duration={courses[0].duration} /> */}
    </ul>

    <h2>Courses using component</h2>
    <ul className="courses">
      {courses.map((el) => {
        return <Course featured={el.featured} image={el.image} title={el.title} price={el.price} duration={el.duration} />;
      })}
    </ul>
  </div>,
);
