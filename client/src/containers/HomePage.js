import React from "react"
import HomeChatroom from './HomeChatroom'


class HomePage extends React.Component {
  constructor(){
    super()
  }

  render() {
    return (
      <div className="container">
        <h3 className="tabTitle">Chat Room</h3>
        <HomeChatroom/>

      </div>
    )
  }
}

  

export default HomePage;