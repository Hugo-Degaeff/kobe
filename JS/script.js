document.querySelector(".hamburger").addEventListener("click", slide);
document.querySelector(".croix").addEventListener("click", slide);

function slide(){
    document.querySelector(".menu").classList.toggle("descend");
}



document.querySelector(".container").addEventListener("mousewheel", roule);

let i = 0;
/***Bloque le depalcement a gauche*/
let selection = document.querySelector(".galerie");
let bloquer = selection.getBoundingClientRect().x;

let image = document.querySelector(".photo").scrollWidth;


let a = 0;


function roule(event){
    let x = selection.getBoundingClientRect().x;    /**Position x de la galerie */

    let select = document.querySelectorAll(".stop").forEach(e=>{
        let position = e.getBoundingClientRect();
        let taille = window.innerWidth - position.x - image;

    if(event.deltaY>0 && taille<0){
        i = i-30;
        selection.style.transform = "translateX("+i+"px)";
    }

    if(event.deltaY<0 && x<bloquer){
        i = i+30;
        selection.style.transform = "translateX("+i+"px)";
    }
})

}