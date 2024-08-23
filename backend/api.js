const express = require("express");
const connectDb = require("./Config/db");
const api = express();
const bodyParser = require("body-parser");


api.use(bodyParser.json());

api.use("/api/Product", require("./Routes/Product.routes"));

api.listen(3000, () => {
  console.log("Server started on port 3000");
  connectDb();
});
