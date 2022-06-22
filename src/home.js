export default function HomeTab(){
  
    const HomeDiv = document.createElement("div");
    const HomePara = document.createElement("p");
  HomePara.textContent = "Our cafe offers coffe and pretty much nothing else. So you know the coffee is going to be great!";
    HomeDiv.appendChild(HomePara);
  return HomeDiv;
  }
  



