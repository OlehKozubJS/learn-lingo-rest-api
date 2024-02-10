const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {
  addToStatistics,
  loadData,
  saveData,
  removeData,
  applicationRun,
  test,
} = require("./controllers");

const application = express();

application.use(cors());
application.use(bodyParser.json());
application.use(addToStatistics);

application.post("/save", saveData);
application.get("/test", test);
application.get("/load", loadData);
application.delete("/remove/:id", removeData);

application.listen(
  "olehkozubjs.github.io/learn-lingo-rest-api",
  applicationRun
);
