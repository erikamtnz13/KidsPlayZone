import React from "react";
import {Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Videos extends React.Component{
  constructor(){
    super()
    this.state = {
      query: '',
      searchResult: [],
      modal: false,
      currentVideoId: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
    
  }

  handleInput(event){
    event.preventDefault()
    this.setState({query: event.target.value})

  }

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.query)
    this.getRequest(this.state.query)
  }

  getRequest(searchTerm) {
    const url = 'https://www.googleapis.com/youtube/v3/search';
    var params = {
        part: 'snippet',
        key: 'AIzaSyBTeugYT-3-lxvuPKnDKPojsbisl_wknqA',
        q: searchTerm,
        safeSearch: 'strict',
        maxResults: 10  ,
        order: 'viewCount',
        type: 'video',
        videoEmbeddable: true
    };
  
        $.getJSON(url, params,  (searchResult) => {
            this.setState({searchResult: searchResult.items })
            console.log(this.state.searchResult)
            
    });
  }

  toggle() {
    console.log(this.state.currentVideoId)
    this.setState({
    modal: !this.state.modal
    });
  }

  

  render(){
    return (
      <div className="container">
      <h3>Videos</h3>
      <form className="form-inline" id="search-term">
          <div className="form-group mx-sm-3">
            <input 
              name="query"
              onChange={this.handleInput}
              type="text" className="form-control" id="query" placeholder="" />
          </div>
          <button 
            onClick={this.handleSubmit}  
            type="submit" value="Submit" className="btn btn-primary">Enter</button>
      </form>

      
  
      <div className="row">
          <div id="videos-row">
          {this.state.searchResult.length ? 
            this.state.searchResult.map(videoItem => 
            <div key={videoItem.id.videoId}  onClick={() => this.setState({currentVideoId:videoItem.id.videoId})}>
            <a 
            onClick={this.toggle}
              ><img src={videoItem.snippet.thumbnails.medium.url} className="media-fluid"/>
            </a>
            </div>)
            : "Enter your search"}
          </div>
      </div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} >
      <ModalHeader toggle={this.toggle}>Video</ModalHeader>      
      <ModalBody>
        <div className="modal-video">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${this.state.currentVideoId}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0`}
             ></iframe>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
    </div>
  
    )
  }

}

  
export default Videos;
 