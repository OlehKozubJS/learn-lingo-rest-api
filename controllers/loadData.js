const { loadFromFile } = require("../hooks");

const loadData = async (request, response) => {
  const data = await loadFromFile("data");
  await response.send(JSON.stringify(data));
};

module.exports = { loadData };
