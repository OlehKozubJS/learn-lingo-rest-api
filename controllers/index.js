const { tryCatcher } = require("../hooks/tryCatcher");

const { addToStatistics } = require("./addToStatistics");
const { saveData } = require("./saveData");
const { loadData } = require("./loadData");
const { removeData } = require("./removeData");
const { applicationRun } = require("./applicationRun");
const { test } = require("./test");

module.exports = {
  addToStatistics: tryCatcher(addToStatistics),
  loadData: tryCatcher(loadData),
  saveData: tryCatcher(saveData),
  removeData: tryCatcher(removeData),
  applicationRun,
  test,
};
