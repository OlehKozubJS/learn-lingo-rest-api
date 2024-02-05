const { loadFromFile, saveToFile } = require("../hooks");

const removeData = async (request, response) => {
  const oldData = await loadFromFile("data");
  const oldDataArray = oldData.split("\n");
  const { params } = await request;
  const { id } = await params;
  let newDataArray = [...oldDataArray];
  newDataArray.splice(id, 1);
  const newData = newDataArray.join("\n");
  await saveToFile("data", newData);
  await response.send(newData);
};

module.exports = { removeData };
