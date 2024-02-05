const { loadFromFile } = require("../hooks");

const loadData = async (request, response) => {
  const teachersString = await loadFromFile("teachers");
  const teachers = JSON.parse(teachersString);
  await response.json(teachers);
};

module.exports = { loadData };
