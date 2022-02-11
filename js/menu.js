
/* funcion auto invocada para que no se mesclen con los archivos */
(function(){
    // obteener todos los elemetos con la clasee nav__menu
    const openButton = document.querySelector('.nav__menu');
    // obtnemos los elemtos de la clase nav__link
    const menu = document.querySelector('.nav__link');
    //idem al anterior
    const closeMenu = document.querySelector('.nav__close');

    // agregamos un evento al boton de abrir el menu
    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
    });
    // agregamos un evento al boton de cerrar el menu removiendo la class nav__link--show
    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
    });

    


})();