const catalog = require("./catalog");
const loan = require("./loan");

module.exports = {
  name: "Central Library",
  catalogName: catalog.name,
  activeLoanType: loan.type
};
