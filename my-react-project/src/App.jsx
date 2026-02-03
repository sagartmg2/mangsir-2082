import Courses from "./Courses";
import Todos from "./Todos";
import Blogs from "./Blogs";

let title = "React Project";
let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae expedita harum natus sit molestias vel voluptatum numquam excepturi nesciunt neque? Voluptas labore deserunt, veniam rem asperiores saepe quos quas voluptate?";

export default function App() {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <Courses />
      <Todos />
      <Blogs />
    </div>
  );
}
