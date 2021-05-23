/* eslint-disable */
import { NavBar } from '../components'
import React, { Component } from "react";
import api from "../api";
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
import logo from "../components/favicon.ico"
import "react-table/react-table.css";
// import Card from "@material-ui/core/Card";

const Update = styled.button.attrs({
    className: ` buttonn btn btn-info`,
    
  })`
    margin: 4px;
    color:green;
  `;

const Delete = styled.a.attrs({
    className: `buttonn btn btn-danger`,
  })`
  margin: 4px ;
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
    console.log("props : ", this.props)
    return (
      <div>
      <NavBar/>
      <Container fluid='true'style={{paddingLeft:'8%'}}>
        <CardDeck style={{marginRight:"10px", marginLeft:'10px'}}>
        {blogs
          ? blogs.map((blog, key) => (
            <Row as={<Card/>}>
              <Card key={key} style={{ marginRight:"10%", marginBottom:'10%', width:'5rm'}}>
                
                <CardImg
                  top
                  style={{width:'20%'}}
                  src={logo}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{blog.title}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {blog.createdAt.substring(0,10)}
                  </CardSubtitle>
                  <CardText>
                    {blog.model}....
                  </CardText>
                  <div style={{display:"flex", margin:"auto"}}>
                  <DeleteBlog id={blog._id} />
                  <UpdateBlog id={blog._id}/>
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

// const columns = [
//     {
//         Header: 'ID',
//         accessor: '_id',
//         filterable: true,
//     },
//     {
//         Header: 'Name',
//         accessor: 'name',
//         filterable: true,
//     },
//     {
//         Header: 'Rating',
//         accessor: 'rating',
//         filterable: true,
//     },
//     {
//         Header: 'Time',
//         accessor: 'time',
//         Cell: props => <span>{props.value.join(' / ')}</span>,
//     },
//     {
//         Header: '',
//         accessor: '',
//         Cell: function(props) {
//             return (
//                 <span>
//                     <DeleteBlog id={props.original._id} />
//                 </span>
//             )
//         },
//     },
//     {
//         Header: '',
//         accessor: '',
//         Cell: function(props) {
//             return (
//                 <span>
//                     <UpdateBlog id={props.original._id} />
//                 </span>
//             )
//         },
//     },
// ]
