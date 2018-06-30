import React from 'react';

function Profile(props) {
  if ( !props.person ) {
    return null;
  }

  window.scrollTo(0, 0);
  
  return (
    <div className="item">
      <div className="image" style={{width: 128}}>
        <img src={props.person.general.avatar} alt="avatar" />
      </div>
      <div className="content">
        <div className="header">
          {props.person.general.firstName} {props.person.general.lastName}
        </div>
        <div className="meta">
          {props.person.job.title}
        </div>
        <div className="description">
          {props.person.job.company}
        </div>
        <div className="ui list">
          <div className="item">
            <i className="mail icon"></i>
            <div className="content">
              {props.person.contact.email}
            </div>
          </div>
          <div className="item">
            <i className="phone icon"></i>
            <div className="content">
              {props.person.contact.phone}
            </div>
          </div>
        </div>
        <div className="ui list">
          <div className="item">
            <i className="marker icon"></i>
            <div className="content">
              <p>{props.person.address.street}</p>
              <p>{props.person.address.city}</p>
              <p>{props.person.address.zipCode}</p>
              <p>{props.person.address.country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
