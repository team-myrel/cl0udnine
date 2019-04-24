import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

class Splash extends Component {
  render() {
    return (
      <div id="container">
        <heading>Welcome to Cloud 9 </heading><br />
        <div className="carousel-wrapper">
          <span id="item-1" />
          <span id="item-2" />
          <span id="item-3" />
          <span id="item-4" />
          <span id="item-5" />
          <span id="item-6" />
          <span id="item-7" />
          <span id="item-8" />
          <span id="item-9" />
          <div className="carousel-item item-1">
            <h2>Cloud 1</h2>
            <h4>City Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
              Maecenas lacus nunc, imperdiet sed mi et, finibus suscipit mi.
            </p>
            <a className="arrow arrow-prev" href="#item-9" />
            <a className="arrow arrow-next" href="#item-2" />
          </div>

          <div className="carousel-item item-2">
            <h2>Cloud 2</h2>
            <h4>Tropical Rain Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-1" />
            <a className="arrow arrow-next" href="#item-3" />
          </div>

          <div className="carousel-item item-3">
            <h2>Cloud 3</h2>
            <h4>Himalayan Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-2" />
            <a className="arrow arrow-next" href="#item-4" />
          </div>
          <div className="carousel-item item-4">
            <h2>Cloud 4</h2>
            <h4>Desert Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-3" />
            <a className="arrow arrow-next" href="#item-5" />
          </div>
          <div className="carousel-item item-5">
            <h2>Cloud 5</h2>
            <h4>Canyon Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-4" />
            <a className="arrow arrow-next" href="#item-6" />
          </div>
          <div className="carousel-item item-6">
            <h2>Cloud 6</h2>
            <h4>Forest Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-5" />
            <a className="arrow arrow-next" href="#item-7" />
          </div>
          <div className="carousel-item item-7">
            <h2>Cloud 7</h2>
            <h4>Country Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-6" />
            <a className="arrow arrow-next" href="#item-8" />
          </div>
          <div className="carousel-item item-8">
            <h2>Cloud 8</h2>
            <h4>Alaskan Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-7" />
            <a className="arrow arrow-next" href="#item-9" />
          </div>
          <div className="carousel-item item-9">
            <h2>Cloud 9</h2>
            <h4>Ocean Air</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              accumsan pretium dolor vel convallis. Aliquam erat volutpat.
            </p>
            <a className="arrow arrow-prev" href="#item-8" />
            <a className="arrow arrow-next" href="#item-1" />
          </div>
        </div>
        <br />
        <p>
          rem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          accumsan pretium dolor vel convallis. Aliquam erat volutpatrem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus accumsan pretium
          dolor vel convallis. Aliquam erat volutpatrem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus accumsan pretium dolor vel
          convallis. Aliquam erat volutpatrem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus accumsan pretium dolor vel convallis. Aliquam
          erat volutpat
        </p>
      </div>
    )
  }
}

export default Splash
