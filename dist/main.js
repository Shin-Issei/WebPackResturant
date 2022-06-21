/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// Commit ourselves to the spirit of the assignment.

const HomeBtn = document.createElement("button");
const main = document.createElement("div"); // Append all function results to main
main.classList.add("main")

HomeBtn.textContent = "Home";
HomeBtn.addEventListener("click", ()=>{
  main.textContent = "A blurb about how great the resturant is."
});


document.body.appendChild(main);
document.body.appendChild(HomeBtn);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrZGVtby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb21taXQgb3Vyc2VsdmVzIHRvIHRoZSBzcGlyaXQgb2YgdGhlIGFzc2lnbm1lbnQuXG5cbmNvbnN0IEhvbWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7IC8vIEFwcGVuZCBhbGwgZnVuY3Rpb24gcmVzdWx0cyB0byBtYWluXG5tYWluLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpXG5cbkhvbWVCdG4udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbkhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gIG1haW4udGV4dENvbnRlbnQgPSBcIkEgYmx1cmIgYWJvdXQgaG93IGdyZWF0IHRoZSByZXN0dXJhbnQgaXMuXCJcbn0pO1xuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKEhvbWVCdG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9