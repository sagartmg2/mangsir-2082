import React from "react";

function Blogs() {
  const blogs = [
    {
      title: "Why Learn MERN Stack in 2026?",
      description: "MERN Stack remains one of the most in-demand skills for web developers, offering full-stack JavaScript development and strong career growth.",
      image: "https://picsum.photos/600/400?random=1",
      tags: ["MERN", "Web Development", "JavaScript", "Career"],
    },
    {
      title: "Getting Started with Python and Django",
      description: "Python with Django is perfect for building secure and scalable web applications, especially for beginners entering backend development.",
      image: "https://picsum.photos/600/400?random=2",
      tags: ["Python", "Django", "Backend", "Programming"],
    },
    {
      title: "Digital Marketing Skills You Need Today",
      description: "From SEO to social media ads, digital marketing skills help businesses grow online and open multiple career opportunities.",
      image: "https://picsum.photos/600/400?random=3",
      tags: ["Digital Marketing", "SEO", "Social Media", "Marketing"],
    },
    {
      title: "How DevOps Improves Software Delivery",
      description: "DevOps practices like CI/CD and automation help teams ship software faster, more reliably, and with fewer errors.",
      image: "https://picsum.photos/600/400?random=4",
      tags: ["DevOps", "CI/CD", "Automation", "Cloud"],
    },
  ];

  return (
    <div>
      <h2>Blogs</h2>
      <hr />
      <ul className="blogs">
        {blogs.map((el) => {
          return (
            <li className="blog">
              <img src={el.image} />
              <h3>{el.title}</h3>
              <p>{el.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blogs;
