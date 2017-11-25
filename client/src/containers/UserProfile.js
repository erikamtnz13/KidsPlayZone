import React from "react";
import Image from '../components/Image.jsx'


class UserProfile extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="container">
        <h3>User Profile</h3>
        <Image />

      </div>
    )
  }
}

  

export default UserProfile;
