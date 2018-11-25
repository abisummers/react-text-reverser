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

  handleInput(e) {
    const { value } = e.target;
    this.setState({
      text: value,
      reversed: value
        .split("")
        .reverse()
        .join(""),
      reversedWords: value
        .split(" ")
        .map(w =>
          w
            .split("")
            .reverse()
            .join("")
        )
        .join(" ")
    });
  }

  render() {
    return (
      <div className={header}>
        <h1> Hello World</h1>
        <div>
          <label>
            <h3> Reverse</h3>
            <input
              type="text"
              onChange={e => this.handleInput(e)}
              value={this.state.text}
            />
          </label>

          <h3>output text</h3>
          <p>{this.state.reversed}</p>

          <h3>output text</h3>
          <p>{this.state.reversedWords}</p>
        </div>
      </div>
    );
  }
}

export default ReverseText;
