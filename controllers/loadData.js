const { loadFromFile } = require("../hooks");

const loadData = async (request, response) => {
  const teachers = await loadFromFile("teachers");
  await response.json(teachers);
};

module.exports = { loadData };
