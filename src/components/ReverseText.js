import React, { Component } from "react";
import { css } from "react-emotion";

const header = css`
  h1 {
    text-align: center;
    color: tomato;
  }
  div {
    text-align: center;
    width: 30%;
    margin: auto;
  }
`;

class ReverseText extends Component {
  state = {
    inputValue: ""
  };

  input(e) {
    const { value } = e.target;
    this.setState({
      text: value
        .split("")
        .reverse()
        .join("")
    });
    console.log(value);
  }

  render() {
    return (
      <div className={header}>
        <h1> Hello World</h1>
        <div>
          <label onChange={e => this.input(e)}>
            <h3> Reverse</h3>
            <input type="text" />
          </label>

          <h3>output text</h3>
          <p>{this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default ReverseText;
