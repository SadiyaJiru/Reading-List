var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

var booksSchema = new Schema({
  // `title` is required and of type String
  title: {
    type: String,
    required: true
  },
  Authors: {
    type: String,  },

    description: {
      type: String,
      required: true
    },
    image: {
      type: String,  },

      link: {
      type: String,  }
    

});

// This creates our model from the above schema, using mongoose's model method
var googlebooks = mongoose.model("googlebooks", booksSchema);

// Export the Article model
module.exports = googlebooks;
