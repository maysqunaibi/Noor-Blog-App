import React, { Component } from "react";
import api from "../api";
import styled from "styled-components";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { NavBar } from "../components";
import FroalaEditorComponent from "react-froala-wysiwyg";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import ParticlesBg from "particles-bg";

const Title = styled.h1.attrs({
  className: "h2",
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

class BlogsInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
     
    this.setState({ model });
  };
  handleChangeInputTime = async (event) => {
    const readingTime = event.target.value;
    this.setState({ readingTime });
  };

  handleIncludeBlog = async () => {
    const { authorName, title, model, readingTime } = this.state;
    const arrayTime = readingTime.split("/");
    const payload = { authorName, title, model, readingTime: arrayTime };

    await api.insertBlog(payload).then((res) => {
      window.alert(`Movie inserted successfully`);
      this.setState({
        authorName: "",
        title: "",
        model: "",
        readingTime: "",
      });
    });
  };
  
  render() {
    const { authorName, title, model, readingTime } = this.state;
    return (
      <div>
        <NavBar />
        <ParticlesBg type="thick" num={10} bg={true} />
        <Wrapper>
          <Paper elevation={9}>
            <Title>Share Your Thoughts. Make a difference!</Title>

            <div style={{ display: "block", margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Author Name:"
                variant="outlined"
                type="text"
                value={authorName}
                onChange={this.handleChangeInputName}
              />
            </div>
            <div  style={{ display: "block", margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Title: "
                variant="outlined"
                type="text"
                value={title}
                onChange={this.handleChangeInputTitle}
              />
            </div>
            <div style={{ margin: "15px" }} >
              <FroalaEditorComponent
                tag="textarea"
                model={model}
                onModelChange={this.handleChangeInputText}
              />
            </div>
            <div style={{ display: "block", margin: "15px" }}>
              <TextField
                id="outlined-basic"
                label="Time for Reading:"
                variant="outlined"
                type="text"
                value={readingTime}
                onChange={this.handleChangeInputTime}
              />
            </div>
            <Button onClick={this.handleIncludeBlog}>Create Blog</Button>
            <CancelButton href={"/blogs/list"}>Cancel</CancelButton>
          </Paper>
        </Wrapper>
      </div>
    );
  }
}

export default BlogsInsert;
