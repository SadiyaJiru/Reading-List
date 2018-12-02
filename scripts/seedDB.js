const mongoose = require("mongoose");
const db = require("../models");

// This file empties the googlebookss collection and inserts the googlebookss below
//Populate MongoDB with dummie data 
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

//Development Data/ Collection of books
const googlebooksSeed = [
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    synopsis: "The story is set against a backdrop of tumultuous events, from the fall of Afghanistan's monarchy through the Soviet military intervention, the exodus of refugees to Pakistan and the United States, and the rise of the Taliban regime.",
    date: new Date(Date.now())
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    synopsis:
"Warm, wise, and revelatory, Becoming is the deeply personal reckoning of a woman of soul and substance who has steadily defied expectations—and whose story inspires us to do the same",
    date: new Date(Date.now())
  },  
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    date: new Date(Date.now())

  
  }, {
    title: "Black Privledge",
    author: "C tha God",
    date: new Date(Date.now())

  
  },
];

//Drop whatever is in the database and then reinsert all of the googlebookss one at a time using the InsertMany method
db.googlebooks
  .remove({})
  .then(() => db.googlebooks.collection.insertMany(googlebooksSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
