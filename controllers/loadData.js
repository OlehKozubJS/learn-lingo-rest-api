const { loadFromFile } = require("../hooks");

const loadData = async (request, response) => {
  const data = await loadFromFile("teachers");
  await response.send(JSON.stringify(data));
};

module.exports = { loadData };
