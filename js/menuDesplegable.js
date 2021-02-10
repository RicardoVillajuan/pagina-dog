let btnMenu=document.getElementById("btn-bars");
let menuNavegacion=document.getElementById("menu-principal");
btnMenu.addEventListener("click",function(){
    menuNavegacion.classList.toggle("mostrar")
});

// -----------------------Toda la parte del banner scroll

let ubicacionPrincipal=window.pageYOffset;

if(window.innerWidth<=1000){
    document.getElementById('menu-principal').style.transition="1s";
    
    window.onresize=function(){
        anchoVentana=window.innerWidth;
        if(anchoVentana>=1000){
            document.getElementById('banner__logo-principal').style.background='none';
            document.getElementById('banner__logo-inportante').style.background='#000000be';
            window.onscroll=function(){
                let desplazamientoActual=window.pageYOffset;
                    if(ubicacionPrincipal>=desplazamientoActual){
                        document.getElementById('banner__logo-inportante').style.top='0';
                        if(desplazamientoActual==0){
                            document.getElementById('banner__logo-inportante').style.transition='all 0.8s';
                        }
                    }else{
                        document.getElementById('banner__logo-inportante').style.top='-100px';
                    }
                ubicacionPrincipal=desplazamientoActual;
            }
        }else{

        }
    }


    window.onscroll=function(){
        let desplazamientoActual=window.pageYOffset;
            if(ubicacionPrincipal>=desplazamientoActual){
                document.getElementById('banner__logo-principal').style.top='0';
                if(desplazamientoActual==0){
                    document.getElementById('banner__logo-principal').style.transition='all 0.8s';
                }
            }else{
                document.getElementById('banner__logo-principal').style.top='-100px';
            }
        ubicacionPrincipal=desplazamientoActual;
    }
}else{
    // document.getElementById('menu-principal').style.transition="0";

    document.getElementById('banner__logo-principal').style.background='none';
    document.getElementById('banner__logo-inportante').style.background='#000000be';
    
    window.onresize=function(){
        anchoVentana=window.innerWidth;

        if(anchoVentana<=1000){
            document.getElementById('banner__logo-principal').style.background='#000000be';
            window.onscroll=function(){
                let desplazamientoActual=window.pageYOffset;
                    if(ubicacionPrincipal>=desplazamientoActual){
                        document.getElementById('banner__logo-principal').style.top='0';
                        if(desplazamientoActual==0){
                            document.getElementById('banner__logo-principal').style.transition='all 0.8s';
                        }
                    }else{
                        document.getElementById('banner__logo-principal').style.top='-100px';
                    }
                ubicacionPrincipal=desplazamientoActual;
            }
        }else{
            document.getElementById('banner__logo-principal').style.background='none';
            document.getElementById('banner__logo-inportante').style.background='#000000be';
            window.onscroll=function(){
                let desplazamientoActual=window.pageYOffset;
                    if(ubicacionPrincipal>=desplazamientoActual){
                        document.getElementById('banner__logo-inportante').style.top='0';
                        if(desplazamientoActual==0){
                            document.getElementById('banner__logo-inportante').style.transition='all 0.8s';
                        }
                    }else{
                        document.getElementById('banner__logo-inportante').style.top='-100px';
                    }
                ubicacionPrincipal=desplazamientoActual;
            }
        }
    }

    window.onscroll=function(){
        let desplazamientoActual=window.pageYOffset;
            if(ubicacionPrincipal>=desplazamientoActual){
                document.getElementById('banner__logo-inportante').style.top='0';
                if(desplazamientoActual==0){
                    document.getElementById('banner__logo-inportante').style.transition='all 0.8s';
                }
            }else{
                document.getElementById('banner__logo-inportante').style.top='-100px';
            }
        ubicacionPrincipal=desplazamientoActual;
    }
}
