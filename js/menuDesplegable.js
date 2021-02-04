let btnMenu=document.getElementById("btn-bars");
let menuNavegacion=document.getElementById("menu-principal");
btnMenu.addEventListener("click",function(){
    menuNavegacion.classList.toggle("mostrar")
});
let ubicacionPrincipal=window.pageYOffset;
let banner=document.getElementById("banner__logo-inportante");
window.onscroll=function(){
    let desplazamientoActual=window.pageYOffset;
    if(screen.width<=1000){
        if(ubicacionPrincipal>=desplazamientoActual){
            document.getElementById('banner__logo-principal').style.top='0';
            if(desplazamientoActual==0){
                document.getElementById('banner__logo-principal').style.background='none';
                document.getElementById('banner__logo-principal').style.transition='all 0.8s';
            }
        }else{
            document.getElementById('banner__logo-principal').style.top='-100px';
            document.getElementById('banner__logo-principal').style.background='#000000be';
            
        }
        ubicacionPrincipal=desplazamientoActual;
    }else{
        if(ubicacionPrincipal>=desplazamientoActual){
            document.getElementById('banner__logo-inportante').style.top='0';
            if(desplazamientoActual==0){
                document.getElementById('banner__logo-inportante').style.background='none';
                document.getElementById('banner__logo-inportante').style.transition='all 0.8s';
            }
        }else{
            document.getElementById('banner__logo-inportante').style.top='-100px';
            document.getElementById('banner__logo-inportante').style.background='#000000be';
            
        }
        ubicacionPrincipal=desplazamientoActual;
    }

}

