// Class based components
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
      reset: 0,
      userInfo: {
        name: "Default",
        location: "Default",
        avatar_url: "Dummy Avatar",
      },
    };
    // console.log("Child constructor")
  }

  async componentDidMount() {
    // console.log("Child Did mount")
    const data = await fetch("https://api.github.com/users/AbhishekMadiwale");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  render() {
    // destructuring of props
    // const { name, location } = this.props;
    // const { count, count2 } = this.state;

    const { name, location, avatar_url } = this.state.userInfo;
    // console.log("Child render")
    return (
      <div>
        {/* <h1>Count: {count}</h1>
        <button onClick={() => {
            // Never update state variables directly
            this.setState({
                count : this.state.count +1
            })
        }}>Count increase</button> */}
        {/* <br/>
        <br/>
        <button onClick={() => {
            this.setState({
                count: this.state.reset
            })
        }}>Reset</button> */}
        <h1>from ClassBased components</h1>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Email: abhishek.madiwale@gmail.com</h3>
      </div>
    );
  }
}

export default UserClass;
