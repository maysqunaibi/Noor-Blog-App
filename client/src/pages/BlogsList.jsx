/* eslint-disable */
import { NavBar } from "../components";
import React, { Component } from "react";
import api from "../api";
var HTMLParser = require("node-html-parser");
import ParticlesBg from "particles-bg";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import styled from "styled-components";

import "react-table/react-table.css";

const Update = styled.button.attrs({
  className: ` buttonn btn btn-info`,
})`
  margin: 4px;
  color: green;
`;

const Delete = styled.a.attrs({
  className: `buttonn btn btn-danger`,
})`
  margin: 4px;
`;

class UpdateBlog extends Component {
  updateUser = (event) => {
    event.preventDefault();
    window.location.href = `/blogs/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

class DeleteBlog extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the movie ${this.props.id} permanently?`
      )
    ) {
      api.deleteBlogById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

class BlogsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    await api.getAllBlogs().then((blogs) => {
      this.setState({
        blogs: blogs.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { blogs, isLoading } = this.state;
    let root;
    return (
      <div>
        <ParticlesBg type="thick" num={10} bg={true} />
        <NavBar />
        <Container fluid="true" style={{ paddingLeft: "8%" }}>
          <CardDeck style={{ marginRight: "10px", marginLeft: "10px" }}>
            {blogs
              ? blogs.map((blog, key) => (
                <Row>
                  <Card
                    key={key}
                    className='shadow p-3 mb-5 bg-white rounded'
                    style={{
                      backgroundColor: "#FBF4F4", borderColor: "#D7D7D7",
                      marginRight: "10%",
                      marginBottom: "10%",
                      width: "5rm",
                    }}
                  >
                    <CardImg
                      top
                      src={require(`../assests/photo${key < 7 ? key : 0}.jpg`)}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{blog.title}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        {blog.createdAt.substring(0, 10)}
                      </CardSubtitle>

                      <CardText>
                        
                          {HTMLParser.parse(blog.model).textContent.length >
                            50
                            ? HTMLParser.parse(
                              blog.model
                            ).textContent.substring(0,60)
                            : HTMLParser.parse(blog.model).textContent}.....
                        
                      </CardText>
                      <div style={{ display: "flex", margin: "auto" }}>
                        <DeleteBlog id={blog._id} />
                        <UpdateBlog id={blog._id} />
                      </div>
                    </CardBody>
                  </Card>
                </Row>
              ))
              : "Loading...."}
          </CardDeck>
        </Container>
      </div>
    );
  }
}

export default BlogsList;
