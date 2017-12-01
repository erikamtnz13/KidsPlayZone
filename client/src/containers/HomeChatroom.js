import React from 'react'
import {Input, Button } from 'reactstrap'

class HomeChatroom extends React.Component{
    constructor(){
        super()
        this.state = {
            chat:[],
            message: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.submitMessage = this.submitMessage.bind(this)

    }

    handleInput(event){
        this.setState({message: event.target.value})
        
    }

    submitMessage(event){
        event.preventDefault()
        let message = this.state.message
        this.setState({chat: this.state.chat.concat(message), message: ''})
        console.log(this.state.chat)
    }

    render()
    {
        return (
            <div>
                <div id="chat" 
                    name="chat" 
                    value={this.state.chat}>
                    
                    {this.state.chat.map((message,i) => <p key={i}>{message}</p>)}
                </div>
                <Input 
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInput}/>

                    <button 
                    onClick={this.submitMessage}  
                    type="submit" value="Submit" className="btn btn-primary">Send</button>

            </div>
        )
    }

}

export default HomeChatroom