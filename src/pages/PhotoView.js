import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';

const PhotoView = () => {
  const [viewState, setViewState] = useState({
    height: 320,
    width: 0,
    streaming: false,
    video: null,
    canves: null,
    photo: null,
    startButton: null,
  });

  useEffect(() => {}, []);

  return (
    <div id="camera">
      <Webcam />
    </div>
  );
};

export default PhotoView;
