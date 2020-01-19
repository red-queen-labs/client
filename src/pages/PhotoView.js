import React, { useState, useEffect } from 'react';

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

  const startup = () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');
    const photo = document.getElementById('photo');
    const captureBtn = document.getElementById('captureBtn');

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then(function(stream) {
        video.srcObject = stream;
        video.play();
      })
      .catch(function(err) {
        console.log('An error occurred: ' + err);
      });
  };

  useEffect(() => {}, []);

  return (
    <div id="camera">
      <video id="video">Video stream not available.</video>
      <button id="captureBtn">Take photo</button>

      <canvas id="canvas" style={{ display: 'none' }}></canvas>

      <div class="output">
        <img id="photo" alt="The screen capture will appear in this box." />
      </div>
    </div>
  );
};

export default PhotoView;
