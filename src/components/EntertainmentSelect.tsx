import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import videos from '../mocks/videos';

class EntertainmentSelect extends React.Component {
  state = {
    videoIndex: -1
  };

  render() {
    return (
      <div>
        <h1>Entertainment Select</h1>

        {this.state.videoIndex > -1
          ? <NavLink className="btn btn-primary" to={'/entertainment-view/' + this.state.videoIndex}>Select</NavLink>
          : null
        }

        <div className="videos-list">
          {videos.map((video, index) => (
            <div
              key={String(index)}
              className={classnames('video', {'video-selected': index === this.state.videoIndex})}
            >
              <iframe src={video} />
              <div className="video-select" onClick={() => this.setState({videoIndex: index})} />
            </div>)
          )}
        </div>
      </div>
    );
  }
}

export default EntertainmentSelect;
