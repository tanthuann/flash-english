const fabric = require("@umijs/fabric");

module.exports = {
  ...fabric.prettier,
  singleQuote: false,
  trailingComma: "none"
};
