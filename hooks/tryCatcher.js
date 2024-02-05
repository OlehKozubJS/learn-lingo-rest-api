const tryCatcher = (callback) => {
  const newFunction = async (request, response, next) => {
    try {
      await callback(request, response);
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      next();
    }
  };
  return newFunction;
};

module.exports = { tryCatcher };
