// ==========================
// BIRTHDAY DATE
// ==========================

const birthday =
new Date("june 25, 2026 0:00:00").getTime();


// ==========================
// COUNTDOWN
// ==========================

const countdownElement =
document.getElementById("countdown");

if(countdownElement){

setInterval(()=>{

const now =
new Date().getTime();

const distance =
birthday - now;

const days =
Math.floor(distance/(1000*60*60*24));

const hours =
Math.floor(
(distance%(1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(distance%(1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(distance%(1000*60))
/
1000
);

countdownElement.innerHTML =
`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

},1000);

}


// ==========================
// MUSIC
// ==========================

const music =
document.getElementById("music");

function toggleMusic(){

if(!music) return;

if(music.paused){

music.play();

document.querySelector(".music-btn")
.innerHTML =
"⏸ Pause Music";

}
else{

music.pause();

document.querySelector(".music-btn")
.innerHTML =
"🎵 Play Music";

}

}


// ==========================
// FLOATING HEARTS
// ==========================

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
Math.random()*100 + "vw";

heart.style.fontSize =
(Math.random()*20+15)+"px";

heart.style.animationDuration =
(Math.random()*4+5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},9000);

}

setInterval(createHeart,500);


// ==========================
// QUIZ ALERTS
// ==========================

function showMessage(message){

alert(message);

}


// ==========================
// RUNAWAY BUTTON
// ==========================

function moveButton(button){

button.style.position="relative";

button.style.left =
(Math.random()*200-100)+"px";

button.style.top =
(Math.random()*50-25)+"px";

}


// ==========================
// CONFETTI
// ==========================

function celebrate(){

confetti({

particleCount:250,

spread:180,

origin:{
y:0.6
}

});

setTimeout(()=>{

alert(
"🎉 HAPPY BIRTHDAY ❤️\n\nYou successfully completed our Love Quiz Mama! 😂❤️"
);

},500);

}