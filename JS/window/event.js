function sayHello(){
    alert('Hello!!!!!');
}
let buttonEle = document.getElementById('click button');
buttonEle.onclick = function(){
    alert("hello!! Welcome to events");
}
function pEle(){
let newEle = document.createElement('p');
newEle.textContent = 'this is p tag';
document.body.appendChild(newEle);
}
let eventListener = document.getElementById('alertHi');
eventListener.addEventListener('click', function(){
    alert('welcome to event listener');
});
let h1Element = document.createElement('h1');
function showText(){
    let inputElement = document.getElementById('show data');
    console.log(inputElement.value);
    h1Element.textContent = inputElement.value;
   document.body.appendChild(h1Element);
}
   