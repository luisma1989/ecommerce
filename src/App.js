import React, { Component, PropTypes } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <header>Eccomerce</header>
        {this.props.children}
        <footer>&Copy; 2017</footer>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
}

export default App;
