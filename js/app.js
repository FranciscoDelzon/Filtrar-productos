//Variables
const resultados=document.querySelector('#resultado')

ejecutar();
function ejecutar(){

    //Eventos
    document.addEventListener('DOMContentLoaded',()=>{
        mostrarautos();
    })


}

//Funciones
function mostrarautos(){
    autos.forEach(element => {
        //si colocamos el const fuera del foreach solo generara un elemento.
        const produc=document.createElement('p');
        const {marca,modelo,year,precio}=element;
        produc.textContent=`Marca: ${marca} ${modelo} ${year} precio:${precio}`;

        // lo añadimos a nuestro html
        // el documento seleccionado tiene de hijos a nuestro const creado
        resultados.appendChild(produc);
    });


}
