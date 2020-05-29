const mongoose = require('mongoose');

const DeliveriesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  address: {
    street: String,
    street_number: Number,
    complement: String,
    neighbourhood: String,
    city: String,
    state: String,
    country: String,
    geolocation: {
      lat: Number,
      lng: Number,
    },
  },
});

const Deliveries = mongoose.model('Deliveries', DeliveriesSchema);

module.exports = Deliveries;
