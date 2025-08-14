import React from "react";

class UserClass extends React.Component {
  __isMounted = false;
  constructor(props) {
    super(props);

    this.state = {
      name: "asi lakmal",
      avatar_url: "https://default",
      bio: "software engineer",
    };
  }
  async componentDidMount() {
    this.__isMounted = true;

    const data = await fetch("https://api.github.com/users/lakmalasitha");
    const json = await data.json();
    this.setState(json);
    if ((this.__isMounted = true)) {
      this.state = {
        name: json.name,
        avatar_url: json.avatar_url,
        bio: json.bio,
      };
    }
  }

  componentWillUnmount() {
    this.__isMounted = false;
  }

  render() {
    const { name, bio, avatar_url } = this.state;
    return (
      <div className="main-wrapper">
        <h1>{name}</h1>
        <p>{bio}</p>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
