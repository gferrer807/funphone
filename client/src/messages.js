import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  render() {
    return (
      <aside className="aside aside-2">
        <h3>Message Options</h3>
        <ul>
          {this.props.messages.map((items, key) => {
            return(
              <div>
                <li value={items.mName} key={key} onClick={() => {this.props.setMessage(items.mName)}}>{items.mName}</li>
              </div>
            )
          })}
        </ul>
      </aside>
    );
  }
}

export default Message;