//Variables
const resultados=document.querySelector('#resultado')
const selecyear=document.querySelector('#year')
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');


const datosBusqueda = {
    marca : '',
    year: '',
    minimo : '',
    maximo: '',
    puertas: '',
    transmision:'',
    color:''
}

ejecutar();
function ejecutar(){

    //Eventos
    document.addEventListener('DOMContentLoaded',()=>{
        mostrarautos();

        //llenar opciones de años
        llenaryear();
    })

    marca.addEventListener('change', (e)=>{
        datosBusqueda.marca=e.target.value;
    })
    selecyear.addEventListener('change',(e)=>{
        datosBusqueda.year=e.target.value;
    })
    minimo.addEventListener('change',(e)=>{
        datosBusqueda.minimo=e.target.value;
    })
    maximo.addEventListener('change',(e)=>{
        datosBusqueda.maximo=e.target.value;
    })
    puertas.addEventListener('change',(e)=>{
        datosBusqueda.puertas=e.target.value;
    })
    transmision.addEventListener('change',(e)=>{
        datosBusqueda.transmision=e.target.value;
    })
    color.addEventListener('change',(e)=>{
        datosBusqueda.color=e.target.value;
        console.log(datosBusqueda);
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
        selecyear.appendChild(ye);// Agrega las opciones de año al select
        
    }
}
