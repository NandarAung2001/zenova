const myButton=document.getElementById("myButton");
myButton.onclick=MyFunction

const MyFunction=()=>{
    console.log("click me to event")
}

myButton.onclick=MyFunction;
myButton.addEventListener("click",MyFunction)