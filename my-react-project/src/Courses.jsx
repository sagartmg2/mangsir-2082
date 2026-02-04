import { Tags } from "./Tags";

let courses = [
  {
    title: "MERN Stack Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/mern-banner-min_nplbrgN.jpg",
    featured: true,
    duration: "3 months",
    price: 10000,
    tags: ["Web", "js", "Full Stack", "React", "Node"],
  },
  {
    title: "Python with Django Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg",
    featured: true,
    duration: "3 months",
    price: 20000,
    tags: ["Backend", "Python", "Django", "Web Apps", "APIs"],
  },
  {
    title: "Digital Marketing Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/DIGITAL-MARKETING-banner-min_JBHENk4.webp",
    featured: true,
    duration: "3 months",
    price: 4000,
    tags: ["Marketing", "SEO", "Social Media", "Google Ads", "Branding"],
  },
  {
    title: "Quality Assurance Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/qa-banner-min_l0DzbAP.jpg",
    featured: false,
    duration: "3 months",
    price: 10000,
    tags: ["Software Testing", "Manual Testing", "Automation", "QA", "Bug Tracking"],
  },
  {
    title: "Graphic Design Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/banner11-min_6ANDad7.png",
    featured: false,
    duration: "3 months",
    price: 10000,
    tags: ["Design", "Photoshop", "Illustrator", "Creativity", "Branding"],
  },
  {
    title: "Flutter Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/flutter-banner-min_DUDTPdH.jpg",
    featured: false,
    duration: "3 months",
    price: 10000,
    tags: ["Mobile Development", "Flutter", "Dart", "Cross Platform", "Apps"],
  },
  {
    title: "DevOps Training in Nepal",
    image: "https://www.mindrisers.com.np/static/Images/courses/banner/DevOps_Training.png",
    featured: false,
    duration: "3 months",
    price: 10000,
    tags: ["DevOps", "CI/CD", "Docker", "Cloud", "Linux"],
  },
];

//  Component
function Course(props) {
  return (
    <li className="course course-component">
      <img src={props.image} />
      {/* <div className="tags">
        {props.tags.map((el) => (
          <span className="tag">{el}</span>
          ))}
          </div>
           */}
      <Tags tags={props.tags} />
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

export default function Coruses() {
  return (
    <div>
      <h2>Featured Courses</h2>
      <ul className="courses">
        {courses.map((el) => {
          if (el.featured) {
            return (
              <li className="course">
                <img src={el.image} />
                <Tags tags={el.tags} />
                {/* <div className="tags">
                  {el.tags.map((el) => (
                    <span className="tag">{el}</span>
                  ))}
                  ({el.tags.length})
                </div> */}
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
              <Tags tags={el.tags} />

              {/* <div className="tags">
                {el.tags.map((el) => (
                  <span className="tag">{el}</span>
                ))}
              </div> */}
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
            return <Course tags={el.tags} title={el.title} price={el.price} image={el.image} featured={el.featured} />;
          }
        })}
      </ul>
      <hr />
      <h2>All Courses using Component</h2>
      <ul className="courses">
        {courses.map((el) => {
          return <Course tags={el.tags} title={el.title} price={el.price} image={el.image} featured={el.featured} />;
        })}
      </ul>
      <hr />
    </div>
  );
}
