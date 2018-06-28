import React from 'react';

class Card extends React.Component {
  render() {
    return(
       this.props.clients.map((person, index) => {
        return (
          <div className="card" key={index} onClick={() => this.props.callbackFromParent(person)}>
            <div className="card-body">
              <div className="media hoverable">
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
