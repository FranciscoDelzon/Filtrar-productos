//Variables
const resultados=document.querySelector('#resultado')
const selecyear=document.querySelector('#year')

ejecutar();
function ejecutar(){

    //Eventos
    document.addEventListener('DOMContentLoaded',()=>{
        mostrarautos();

        //llenar opciones de años
        llenaryear();
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


function llenaryear(){
    for (let i = 2021; i > 2010; i--) {
        const ye=document.createElement('option');
        ye.value=i;
        ye.textContent=i;
        selecyear.appendChild(ye);
        
    }
}
