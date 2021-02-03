let btnMenu=document.getElementById("btn-bars");
let menuNavegacion=document.getElementById("menu-principal");
btnMenu.addEventListener("click",function(){
    menuNavegacion.classList.toggle("mostrar")
});
let ubicacionPrincipal=window.pageYOffset;
window.onscroll=function(){
    let desplazamientoActual=window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementById('banner__logo-principal').style.top='0';
    }else{
        document.getElementById('banner__logo-principal').style.top='-100px';
    }
    ubicacionPrincipal=desplazamientoActual;
}

