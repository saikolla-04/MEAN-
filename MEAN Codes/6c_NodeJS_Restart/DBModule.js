// DBModule.js
exports.authenticateUser = (username, password) => {
    if (username === "admin" && password === "pwd") {
      return "Valid User";
    } else return "Invalid User";
  };
  