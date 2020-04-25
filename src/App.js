import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  formats = [
    "header",
    "font",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];

  handleChange = async (value) => {
    this.setState({ text: value });
    console.log(this.state.text);
  };

  render() {
    return (
      <div className="text-editor">
        <ReactQuill
          theme="snow"
          onChange={this.handleChange}
          modules={this.modules}
          formats={this.formats}
        ></ReactQuill>
      </div>
    );
  }
}

export default App;
