require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
const DeliveriesControllers = require('./controllers/DeliveriesController');

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));
app.listen(3001, () => console.log('Server started at : 3001'));

app.use('/deliveries', DeliveriesControllers);
