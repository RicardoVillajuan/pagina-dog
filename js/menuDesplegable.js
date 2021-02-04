let btnMenu=document.getElementById("btn-bars");
let menuNavegacion=document.getElementById("menu-principal");
btnMenu.addEventListener("click",function(){
    menuNavegacion.classList.toggle("mostrar")
});

let noneBg=document.getElementById("banner__logo-none");
let ubicacionPrincipal=window.pageYOffset;
// let banner=document.getElementById("banner__logo-principal");
window.onscroll=function(){
    let desplazamientoActual=window.pageYOffset;
    if(ubicacionPrincipal>=desplazamientoActual){
        document.getElementById('banner__logo-principal').style.top='0';
        // if(banner.offsetTop=0){
        //     banner.classList(".banner__logo-none");
        // }
        if(desplazamientoActual==0){
            document.getElementById('banner__logo-principal').style.background='none';
            document.getElementById('banner__logo-principal').style.transition='all 0.8s';
        }
    }else{
        document.getElementById('banner__logo-principal').style.top='-100px';
        document.getElementById('banner__logo-principal').style.background='#000000be';
        
    }
    ubicacionPrincipal=desplazamientoActual;
}

