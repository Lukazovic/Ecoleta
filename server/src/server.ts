import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  return res.json({
    user: {
      name: 'Lucas',
      age: 23,
    },
  });
});

app.listen(3333, () => {
  console.log('Server is running on port:', 3333);
});
