import React from "react";

// 1.  default export
// export default function Tags() {
//   return (
//     <div>Tags</div>
//   )
// }
//  import Tags from "./Tags"

// 2 named export
// export function Tags() {
//   return <p>tags....................</p>;
// }

// 3 . named export
export const Tags = (props) => {
  return (
    <div className="tags">
      {props.tags.map((el) => (
        <span className="tag">{el}</span>
      ))}
      {/* ({props.tags.length}) */}
    </div>
  );
};

// 4.
// const Tags = () =>{
// }
// export default Tags
