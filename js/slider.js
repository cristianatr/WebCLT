(function(){
    // Slider
    const sliders = [...document.querySelectorAll('.testimony__body')];
    /* contante para el boton next  */
    const buttonNext = document.querySelector('#next');
    // contante para el boton anterior
    const buttonBefore = document.querySelector('#before');
    let value;   

    // cada vez que se haga click en el boton next dara +1
    buttonNext.addEventListener('click', ()=>{
        // cambian la posion
        changePosition(1);
    });
    // cada vez que se haga click en el boton anterior dara -1
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        // creamos un a cte por seleccionar el slider id
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        // convertimos a numero 
        value = Number(currentTestimony);
        value+= add;


        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');


        // si el valor es mayor a 3 entonces se vuelve a 1
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        //accedemos al slider que se va a mostrar y obtener sus clases y agregarles la clase show
        sliders[value-1].classList.add('testimony__body--show');

    }

})();