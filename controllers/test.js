const test = async (request, response) => {
  console.log("Hello! This is test controller!");
  await response.send("<h1>Hello!</h1>");
};

module.exports = { test };
