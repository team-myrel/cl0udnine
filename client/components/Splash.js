import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class Splash extends Component {
  render() {
    return (
      <div><h1>Welcome to Cloud 9 </h1>
        <div className="carousel-wrapper">
          <span id="item-1"></span>
          <span id="item-2"></span>
          <span id="item-3"></span>
          <div className="carousel-item item-1">
            <h2>Cloud 1</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
        erat volutpat. Maecenas lacus nunc, imperdiet sed mi et, finibus suscipit mi.</p>
            <a className="arrow arrow-prev" href="#item-3"></a>
            <a className="arrow arrow-next" href="#item-2"></a>
          </div>

          <div className="carousel-item item-2">
            <h2>Cloud 2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
        erat volutpat.</p>
            <a className="arrow arrow-prev" href="#item-1"></a>
            <a className="arrow arrow-next" href="#item-3"></a>
          </div>

          <div className="carousel-item item-3">
            <h2>Cloud 3</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
        erat volutpat.</p>
            <a className="arrow arrow-prev" href="#item-2"></a>
            <a className="arrow arrow-next" href="#item-1"></a>
          </div></div>
        <br /><p>rem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
erat volutpatrem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
erat volutpatrem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
erat volutpatrem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
        erat volutpat</p></div>
    )
  }
}

export default Splash
