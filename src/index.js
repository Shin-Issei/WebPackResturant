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
