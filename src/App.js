import React, { Component } from 'react';
import Card from './components/Card';
import Profile from './components/Profile';
import clientsData from './clients.json';
import './css/style.css';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      clients: clientsData,
      currentClient: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  handleClick = (client) => {
    this.setState({ currentClient: client })
  };

  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let clientInfo = '';
    let filteredClients = this.state.clients.filter(
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
            <Card clients={filteredClients} callbackFromParent={this.handleClick} />
          </div>
        </div>
        <div className="ui items">
          <Profile person={this.state.currentClient} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(App);
