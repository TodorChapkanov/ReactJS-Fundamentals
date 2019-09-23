import React from 'react';
import './App.css';
import ContactList from './Contacts.json';
import rerender from './index';

let number = 0;

const showContact = (data, index) => (
  <div className="contact" onClick={e => refreshContactDetails(index)} key={data.email} data-id="id">
    <span className="avatar small">&#9787;</span>
    <span className="title">{data.firstName} {data.lastName}</span>
  </div>
);

const refreshContactDetails = num => {
  number = num;
  console.log(num);
  rerender(App(), document.getElementById('root'));
}

const showDetails = (data) => (
  <div className="content">
    <div className="info">
      <div className="col">
        <span className="avatar">&#9787;</span>
      </div>
      <div className="col">
        <span className="name">{data.firstName}</span>
        <span className="name">{data.lastName}</span>
      </div>
    </div>
    <div className="info">
      <span className="info-line">&phone; {data.phone}</span>
      <span className="info-line">&#9993; {data.email}</span>
    </div>
  </div>
);

const renderContacts = () => {
  const finalList = [];
  for (let contact of ContactList) {
    finalList.push(showContact(contact, finalList.length));
  }
  return finalList;
}

const App = () => (
  <div className="container">
    <header>&#9993; Contact Book</header>
    <div id="book">
      <div id="list">
        <h1>Contacts</h1>
        <div className="content">
          {renderContacts()}
        </div>
      </div>
      <div id="details">
        <h1>Details</h1>
        {showDetails(ContactList[number])}

      </div>
    </div>
    <footer>Contact Book SPA &copy; 2017</footer>
  </div>
);

export default App;
