const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Use async/await and try...catch to handle potential errors
  (async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() < 0.5) {
            resolve();
            res.send('Hello World!');
          } else {
            reject(new Error('Something went wrong!'));
          }
        }, 1000);
      });
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).send('Internal Server Error');
    }
  })();
});
app.listen(3000, () => console.log('Server listening on port 3000'));