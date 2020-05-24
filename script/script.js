/****************************************************
                Variable Globales
 ****************************************************/
const icono = document.querySelector("#icon")
const menu = document.querySelector("#menu")
 
console.log(icono)
console.log(menu)

/****************************************************
                  Eventos
 ****************************************************/

 icono.addEventListener("click", ()=>{

    if(menu.classList.contains("remove__menu")){
        menu.classList.add("show__menu")
        menu.classList.remove("remove__menu")
    }else{
        menu.classList.remove("show__menu")
        menu.classList.add("remove__menu")

    }
     
 })