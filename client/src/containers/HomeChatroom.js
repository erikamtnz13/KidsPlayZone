import React from 'react'
import {Input, Button } from 'reactstrap'
import Auth from '../modules/Auth'
import io from 'socket.io-client'
const socket = io();
var arr = []
socket.on('chat message', function(msg){
    arr.push(msg)
})

// import openSocket from 'socket.io-client';
// const socket = openSocket('http://localhost:3000');

class HomeChatroom extends React.Component{
    constructor(){
        super()
        this.state = {
            chat:arr,
            name: '',
            message: ''
        }

        this.handleInput = this.handleInput.bind(this)
        this.submitMessage = this.submitMessage.bind(this)

    }

    // componentDidMount(){
    //    this.getChat()
    // }

    
    handleInput(event){
        this.setState({message: event.target.value})
        
    }

    submitMessage(event){
        event.preventDefault()
        socket.emit('chat message', this.state.message)
        // return false

     
        // this.insertChat()
        // this.getChat()
        // this.setState({message: ''})
    }

   

    // insertChat(){
    //     // create a string for an HTTP body message
    //     const name = encodeURIComponent(this.state.name);
    //     const message = encodeURIComponent(this.state.message);
    //     const formData = `name=${name}&message=${message}`;
    //     // create an AJAX request
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('post', '/api/chat');
    //     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //     // set the authorization HTTP header
    //     xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    //     xhr.responseType = 'json';
    //     xhr.addEventListener('load', () => {
    //     if (xhr.status === 200) {
    //         // success
    //         console.log(xhr.response)
    //         // set a message
    //         localStorage.setItem('successMessage', xhr.response.message);
        
    //     } else {
    //         // failure
    //         console.log(xhr.response)
    //     }
    //     });
    //     xhr.send(formData);  

    // }

    // getChat(){
    //     this.setState({name: localStorage.getItem('name') })
    //     const xhr = new XMLHttpRequest();
    //     xhr.open('get', '/api/chat');
    //     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //     // set the authorization HTTP header
    //     xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    //     xhr.responseType = 'json';
    //     xhr.addEventListener('load', () => {
    //       if (xhr.status === 200) {
    //         this.setState({
    //           chat: xhr.response.chat
    //         });
    //         console.log(this.state.chat)
    //       }
    //     });
    //     xhr.send();
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.state.chat !== nextState.chat) {
    //         console.log('component updated')
    //       return true;
    //     }
    //     if (this.state.message !== nextState.message){
    //         console.log('component did not update')
    //         return false;
    //     }
    //     console.log('component did not update')
    //     return false;
    //   }

    render()
    {
        return (
            <div>
                <div id="chat" 
                    name="chat" 
                    value={this.state.chat}>
                    {this.state.chat.map((message, i) => <p key={i}>{message}</p>)}
                </div>
                <form>
                <Input 
                    type="text"
                    name="message"
                    value={this.state.message}
                    onChange={this.handleInput}
                    />

                    <button 
                    onClick={this.submitMessage}  
                    type="submit" value="Submit" className="btn btn-primary">Send</button>
                </form>
            </div>
        )
    }

}

export default HomeChatroom