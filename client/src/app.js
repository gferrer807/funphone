import React from "react";
import ReactDOM from "react-dom";
import Contacts from "./contacts.js";
import Messagemaker from "./composeMessage.js";
import Footer from "./footer.js";
import Message from './messages';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      messages: []
    };
    this.getContacts = this.getContacts.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount() {
    this.getContacts();
    this.getMessages();
  }

  getContacts() {
    axios.get('http://localhost:3000/contacts')
    .then((data) => {
      console.log('data for contacts', data)
      this.setState({
        contacts: data.data
      });
    })
    .catch((err) => {
      console.log(err);
    })
  }

  getMessages() {
    axios.get('http://localhost:3000/messages')
    .then((data) => {
      this.setState({
        messages: data.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
    <div className="wrapper">
      <Contacts contacts={this.state.contacts}/>
      <Messagemaker />
      <Message messages={this.state.messages}/>
      <Footer />
    </div>);
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);