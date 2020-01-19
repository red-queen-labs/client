import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import axios from 'axios';
import { Container } from '@material-ui/core';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: { exact: 'environment' },
};

const PhotoView = () => {
  const [camIsOn, setCamIsOn] = useState(false);
  const [photoData, setPhotoData] = useState({
    coords: {
      lat: '',
      lon: '',
    },
    image: '',
  });
  const webcamRef = useRef(null);

  const captureImg = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
  }, [webcamRef]);

  const getCoords = () => {};

  const sendDataToCloud = async () => {
    const res = axios.post();
  };

  const runAll = async () => {
    captureImg();
    await getCoords();
    await sendDataToCloud();
  };

  return (
    <Container id="camera">
      <Container maxWidth="md">
        <div style={{ padding: '0', margin: '0' }}>
          <Webcam
            audio={false}
            screenshotFormat="image/png"
            screenshotQuality={0.7}
            // videoConstraints={videoConstraints}
            ref={webcamRef}
            onUserMedia={() => setCamIsOn(true)}
            onUserMediaError={() => setCamIsOn(false)}
          />
          {camIsOn && (
            <button
              style={{
                position: 'absolute',
                zIndex: '5',
                bottom: '20px',
                margin: '0 auto',
                height: '45px',
                width: '45px',
                borderRadius: '100%',
                backgroundColor: 'red',
                border: '6px solid #dddddd',
              }}
              onClick={() => runAll()}
            />
          )}
        </div>
      </Container>
    </Container>
  );
};

export default PhotoView;
