const express = require('express');

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.get('/login', (req, res) => {
    res.set({ 'content-type': 'application/json;charset=utf-8' })
    res.send({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c' });
});
