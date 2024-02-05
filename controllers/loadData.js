const { loadFromFile } = require("../hooks");

const loadData = async (request, response) => {
  const { language, level, price } = await request.query;
  const teachersString = await loadFromFile("teachers");
  const teachers = await JSON.parse(teachersString);
  const filteredTeachers = await teachers.filter(
    (teacher) =>
      (language === "any language" || teacher.languages.includes(language)) &&
      (level === "any level" || teacher.levels.includes(level)) &&
      (price === "any price" ||
        (Number(teacher.price_per_hour) >= Number(price.split(" ")[1]) &&
          Number(teacher.price_per_hour) < Number(price.split(" ")[3])))
  );
  await response.json(filteredTeachers);
};

module.exports = { loadData };
