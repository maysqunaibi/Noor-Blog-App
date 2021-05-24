import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from 'react-router-dom'
class Header extends Component {
  render() {
    const description = "Read and share new perspectives on just about any topic. Everyone’s welcome. ";

    return (
      <header id="home">
        <ParticlesBg type="lines" num={50} bg={true} />
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h2 className="responsive-headline">Today a Reader, Tomorrow a Leader!</h2>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
            <ul className="social" >
                <Link  to="/blogs/list">
                  <a className=" buttonn btn btn-info">
                  <i className="fa fa-book"></i>View Blogs 
                  </a>
                </Link>
                <Link to="/blogs/create" className=" btn-secondary buttonn btn  ">
                  <i className="fa fa-github"></i>Create Blog
                </Link>
              </ul>
            </Fade>
          </div>
          <p>Created By @Mays Qunaibi</p>
        </div>
        </header>
    );
  }
}

export default Header;
