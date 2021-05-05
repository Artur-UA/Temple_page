var changeBg = document.getElementById("bg");
var changeText = document.getElementById("text");

function buttonFirst(){
    changeBg.style.background = "#f8f8f8 url('./img/title_1.png') no-repeat";
}

function buttonTwo(){
    changeBg.style.background =  " #f8f8f8 url('./img/title_2.png') no-repeat";
}

function buttonThree(){
    changeBg.style.background = "#f5f5f5 no-repeat";
}

function changeTitle() {
    changeText.innerHTML = "New text!";
}