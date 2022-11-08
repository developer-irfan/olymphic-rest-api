const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/Olymphics", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful"))
  .catch(() => console.log("connection Failed!"));
