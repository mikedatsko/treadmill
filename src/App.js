import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    scale: 1,
    widthBlock: 1024,
    heightBlock: 600,
    k: 1,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);

    this.setState(
      {k: this.state.widthBlock / this.state.heightBlock},
      () => this.onResize()
    );
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = e => {
    console.log(e);
    const { k } = this.state;
    let scale = 1;

    if (window.innerWidth / window.innerHeight < k) {

    }

    const width =

    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      scale: 1
    });
  };

  render() {
    return (
      <div className="Wrapper">
        <div className="App" onResize={this.onResize} style={{transform: `scale(${this.state.scale})`}}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <h2>
              {this.state.width}x{this.state.height}
            </h2>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
