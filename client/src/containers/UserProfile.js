import React from "react";
import Image from '../components/Image.jsx'


class UserProfile extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="container">
        <h1>User Profile</h1>
        <Image />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit,
          lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi ac dui
          fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras non risus
          mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet ac. Sed nec
          nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum ligula
          in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec
          nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum
          molestie hendrerit massa non consequat. Vestibulum vitae lorem tortor. In
          elementum ultricies tempus. Interdum et malesuada fames ac ante ipsum
          primis in faucibus.
        </p>
    </div>
    )
  }
}

  

export default UserProfile;
