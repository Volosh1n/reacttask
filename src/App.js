import React, { Component } from 'react';
import Card from './components/Card';
import Profile from './components/Profile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentClient: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (client) => {
    this.setState({ currentClient: client })
  };

  render() {
    return (
      <div className="container p-5">
        <div className="row">
          <div className="col-4">
            <Card callbackFromParent={this.handleClick} />
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
