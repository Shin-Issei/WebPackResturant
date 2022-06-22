// Commit ourselves to the spirit of the assignment.
import './style.css';
import contactTab from './Contact';
import HomeTab from './home';

window.onload = () =>{
main.append(HomeTab());
}

const HomeBtn = document.createElement("button");
HomeBtn.textContent = "Home";
HomeBtn.addEventListener("click", () => {
  clearMain();
  const Home = HomeTab();
  main.append(Home);
});
const ContactBtn = document.createElement("button");
ContactBtn.textContent = "Contact";
ContactBtn.addEventListener("click", () => {
  clearMain();
  const contact = contactTab();
  main.append(contact);
  
});

const main = document.createElement("div"); // Append all function results to main
main.classList.add("main");
const Tabs = document.createElement("div"); //
Tabs.classList.add("tabs");


document.body.appendChild(main);
document.body.appendChild(Tabs);
Tabs.appendChild(HomeBtn);
Tabs.appendChild(ContactBtn);

function clearMain(){
  while(main.firstChild){
    main.removeChild(main.firstChild);
  }
}