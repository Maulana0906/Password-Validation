const input = document.getElementById("input");
let validation = document.querySelector(".validation");
let btn = document.querySelector("button");


input.addEventListener("keyup", (e) => {
  let list = document.querySelectorAll("ul li");
  let icon = document.querySelectorAll("i");
  let value = e.target.value;

  validation.style.height = value ? "290px" : "";
  input.nextElementSibling.style.display = value ? "block" : "none";
  list[0].parentElement.style.display = value ? "block" : "none";

  const validations = [
    { regex: /[0-9]/},
    { regex: /[A-Z]/},
    { regex: /[!@#\$%\^&\*\(\)<>\/\\\|{}\[\]\-_=+.,]/ },
    { regex: /.{8,}/ }
  ];
  validations.forEach((e,i) => {
    if(e.regex.test(value)){  
      list[i].classList.add('succes');
      icon[i].classList.add('succesIcon');
      icon[i].classList.replace("bi-asterisk", "bi-check2");
    } else {
      list[i].classList.remove('succes');
      icon[i].classList.remove('succesIcon');
      icon[i].classList.replace("bi-check2", "bi-asterisk");
    }
  })
  let succesBtn = 0;
  Array.from(icon).forEach(e => {
    if(e.classList.contains('succesIcon')){
      succesBtn +=1 ; 
    }
  })
  succesBtn == '4' ? btn.style.opacity = "100%" : btn.style.opacity = "40%"
  succesBtn == '4' ? btn.style.cursor = "pointer" : btn.style.cursor = "no-drop"

});
