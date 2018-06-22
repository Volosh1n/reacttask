import React, { Component } from 'react';
import clientsData from './clients.json';

class App extends Component {
  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-5">
            {
              clientsData.map(function(person){
                return (
                  <div className="card">
                    <div className="card-body">
                      <div className="media">
                        <img src={person.general.avatar} style={{width: '100px', height: '100px'}}/>
                        <div className="media-body pl-3">
                          <b>{person.general.firstName} {person.general.lastName}</b>
                          <p>{person.job.company}</p>
                        </div>
                      </div>
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
