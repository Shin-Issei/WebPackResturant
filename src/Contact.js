export default function contactTab(){
  
  const contactDiv = document.createElement("div");
  const contactPara = document.createElement("p");
  contactPara.textContent = "Contact us for feedback and catering at 555-10101.";
  contactDiv.appendChild(contactPara);
return contactDiv;
}
