import React, { Component } from "react";
import {SERVER_URL} from '../constants.js';

class Query extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
      textarea: '',
    };
  }

  handleButtonClick = () => {
    console.log(SERVER_URL+'?query='+encodeURIComponent(this.state.textarea));
    fetch(SERVER_URL+'?query='+encodeURIComponent(this.state.textarea), {
      method: 'post',
    }).then(response => response.text())
    .then(x=> this.setState({response : x}))
}


  handleChange = (event)  => {
    this.setState({textarea: event.target.value});
    console.log(this.state.textarea);
  }

  render() {
    return (
      <div>
        <textarea rows="4" cols="50" value={this.state.textarea}
        onChange={this.handleChange}></textarea>
  <p>{this.state.response}</p>
        <br></br>
        <button type="button" id="button" onClick={() => this.handleButtonClick()}>
          Query
        </button>
      </div>
    );
  }
}

export default Query;
