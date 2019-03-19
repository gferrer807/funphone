import React from "react";
import ReactDOM from "react-dom";

class Messagemaker extends React.Component {
  render() {
    return (
    <article className="main">
      <div className="contact">
          <h4>Contact: </h4>
          <input type="text" className="input-title"/>
      </div>
      <div className="message">
          <h4>Message</h4>
          <input type="text" className="input-message"/>
      </div>
      <button type="submit">Store</button>
    </article>
    );
  }
}

export default Messagemaker;