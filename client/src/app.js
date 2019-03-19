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
      messages: [],
      selectedContact: "",
      selectedMessage: ""
    };
    this.setContact = this.setContact.bind(this);
    this.setMessage = this.setMessage.bind(this);
    this.getContacts = this.getContacts.bind(this);
    this.getMessages = this.getMessages.bind(this);
    this.makeCall = this.makeCall.bind(this);
  }

  componentDidMount() {
    this.getContacts();
    this.getMessages();
  }

  getContacts() {
    axios.get('http://localhost:3000/contacts')
    .then((data) => {
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

  setContact(contact) {
    this.setState({
      selectedContact: contact
    })
  }

  setMessage(message) {
    this.setState({
      selectedMessage: message
    })
  }

  makeCall() {
    console.log('Ring Ring.....Ring Ring.....')
    axios.post('http://localhost:3000/call', {
      contact: this.state.selectedContact,
      message: this.state.selectedMessage
    })
    .catch((err) => {
      console.log(err);
    })
  }


  render() {
    return (
    <div className="wrapper">
      <Contacts contacts={this.state.contacts} setContact={this.setContact}/>
      <Messagemaker />
      <Message messages={this.state.messages} setMessage={this.setMessage}/>
      <Footer makeCall={this.makeCall}/>
    </div>);
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);