import catalog from "./catalog.js";
import loan from "./loan.js";

export default {
  name: "Central Library",
  catalogName: catalog.name,
  activeLoanType: loan.type,
};
