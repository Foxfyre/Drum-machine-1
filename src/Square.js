import React, { Component } from "react";
import "./css/squares.css";

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      url: this.props.url,
      letter: this.props.value
    }
    this.onClick = this.onClick.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.sound = new Audio(this.state.url);
    this.myRef = React.createRef();
    document.addEventListener('keydown', (e) => this.handlePress(e));
  };

  onClick(e) {
    this.myRef.current.play();
  };

  handlePress(e) {
    if (e.keyCode === this.props.keyCode) {
      this.myRef.current.play();
    }
  }

  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.onClick}>
        <audio
          src={this.props.url}
          className="clip"
          id={this.props.value}
          ref={this.myRef}
        >
          <source src={this.props.url} />
        </audio>
        {this.props.value}
      </div>
    );
  }
}

export default Square;