const { loadFromFile, saveToFile } = require("../hooks");

const addToStatistics = async (request, response) => {
  const { url, method } = request;
  const oldStatsData = await loadFromFile("statistics");
  const newStatsData = {
    date: new Date().toString(),
    url: url,
    method: method,
  };
  const newStatsDataString = JSON.stringify(newStatsData);
  await saveToFile("statistics", `${oldStatsData}\n \n${newStatsDataString}`);
};

module.exports = { addToStatistics };
