import React from "react";
import "./Message.css";

// const Message = (props) => {
//   return (
//     <div>
//       <h3>
//         My Name is {props.name} Age is {props.age}
//       </h3>
//     </div>
//   );
// };

//Destructure props

// const Message = ({ name, age }) => {
//   return (
//     <div>
//       <h3>
//         My Name is {name} Age is {age}
//       </h3>
//     </div>
//   );
// };

//Destructure props

const Message = (props) => {
  const { name, age } = props;
  return (
    <div>
      <h3>
        My Name is {name} Age is {age}
      </h3>
    </div>
  );
};

export default Message;
