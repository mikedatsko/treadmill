import React from 'react';
import classnames from 'classnames';

class Dashboard extends React.Component {
  state = {
    duration: 0,
    duration_countdown: 10000,
    calories: 0,
    speed: 0,
    grade: 0,
    heart_rate: 0,
    pace: 0,
    distance: 0,
    interval: 500,
    intervalInstance: undefined,
    isRunning: false,
    isFinished: true,
  };

  training = () => {
    const durationCountdown = this.state.duration_countdown - this.state.interval;

    if (durationCountdown <= 0) {
      this.stopTraining();
    }

    this.setState({
      duration: this.state.duration + this.state.interval,
      duration_countdown: this.state.duration_countdown - this.state.interval,
      calories: Math.round(this.state.calories + 0.66),
      speed: Math.floor(Math.random() * 20 + 10),
      grade: Math.round(this.state.grade + 0.1),
      heart_rate: Math.floor(Math.random() * 120 + 10),
      pace: Math.round(this.state.pace + 12.42),
      distance: Math.round(this.state.distance + 1.2),
    });
  };

  startTraining = async () => {
    if (this.state.isRunning) {
      return;
    }

    if (this.state.isFinished) {
      await this.resetState();
    }

    this.setState({
      intervalInstance: setInterval(this.training, this.state.interval),
      isRunning: true,
      isFinished: false,
    });
  };

  pauseTraining = () => {
    if (!this.state.isRunning) {
      return;
    }

    clearInterval(this.state.intervalInstance);
    this.setState({
      intervalInstance: undefined,
      isRunning: false,
      isFinished: false,
    });
  };

  stopTraining = () => {
    if (!this.state.isRunning && this.state.isFinished) {
      return;
    }

    clearInterval(this.state.intervalInstance);
    this.setState({
      intervalInstance: undefined,
      isRunning: false,
      isFinished: true,
    });
  };

  resetState = () => {
    return new Promise(res => {
      this.setState({
        duration: 0,
        duration_countdown: 10000,
        calories: 0,
        speed: 0,
        grade: 0,
        heart_rate: 0,
        pace: 0,
        distance: 0,
      }, () => res());
    });
  };

  componentDidMount() {

  }

  render() {
    const {
      duration,
      duration_countdown,
      calories,
      speed,
      grade,
      heart_rate,
      pace,
      distance,
      isRunning,
      isFinished,
    } = this.state;

    return (
      <div className="dashboard">
        <div className={classnames('card', {success: isFinished})} style={{width: '18rem'}}>
          <div className="card-body">
            <h2 className="card-title">{distance}km</h2>
            <h5 className="card-title text-left">Training time: {duration}s</h5>
            <h5 className="card-title text-left">Time left: {duration_countdown}s</h5>
            <p className="card-text text-left">Calories: {calories}cal</p>
            <p className="card-text text-left">Speed: {speed}km/h</p>
            <p className="card-text text-left">Grade: {grade}</p>
            <p className="card-text text-left">Heart rate: {heart_rate}beats per minute</p>
            <p className="card-text text-left">Pace: {pace}</p>
            <span className={classnames('btn', 'btn-primary', {disabled: isRunning})} onClick={this.startTraining}>Start</span>
            <span className={classnames('btn', 'btn-warning', {disabled: !isRunning})} onClick={this.pauseTraining}>Pause</span>
            <span className={classnames('btn', 'btn-danger', {disabled: !isRunning && isFinished})} onClick={this.stopTraining}>Stop</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
