import React, { useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Container } from '@material-ui/core';

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
    <Container id="camera">
      <Container maxWidth="md">
        <div style={{ padding: '0', border: '4px solid red' }}>
          <Webcam />
        </div>
      </Container>
    </Container>
  );
};

export default PhotoView;
