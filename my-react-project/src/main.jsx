import { createRoot } from "react-dom/client";
import "./index.css";

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

let todos = [
  {
    title: "html",
    status: true,
  },
  {
    title: "css",
    status: true,
  },
  {
    title: "reac",
    status: false,
  },
  {
    title: "node",
    status: false,
  },
  {
    title: "express",
    status: false,
  },
];

//  Component
function Course(props) {
  console.log({ props });

  return (
    <li className="course course-component">
      <img src={props.image} />
      <p>{props.title}</p>
      <p>{props.duration}</p>
      <p>Rs. {props.price}</p>
      {props.featured ? <p>featured</p> : <p>normal </p>}
    </li>
  );
}

// Old non-react way
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

let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita harum natus sit molestias vel voluptatum numquam excepturi nesciunt neque? Voluptas labore deserunt, veniam rem asperiores saepe quos quas voluptate?";

createRoot(document.getElementById("root")).render(
  <div>
    <h1>{title}</h1>
    <p>{description}</p>
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
              <p>Rs {el.price}</p>
            </li>
          );
        }

        return undefined;
      })}
    </ul>
    <hr />
    <h2>All Courses</h2>
    <ul className="courses">
      {courses.map((el) => {
        return (
          <li className="course">
            <img src={el.image} alt={el.title} />
            <p>{el.title}</p>
            <p>{el.duration}</p>
            <p>Rs{el.price}</p>
          </li>
        );
      })}
    </ul>
    <hr />

    {/* Course(name,price,age) */}
    {/* <Course title="mern" price={1220} duration="3 months" /> */}

    <h2>Featured courses using Component</h2>
    <ul className="courses">
      {courses.map((el) => {
        if (el.featured) {
          return <Course title={el.title} price={el.price} image={el.image} featured={el.featured} />;
        }
      })}
    </ul>
    <hr />
    <h2>All Courses using Component</h2>
    <ul className="courses">
      {courses.map((el) => {
        return <Course title={el.title} price={el.price} image={el.image} featured={el.featured} />;
      })}
    </ul>
    <hr />

    <h2>All Todos</h2>
    <table>
      <thead>
        <th>Sn</th>
        <th>Title</th>
        <th>status</th>
      </thead>
      {todos.map((el, index) => {
        return (
          <tr>
            <td>{index + 1}</td>
            <td>{el.title}</td>
            <td>{el.status ? "completed" : "pending"}</td>
          </tr>
        );
      })}
    </table>
    <hr />

    <h2>Complted Todos</h2>
    <table>
      <thead>
        <th>Sn</th>
        <th>Title</th>
        <th>status</th>
      </thead>
    </table>
    <hr />
    <h2>Incomplete Todos</h2>
    <table>
      <thead>
        <th>Sn</th>
        <th>Title</th>
        <th>status</th>
      </thead>
    </table>
    <hr />
  </div>,
);
