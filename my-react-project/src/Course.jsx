export default function Course(props) {
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