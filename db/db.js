
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("db connected")).catch((err) => { console.log(err) });
