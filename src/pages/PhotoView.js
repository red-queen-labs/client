import React, { useRef } from 'react';
import Webcam from 'react-webcam';
import { Container } from '@material-ui/core';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: { exact: 'environment' },
};

const PhotoView = () => {
  const webcamRef = useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  return (
    <Container id="camera">
      <Container maxWidth="md">
        <div style={{ padding: '0', margin: '0' }}>
          <Webcam
            audio={false}
            screenshotFormat="image/webp"
            screenshotQuality={0.7}
            // videoConstraints={videoConstraints}
          />
          <button
            style={{
              height: '45px',
              width: '45px',
              borderRadius: '100%',
              backgroundColor: 'red',
              border: '6px solid #dddddd',
            }}
            onClick={() => capture()}
          ></button>
        </div>
      </Container>
    </Container>
  );
};

export default PhotoView;
