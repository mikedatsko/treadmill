import React from 'react';
import videos from '../mocks/videos';

const EntertainmentView = (props: any) => (
  <div className="entertainment-view">
    <h1>Entertainment View</h1>

    <iframe
      src={videos[props.match.params.id]}
      width={'100%'}
      height={'100%'}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
);

export default EntertainmentView;
