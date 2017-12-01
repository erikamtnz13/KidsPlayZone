import React from "react";
import './videos.css'

const Videos = () =>
  <div className="container">
    <h3 className="tabTitle"><span className="blink">[</span>Videos<span className="blink">]</span></h3>
    <div className="row justify-content-md-center">
      <form className="form-inline" id="search-term">
          <div className="form-group mx-sm-3">
            <input type="text" className="form-control" id="query" placeholder="" />
          </div>
          <button type="submit" value="Submit" className="btn btn-primary" id="video-btn" >Enter</button>
      </form>
    </div>

    <div className="row">
        <div id="videos-row">
        </div>
    </div>
  </div>

export default Videos;