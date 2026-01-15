import library from "./library.js";
import catalog from "./catalog.js";
import book from "./book.js";
import member from "./member.js";
import loan from "./loan.js";

console.log("library", library.name, library.activeLoanType);
console.log("catalog", catalog.name, catalog.featuredTitle);
console.log("book", book.title, book.homeLibrary);
console.log("member", member.name, member.currentLoanType);
console.log("loan", loan.type, loan.borrower);
