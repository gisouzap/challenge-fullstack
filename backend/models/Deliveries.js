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
    route: String,
    number_street: Number,
    subpremise: String,
    political: String,
    administrative_area_level_2: String,
    administrative_area_level_2: String,
    country: String,
    geolocation: {
      lat: Number,
      lng: Number,
    },
  },
});

const Deliveries = mongoose.model('Deliveries', DeliveriesSchema);

module.exports = Deliveries;
