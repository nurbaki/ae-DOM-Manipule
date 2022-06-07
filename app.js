
const Title = document.querySelector("h1");

Title.style.color="red";
Title.style.textAlign="center";

const foto= document.querySelector("img");

foto.onmouseover=()=>{
    foto.src="img/aslan1.jpeg";
}
foto.onmouseout=()=>{
    foto.src="img/aslan2.jpeg";
}

const baglat = document.querySelector(".btn-outline-primary");

baglat.onclick=()=>{
    foto.src="img/telbagla.gif";
}

const konus = document.querySelector(".btn-outline-danger");

konus.onclick=()=>{
    foto.src="img/telefon.gif";
}

const ara = document.querySelector(".btn-outline-warning");

const sound = document.querySelector(".ses");

ara.onclick=()=>{
    foto.src="img/img.gif";
    sound.load();
    sound.volume=0.2;
    sound.play();
}

foto.onclick=()=>{
    sound.pause();
}


