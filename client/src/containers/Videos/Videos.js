import React from "react";

class Videos extends React.Component{
  constructor(){
    super()
    this.state = {
      query: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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
    url = 'https://www.googleapis.com/youtube/v3/search';
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
  
        $.getJSON(url, params, function (searchTerm) {
            onSearchResponse(searchTerm);
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
          </div>
      </div>
    </div>
  
    )
  }

}

  
export default Videos;
 