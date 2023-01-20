const express = require('express');
const app = express;

app.get('/', (req, res, next) => {
  try {
    res.send('status good!');
  } catch (error) {
    next(error);
  }
});

const init = async () => {
  try {
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

module.exports = app;
