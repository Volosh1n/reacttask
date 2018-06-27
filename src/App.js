import React, { Component } from 'react';
import clientsData from './clients.json';

class Card extends Component {
  render() {
    return(
      clientsData.map((person, index) => {
        return (
          <div className="card" key={index} onClick={() => this.props.callbackFromParent(person)}>
            <div className="card-body">
              <div className="media">
                <img src={person.general.avatar} alt="avatar" style={{width: 88}}/>
                <div className="media-body pl-3">
                  <b>{person.general.firstName} {person.general.lastName}</b>
                  <p>{person.job.company}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }  
}

function Profile(props) {
  if (!props.person) {
    return null;
  }

  return(
    <div className="media">
      <img src={props.person.general.avatar} alt="avatar" />
      <div className="media-body ml-5">
        <h3>
          {props.person.general.firstName} {props.person.general.lastName}
        </h3>
        <i>{props.person.job.title}</i>
        <span> in </span>
        <i>{props.person.job.company}</i>
        <h6 style={{paddingTop: 20}}>Contacts:</h6>
        <ul>
          <li>{props.person.contact.email}</li>
          <li>{props.person.contact.phone}</li>
        </ul>
        <h6>Address:</h6>
        <ul>
          <li>{props.person.address.street}</li>
          <li>{props.person.address.city}</li>
          <li>{props.person.address.zipCode}</li>
          <li>{props.person.address.country}</li>
        </ul>
      </div>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClient: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (client) => {
    this.setState({ currentClient: client })
  };

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <Card callbackFromParent={this.handleClick} />
          </div>
          <div className="col-8 p-0">
            <Profile person={this.state.currentClient} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
