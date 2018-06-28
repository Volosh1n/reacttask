import React, { Component } from 'react';
import Card from './components/Card';
import Profile from './components/Profile';
import clientsData from './components/clients.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      currentClient: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  handleClick = (client) => {
    this.setState({ currentClient: client })
  };

  updateSearch(event) {
    this.setState({ search: event.target.value.toLowerCase() });
    console.log(this.state.search);
  }

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <div className="mb-3">
              <input
                type="text"
                placeholder="search"
                className="form-control"
                value={this.state.search}
                onChange={this.updateSearch}
                autoFocus /
              >
            </div>
            <Card clients={clientsData} callbackFromParent={this.handleClick} />
          </div>
          <div className="col-8 p-0">
            <Profile person={this.state.currentClient} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
