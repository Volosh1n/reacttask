import React, { Component } from 'react';
import clientsData from './clients.json';

var Card = function({person, onClick}) {
  return(
    clientsData.map((person, index) => {
      return (
        <div className="card" key={index} onClick={() => onClick(person)}>
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

class App extends Component {
  state = { currentClient: false };

  handleClick = currentClient => {
    this.setState({ currentClient })
    console.log(currentClient); // temp
  };

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <Card onClick={this.handleClick} />
          </div>
          <div className="col-8 p-0">
            {/* <Profile person={person} /> TODO: LOAD AFTER CLICK */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
