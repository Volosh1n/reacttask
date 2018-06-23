import React, { Component } from 'react';
import clientsData from './clients.json';

function Media(props) {
  return (
    <div className="media">
      <img src={props.person.general.avatar} style={{width: '88px', height: '88px'}}/>
      <div className="media-body pl-3">
        <b>{props.person.general.firstName} {props.person.general.lastName}</b>
        <p>{props.person.job.company}</p>
      </div>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            {
              clientsData.map(function(person){
                return (
                  <div className="card">
                    <div className="card-body">
                      <Media person={person} />
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
