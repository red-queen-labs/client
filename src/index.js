import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'normalize.css';

// grab environment variables
dotenv.config();

ReactDOM.render(<App />, document.getElementById('root'));
