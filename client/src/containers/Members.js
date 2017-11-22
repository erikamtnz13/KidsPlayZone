import React from "react";
import Auth from '../modules/Auth'

class Members extends React.Component{

  constructor(){
    super()
    this.state = {
      membersMessage: '',
      members: []
    }
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/members');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          members: xhr.response.message
        });
        console.log(this.state.members)
      }
    });
    xhr.send();
  }

  render(){
    return (
      <div className="container">
      <h1>Members</h1>
      <p>
        Lorem ipsum dolor sit amet, est ut enim consequat. Nostrum fastidii
        partiendo sed ne, no mutat ludus aperiri mea, per in choro dolorem
        electram. Invidunt reprimique assueverit quo ne, eruditi graecis pro ut.
        Usu ut diceret scaevola evertitur, appareat voluptatibus ad vel.
      </p>
    </div>
    )
  }
}
  

export default Members;
