import React from "react";
import { Card, CardImg } from 'reactstrap';
import squaddioLogo from '../../imgs/squaddio.jpg';
import nobrakesLogo from '../../imgs/nobrakes.jpg';
import ovarioLogo from '../../imgs/ovario.PNG';
import empireLogo from '../../imgs/empire.jpg';
import brainsLogo from '../../imgs/brains.jpg';
import golfLogo from '../../imgs/battlegolf.jpg';
import starveLogo from '../../imgs/starve.jpg';
import paperLogo from '../../imgs/paper.png';
import lazerLogo from '../../imgs/lazerdrive.png';

import "./games.css";

const Games = () =>
  <div className="container">
    <h1>Games</h1>
    <div className="row">
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/squaddio/en/#t-s-f-C"><CardImg top width="100%" src={squaddioLogo} alt="Card image cap" /></a>
        </Card>
      </div>
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/nobrakesio/en/#t-s-f-C"><CardImg top width="100%" className="img-responsive" src={nobrakesLogo} alt="Card image cap" /></a>
        </Card>
      </div>
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/ovario/en/#t-s-f-C"><CardImg top width="100%" src={ovarioLogo} alt="Card image cap" /></a>
        </Card>
      </div>
    </div>

    <div className="row">
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/empire/en/#t-s-f-C"><CardImg top width="100%" src={empireLogo} alt="Card image cap" /></a>
        </Card>
      </div>
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/braains-io/en/#t-s-f-C"><CardImg top width="100%" src={brainsLogo} alt="Card image cap" /></a>
        </Card>
      </div>
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/battle-golf-online/en/#t-s-f-C"><CardImg top width="100%" src={golfLogo} alt="Card image cap" /></a>
        </Card>
      </div>
    </div>

    <div className="row">
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/lazerdriveio/en/#t-s-f-C"><CardImg top width="100%" src={lazerLogo} alt="Card image cap" /></a>
        </Card>
      </div>
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/starve-io/en/#t-s-f-C"><CardImg top width="100%" src={starveLogo} alt="Card image cap" /></a>
        </Card>
      </div>
      <div className="col-md-4 card">
        <Card>
          <a href="https://www.miniclip.com/games/paper-io/en/#t-s-f-C"><CardImg top width="100%" src={paperLogo} alt="Card image cap" /></a>
        </Card>
      </div>
    </div>
  </div>;

export default Games;


