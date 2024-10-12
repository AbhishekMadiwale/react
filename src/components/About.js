import User from "./User";
import UserClass from "./UserClass";
import React from "react";

// Class based component just to understand 
// Life cycle methods of React (please check ReadMe file)
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    // console.log("Parent Did Mount")
  }

  render() {
    // console.log("Parent Render")
    return (
      <div>
        <UserClass
          name={"Abhishek (classbased)"}
          location={"Pune (from classbased)"}
        />
      </div>
    );
  }
}
// const About = () => {
//     console.log("Parent render")
//     return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"Abhishek Madiwale (props)"} location={"Pune"} /> */}

//       <UserClass
//         name={"Abhishek (classbased)"}
//         location={"Pune (from classbased)"}
//       />
//     </div>
//   );
// };

export default About;
