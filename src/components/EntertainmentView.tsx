import React from 'react';
import videos from '../mocks/videos';

const EntertainmentView = ({ match }) => (
  <div>
    <h1>Entertainment View</h1>

    <iframe
      src={videos[match.params.id]}
      width={'988px'}
      height={'530px'}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
);

export default EntertainmentView;
