let thisH1 = document.getElementsByTagName("h1")[0];
let timer = setInterval(showTime,500);
function showTime(){
    
    thisH1.innerHTML= Math.floor(Math.random()*10.5);
}

