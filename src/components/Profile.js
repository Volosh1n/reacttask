import React from 'react';

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

export default Profile;
