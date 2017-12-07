import React from 'react'
import {Input, Button } from 'reactstrap'
import Auth from '../modules/Auth'
import io from 'socket.io-client'

class HomeChatroom extends React.Component{
    constructor(){
        super()
        this.state = {
            chats:[],
            name: '',
            message: '',
            socket:''
        }

        this.handleInput = this.handleInput.bind(this)
        this.submitMessage = this.submitMessage.bind(this)
        this._addMessage = this._addMessage.bind(this)  

    }

    componentDidMount(){

        const socket = io();
        socket.on('chat message', msg=>{
            this._addMessage(msg)
        })
        this.setState({socket})
    //    this.getChat()
    }

   _addMessage(msg){
        this.setState( prevState => {
            var chats = [...prevState.chats]
            chats.push(msg)
            return {chats}
        })
   }

    
    handleInput(event){
        this.setState({message: event.target.value})
        
    }

    submitMessage(event){
        event.preventDefault()
        this.state.socket.emit('chat message', this.state.message)
        this.setState({message: ''})
    }


    getChat(){
        this.setState({name: localStorage.getItem('name') })
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/chat');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        // set the authorization HTTP header
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
          if (xhr.status === 200) {
            this.setState({
              chats: xhr.response.chat
            });
            console.log(this.state.chat)
          }
        });
        xhr.send();
    }


    render()
    {
        return (
            <div>
                <div id="chat" 
                    name="chat" 
                    value={this.state.chat}>
                    hello
                    {this.state.chats.map((message, i) => <p key={i}>{message}</p>)}
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