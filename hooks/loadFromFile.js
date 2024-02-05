const { readFile } = require("fs/promises");
const { resolve } = require("path");

const loadFromFile = async (fileName) => {
  const filePath = resolve("db", `${fileName}.txt`);
  const data = await readFile(filePath, "utf-8");
  return data;
};

module.exports = { loadFromFile };
