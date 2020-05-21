require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log('MongoDB connection succeeded');
    } else {
      console.log('Error while connecting MongoDB:' + JSON.stringify(err));
    }
  }
);
