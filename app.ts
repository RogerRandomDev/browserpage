"use strict";
var stored:any={};

function loadStored():void{
    var local:string|null=localStorage.getItem("amountUsed");
    if(local!=null){stored=JSON.parse(local)}else{stored={}}
    document.getElementById("github")!.innerHTML+=stored["github"]!=undefined?stored["github"]:'0';
    document.getElementById("itch")!.innerHTML+=stored["itch"]!=undefined?stored["itch"]:'0';
    document.getElementById("youtube")!.innerHTML+=stored["youtube"]!=undefined?stored["youtube"]:'0';
    document.getElementById("portfolio")!.innerHTML+=stored["portfolio"]!=undefined?stored["portfolio"]:'0';
}

function linkTo(url:string,nameof:string):void{
    if(stored[nameof]!=null){stored[nameof]+=1;}else{stored[nameof]=1;};
    localStorage.setItem("amountUsed",JSON.stringify(stored));
    location.href=url
}
setTimeout(loadStored,50);
//audio
var audio = new Audio('song0.mp3');
document.addEventListener("mousedown",func);


function func():void{audio.play();document.removeEventListener('mousedown',func);}