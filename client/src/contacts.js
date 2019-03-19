import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  render() {
    return (
      <aside className="aside aside-1">
        <h3>Contacts</h3>
        <ul>
          {this.props.contacts.map((items, key) => {
            return (
              <div>
                <li value={items.cName} key={key}>{items.cName}</li>
              </div>
            )
          })}
        </ul>
      </aside>
    )
  }
}

export default Contacts;