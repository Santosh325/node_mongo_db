const mongoose = require('mongoose')

// connecting node with mongo db and it returs promises.
mongoose.connect("mongodb://localhost:27017/firstDatabase")
.then( () => console.log("conection successfull..."))
.catch((err) => console.log(err));