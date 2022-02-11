const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');


formulario.addEventListener('submit', async(e) => {
    e.preventDefault();

// escribir filas de la tabla en el local storage 
    try{
        
        const respuesta =  await fetch("https://sheet.best/api/sheets/3f556fae-05c0-4621-aca1-c4f770b375a5", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "Nombre": formulario.nombre.value,
                "Correo": formulario.correo.value,
                "Telefono": formulario.telefono.value,
            })
        });

        const contenido = await respuesta.json();
        console.log(contenido);
    } catch(error){
        console.log(error);
    }

    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});