import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <footer className="footer">
          <button onClick={() => {this.props.makeCall()}}>Call!</button>
      </footer>
    )
  }
}

export default Footer;