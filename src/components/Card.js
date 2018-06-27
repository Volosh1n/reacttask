import React from 'react';
import clientsData from './clients.json';

class Card extends React.Component {
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

export default Card;
