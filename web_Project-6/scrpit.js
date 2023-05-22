function change(){
    let text=document.getElementById("demo");
    text.innerHTML= "Hello World";
    text.style.marginLeft= "150px";
    text.style.backgroundColor= "red";
}
function enter(){
    let x=document.getElementById("txtbox");
    x.value = x.value.toUpperCase();
    x.style.color= "red";
}
function mouseOver(){
    document.getElementById("box1").style.backgroundColor= "grey";
    document.getElementById("box1").innerHTML = "Release";
}
function mouseOut(){
    document.getElementById("box1").style.backgroundColor= "tomato";
    document.getElementById("box1").innerHTML = "Thank you";
}
function mouseUp(){
    document.getElementById("box2").style.backgroundColor= "purple";
    document.getElementById("box2").innerHTML="Thank you idiot";
}
function mouseDown(){
    document.getElementById("box2").style.backgroundColor= "tomato";
    document.getElementById("box2").innerHTML="Release";
}