const { loadFromFile, saveToFile } = require("../hooks");

const saveData = async (request, response) => {
  const oldData = await loadFromFile("data");
  const { body } = await request;
  const { text } = await body;
  const newData = text ? oldData + "\n" + text : oldData;
  await saveToFile("data", newData);
  await response.send(newData);
};

module.exports = { saveData };
