function headerComponent(elem){
    const headerEl= document.createElement("div");
    headerEl.innerHTML=`
    <div class="header__container">  
        <img  class= "logo"src="./header/logo.png" alt="">
        <button class="header__button-abrir"><img class="header__button-img" src="./header/list.png"></button>
        <div class="header__menu-container">
            <button class="header__button-cerrar"><img class="header__button-img" src="./header/cerrar.png"></button>
            <ul class="header__menu">
                <li class="header__link"><a href="">Portfolio</a></li>
                <li class="header__link"><a href="">Servicios</a></li>
                <li class="header__link"><a href="">Contacto</a></li>
            </ul>
        </div>
    </div>
`

const botonAbreVentanaEl= headerEl.querySelector(".header__button-abrir");
const botonCierraVentanaEl= headerEl.querySelector(".header__button-cerrar");
const ventana= headerEl.querySelector(".header__menu-container");

botonAbreVentanaEl.addEventListener("click",()=>{
    ventana.style.display = "inherit";
    botonAbreVentanaEl.style.display = "none";
})
botonCierraVentanaEl.addEventListener("click",()=>{
    ventana.style.display = "";
    botonAbreVentanaEl.style.display = "";
})
elem.insertBefore(headerEl, el.firstchild);
};
