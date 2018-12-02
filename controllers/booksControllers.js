//Require the database
const db = require("../models");

//The controllers is going to be interacting with the DB,
//Route Callbacks seperated into their own libraries
// Defining methods for this file
module.exports = {
  //req & res are the callbacks for the routes
  findAll: function(req, res) {
    db.googlebooks
     //find all googlebookss and sort descending order of date added
     .find(req.query)
     .sort({ date: -1 })
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
  },
  //Find googlebookss by the ID
  findById: function(req, res) {
    db.googlebooks
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //
  create: function(req, res) {
    db.googlebooks
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.googlebooks
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.googlebooks
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};