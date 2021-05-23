import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Link } from 'react-router-dom'
class Header extends Component {
  render() {
    const description = "this.props.data.description";

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />
        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h2 className="responsive-headline">Today a reader, tomorrow a leader!</h2>
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
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
