import React from "react";

const Videos = () =>
  <div className="container">
    <h3 class="title">Videos</h3>
    <form className="form-inline" id="search-term">
        <div className="form-group mx-sm-3">
          <input type="text" className="form-control" id="query" placeholder="" />
        </div>
        <button type="submit" value="Submit" className="btn btn-primary">Enter</button>
    </form>

    <div className="row">
        <div id="videos-row">
        </div>
    </div>
  </div>

export default Videos;
 