import React, { Component } from 'react';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './components/Dashboard';
import EntertainmentSelect from './components/EntertainmentSelect';
import EntertainmentView from './components/EntertainmentView';

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

  onResize = () => {
    const { k, widthBlock, heightBlock, scale } = this.state;
    let newScale = scale;
    let kCurrent = window.innerWidth / window.innerHeight;
    let newWidth = window.innerWidth;
    let newHeight = window.innerHeight;

    if (kCurrent < k) {
      console.log(1);
      newHeight = newWidth / k;
      newScale = newWidth / widthBlock;
    } else if (kCurrent > k) {
      console.log(2);
      newWidth = newHeight * k;
      newScale = newHeight / heightBlock;
    }

    console.log('newHeight', newHeight, 'newWidth', newWidth, newScale);

    this.setState({
      width: newWidth,
      height: newHeight,
      scale: newScale
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="app" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
          {/* TODO check scale */}
          {/*<div className="app-header" style={{transform: `scale(${this.state.scale})`}}>*/}
          <div className="app-header">
            <div className="page">
              <Switch>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/entertainment-select" component={EntertainmentSelect}/>
                <Route path="/entertainment-view/:id" component={EntertainmentView}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </div>

            <div className="menu">
              <ul className="nav nav-tabs justify-content-center">
                <li className="nav-item">
                  <NavLink to="/dashboard" className="nav-link" activeClassName="active">Dashboard</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/entertainment-select" className="nav-link" activeClassName="active">Entertainment Select</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/entertainment-view" className="nav-link" activeClassName="active">Entertainment View</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
