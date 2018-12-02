const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  // `title` is required and of type String
  title: {
    required: true,
    type: String,
  },
  Authors: {
    required: true,
    type: String,  },

    synopsis: {
      type: String,
    },
    date: {type: Date, default: Date.now}

});

// This creates our model from the above schema, using mongoose's model method
const googlebooks = mongoose.model("googlebooks", booksSchema);

// Export the Article model
module.exports = googlebooks;
