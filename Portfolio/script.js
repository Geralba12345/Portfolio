let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList = "";
        menuVisible = false
    }else{
        document.getElementById("nav").classList = "responsive";
        menuVisible = true
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false
}

function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("htmlcss");
        habilidades[1].classList.add("javascript");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("node");
        habilidades[4].classList.add("basededatos");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoequipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("iniciativa");
        habilidades[9].classList.add("adaptabilidad");
    }
}


window.onscroll = function(){
    efectoHabilidades()
}