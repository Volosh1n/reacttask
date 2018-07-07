import React from 'react';
import { connect } from 'react-redux';

class Profile extends React.Component {
  render() {
    if ( !this.props.client ) {
      return null;
    }
    window.scrollTo(0, 0);
    return (
      <div className="item">
        <div className="image" style={{width: 128}}>
          <img src={this.props.client.general.avatar} alt="avatar" />
        </div>
        <div className="content">
          <div className="header">
            {this.props.client.general.firstName} {this.props.client.general.lastName}
          </div>
          <div className="meta">
            {this.props.client.job.title}
          </div>
          <div className="description">
            {this.props.client.job.company}
          </div>
          <div className="ui list">
            <div className="item">
              <i className="mail icon"></i>
              <div className="content">
                {this.props.client.contact.email}
              </div>
            </div>
            <div className="item">
              <i className="phone icon"></i>
              <div className="content">
                {this.props.client.contact.phone}
              </div>
            </div>
            <div className="item">
              <i className="marker icon"></i>
              <div className="content">
                <p>{this.props.client.address.street},</p>
                <p>{this.props.client.address.city},</p>
                <p>{this.props.client.address.zipCode},</p>
                <p>{this.props.client.address.country}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    client: state.client
  };
}

export default connect (mapStateToProps)(Profile);
