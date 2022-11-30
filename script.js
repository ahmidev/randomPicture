let body = document.querySelector('body');

//affiche d'une image aléatoire
    window.addEventListener('load', ()=>{
        let imgMini = 10;
        let imgMax = 14;
        let image = F_imageAleatoire(imgMini, imgMax);
        body.style.backgroundImage = `url(images/${image}.jpg)` 
    });

//Fonction image aléatoire
    let F_imageAleatoire = (param1, param2) => {
        let aléatoire = Math.round(Math.random()* (param2-param1) + param1);
        return aléatoire
    }