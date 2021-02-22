const express = require('express');
const app = express();
const config = require('config');
const mongoose = require('mongoose');

const PORT = config.get('port') || 5000;

app.use('/api/auth', require('./routes/auth.routes'));

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`App has been started at port ${PORT}`));
  } catch (error) {
    console.error('Server works badly because of error ', error.message);
    process.exit(1);  
  };
};
start();