const library = require("./library");
const catalog = require("./catalog");
const book = require("./book");
const member = require("./member");
const loan = require("./loan");

console.log("library", library.name, library.activeLoanType);
console.log("catalog", catalog.name, catalog.featuredTitle);
console.log("book", book.title, book.homeLibrary);
console.log("member", member.name, member.currentLoanType);
console.log("loan", loan.type, loan.borrower);
