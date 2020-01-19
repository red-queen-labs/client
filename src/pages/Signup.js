import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';

const IndexInit = () => {
  const [formData, setFormData] = useState({
    textString: '',
  });
  const [getRes, setGetRes] = useState(null);
  const { textString } = formData;

  const onChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const submitFormData = e => {
    e.preventDefault();
    const res = axios.post('http://localhost:5000/', {
      body: formData.textString,
    });
    setGetRes(res);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '120px' }}>
      <Typography>Trigger Pipeline</Typography>
      <form onSubmit={e => submitFormData(e)}>
        <TextField
          fullWidth={true}
          variant="outlined"
          id="textString"
          name="textString"
          label="Address"
          margin="normal"
          placeholder="Address"
          type="text"
          value={textString}
          onChange={e => onChange(e)}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          fullWidth={false}
        >
          Send
        </Button>
      </form>

      {getRes && <div>{setGetRes}</div>}
    </Container>
  );
};

export default IndexInit;
