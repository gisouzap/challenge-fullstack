const express = require('express');
var router = express.Router();
var ObjectID = require('mongoose').Types.ObjectId;

var Deliveries = require('../models/Deliveries');

router.get('/', (req, res) => {
  Deliveries.find((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log(
        'Error while retrieving all records : ' + JSON.stringify(err)
      );
  });
});

router.post('/', (req, res) => {
  const newRecord = new Deliveries({
    name: req.body.name,
    weight: req.body.weight,
    address: req.body.address,
  });

  newRecord.save((err, docs) => {
    if (!err) res.send(docs);
    else
      console.log('Error while creating new record : ' + JSON.stringify(err));
  });
});

router.delete('/', (req, res) => {
  Deliveries.remove({}, (err) => {
    if (err) {
      console.log('Error while removing all records!: ' + JSON.stringify(err));
    }
    console.log('Success on removing all records!');
  });
});

module.exports = router;
