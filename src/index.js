import printMe from "./print";

import _ from "lodash";

import "./style.css";

import pusheen from "./pusheen.jpg";

import myName from "./myName";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");
  btn.textContent = "Click me and then check the console.";
  btn.onclick = printMe;
  const cat = new Image();
  cat.src = pusheen;
  cat.classList.add("icon");

  element.appendChild(cat);
  element.appendChild(btn);


  return element;
}

document.body.appendChild(component());

console.log(myName("Jordan"))
