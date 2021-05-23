import React, { Component } from "react";
import api from "../api";

import styled from "styled-components";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { NavBar } from "../components";
import FroalaEditorComponent from "react-froala-wysiwyg";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
const Title = styled.h1.attrs({
  className: "h3",
})`
  padding-left: 20px;
  padding-bottom: 10px;
  padding-top: 20px;
`;

const Wrapper = styled.div.attrs({
  className: "form-group",
})`
margin-left:10px;
margin-top:2px
width: 80%;
padding-left: 22%;
padding-bottom:10%
padding-top:1px;
`;

const Button = styled.button.attrs({
  className: `btn btn-success`,
})`
  margin: 25px 25px 25px 25px;
  background-color: #28a745;
`;

const CancelButton = styled.a.attrs({
  className: `btn btn-danger`,
})`
  margin: 15px 15px 15px 5px;
`;

class BlogsUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      authorName: "",
      title: "",
      model: "",
      readingTime: "",
    };
  }

  handleChangeInputName = async (event) => {
    const authorName = event.target.value;
    this.setState({ authorName });
  };

  handleChangeInputTitle = async (event) => {
    const title = event.target.validity.valid
      ? event.target.value
      : this.state.title;

    this.setState({ title });
  };
  handleChangeInputText = async (model) => {
    //const text = event.target.model;
    this.setState({ model });
  };

  handleChangeInputTime = async (event) => {
    const readingTime = event.target.value;
    this.setState({ readingTime });
  };

  handleUpdateBlog = async () => {
    const { id, authorName, title, model, readingTime } = this.state;
    const arrayTime = readingTime.split("/");
    const payload = { authorName, title, model, readingTime: arrayTime };

    await api.updateBlogById(id, payload).then((res) => {
      window.alert(`Blog updated successfully`);
      this.setState({
        authorName: "",
        title: "",
        model: "",
        readingTime: "",
      });
    });
  };

  componentDidMount = async () => {
    const { id } = this.state;
    const blog = await api.getBlogById(id);

    this.setState({
      authorName: blog.data.data.authorName,
      title: blog.data.data.title,
      model: blog.data.data.model,
      readingTime: blog.data.data.readingTime.join("/"),
    });
  };

  render() {
    const { authorName, title, model, readingTime } = this.state;
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Paper elevation={3}>
            <Title>Click Update to submite the changes</Title>
            <div id="test" style={{ display: "block", margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Author Name:"
                variant="outlined"
                type="text"
                value={authorName}
                onChange={this.handleChangeInputName}
              />
            </div>
            <div id="test" style={{ display: "block", margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Title: "
                variant="outlined"
                type="text"
                value={title}
                onChange={this.handleChangeInputTitle}
              />
            </div>
            <div style={{ margin: "15px" }}>
              <FroalaEditorComponent
                tag="textarea"
                model={model}
                onModelChange={this.handleChangeInputText}
              />
            </div>
            {/* <FroalaEditorView model={this.state.content} /> */}

            <div id="test" style={{ display: "block", margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Time for Reading:"
                variant="outlined"
                type="text"
                value={readingTime}
                onChange={this.handleChangeInputTime}
              />
            </div>

            <Button onClick={this.handleUpdateBlog}>Update Blog</Button>
            <CancelButton href={"/blogs/list"}>Cancel</CancelButton>
          </Paper>
        </Wrapper>
      </div>
    );
  }
}

export default BlogsUpdate;
