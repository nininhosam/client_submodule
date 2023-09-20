let changeBtn = document.querySelector("input#changeTest")
let textTest = document.querySelector("h1#textTest")
changeBtn.addEventListener("click", ()=>{
  textTest.innerText = textTest.innerHTML+"+1";
})