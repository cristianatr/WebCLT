(function(){
    // obteener todos los elemetos con la clasee "question"
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    console.log(titleQuestions)

    // por cada pregunta quiero obtener las preguntas individualmete 
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{

            // calculamos el alto del elemeto 
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');

            // obtener los hijos de questio y agregarle o quitarle 
            question.children[0].classList.toggle('questions__arrow--rotate');

            // si la pregunta esta abierta 
            if(answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();