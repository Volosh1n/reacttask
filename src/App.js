import React, { Component } from 'react';
import Card from './components/Card';
import Profile from './components/Profile';
import './css/style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { select } from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
    this.updateSearch = this.updateSearch.bind(this);
    const { dispatch } = props;
    this.boundActions = bindActionCreators(select, dispatch);
  }

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let clientInfo = '';
    let filteredClients = this.props.clients.filter(
      (client) => {
        return (
          clientInfo = client.general.firstName.toLowerCase() +
          client.general.lastName.toLowerCase() +
          client.job.title.toLowerCase() +
          client.job.company.toLowerCase(),
          clientInfo.indexOf(this.state.search.toLowerCase()) !== -1
        );
      }
    );
    return (
      <div className="ui four column grid">
        <div className="six wide column">
          <div className="ui big icon input focus">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.search}
              onChange={this.updateSearch}
              autoFocus /
            >
            <i className="search icon"></i>
          </div>
          <div className="ui cards">
            <Card clients={filteredClients} callbackFromParent={this.boundActions} />
          </div>
        </div>
        <div className="ui items">
          <Profile />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clients: state.clients,
  };
}

export default connect(mapStateToProps)(App);
