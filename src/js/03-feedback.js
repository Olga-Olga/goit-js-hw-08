

import throttle from "lodash.throttle"
const formElements = document.querySelector(".feedback-form")
// console.dir(formElements);
// console.dir(formElements.elements.email);
// console.dir(formElements.elements.message);


const storageObj = JSON.parse(localStorage.getItem("feedback-form-state")) ? JSON.parse(localStorage.getItem("feedback-form-state")) : {}
console.log("Что в сторедже?", storageObj);

console.log(Boolean(storageObj));

if (storageObj) {
    console.log("mi-mi-mi всегда тру");
}

function populetedText() {
   // if (storageObj) {
        for (const key in storageObj) {
            console.log("KEY в цикле обёекта, что распарсили из стореджа: ", key);
            console.log("Значение ключа storageObj[key]: ", storageObj[key]);          
            console.log("Tекст формы перед пересыванием: ", formElements.elements[key].textContent);
            console.log("Валью формы перед пересыванием: ", formElements.elements[key].value); 
            formElements.elements[key].value = storageObj[key]
            formElements.elements[key].textContent = storageObj[key]
          console.log("текст формы Текст конетент после пересывания", formElements.elements[key].textContent);
          console.log("текст формы Валью после пересывания", formElements.elements[key].value);
           }
  //  }
}
populetedText();

formElements.addEventListener("input", throttle(callbackStorageHandler, 500))
function callbackStorageHandler(event) {
    storageObj[event.target.name] = event.target.value;  
    localStorage.setItem("feedback-form-state", JSON.stringify(storageObj))
    console.log(event.target.name , storageObj[event.target.name]);
    console.log("Весь сторедж как JSON:", localStorage.getItem("feedback-form-state"));
}



formElements.addEventListener("submit", event => {
    event.preventDefault()
    console.log("сабмит?");
    localStorage.setItem("feedback-form-state", "")
    formElements.reset()
}
)


