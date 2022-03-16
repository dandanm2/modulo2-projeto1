const elementName = document.getElementById("name");
const elementClass = document.querySelector("#class");
const elementImg = document.querySelector("#hero_pic");

let elementBtn = document.querySelector("#btn_change");

elementBtn.addEventListener("click",  () => {
  if (elementBtn.value == "first_hero") {
    elementName.innerText = "Tracer";
    elementClass.innerText = "Attack";
    elementImg.src = "./img/tracer.png";

    elementBtn.value = "second_hero";
  } else if (elementBtn.value == "second_hero") {
    elementName.innerText = "Pharah";
    elementClass.innerText = "Attack";
    elementImg.src = "./img/pharah.png";
    
    
    elementBtn.value = "third_hero";
  } else if (elementBtn.value == "third_hero") {
    elementName.innerText = "Reinhardt";
    elementClass.innerText = "Deffense";
    elementImg.src = "./img/rein.png";

    elementBtn.value = "fourth_hero";
  }else if (elementBtn.value == "fourth_hero") {
    elementName.innerText = "D.va";
    elementClass.innerText = "Deffense";
    elementImg.src = "./img/d.va.png";

    elementBtn.value = "fifth_hero";
  } else if (elementBtn.value == "fifth_hero") {
    elementName.innerText = "Mercy";
    elementClass.innerText = "Support";
    elementImg.src = "./img/mercy.png";

    elementBtn.value = "sixth_hero";
  }  
  
  else {
    elementName.innerText = "Zenyatta";
    elementClass.innerText = "Support";
    elementImg.src = "./img/zenyatta.png";

    elementBtn.value = "first_hero";
  }
});