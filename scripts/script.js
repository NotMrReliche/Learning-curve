const btn = document.getElementById("form");
const greeting = "Welcome to my website"
const html = document.onblur

btn.addEventListener('click', function(){
    const nameElement = document.getElementById("name");
    const name = nameElement.value;
    alert ("Hello " + name + ".   " + greeting);
});