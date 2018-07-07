import React from 'react';

function Card(props) {
  return (
    props.clients.map((person, index) => {
      return (
        <div className="card" key={index} onClick={() => props.callbackFromParent(person)}>
          <div className="content">
            <img className="left floated mini ui circular image" src={person.general.avatar} alt="avatar" />
            <div className="header">
              {person.general.firstName} {person.general.lastName}
            </div>
            <div className="meta">
              {person.job.title}
            </div>
            <div className="description">
              {person.job.company}
            </div>
          </div>
        </div>
      );
    })
  );
}

export default Card;
