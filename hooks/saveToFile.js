const { writeFile } = require("fs/promises");
const { resolve } = require("path");

const saveToFile = async (fileName, data) => {
  const filePath = resolve("db", `${fileName}.txt`);
  await writeFile(filePath, data);
};

module.exports = { saveToFile };
