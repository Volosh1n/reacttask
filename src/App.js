import React, { Component } from 'react';
import clientsData from './clients.json';

function Media(props) {
  return (
    <div className="media">
      <img src={props.person.general.avatar} alt="avatar" style={{width: 88}}/>
      <div className="media-body pl-3">
        <b>{props.person.general.firstName} {props.person.general.lastName}</b>
        <p>{props.person.job.company}</p>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">
      <div className="card-body">
        <Media person={props.person} />
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
              clientsData.map(function(person, index){
                return (
                  <Card person={person} />
                );
              })
            }
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
