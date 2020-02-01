
/* Estos comentarios con nombres seran borrados, es para que cada una trabaje en su parte sin pisarse, luego en el merge final movemos bien si no quedaron en orden */
const baseUrl = "https://tp-js-2-api-wjfqxquokl.now.sh/users";
let lista = [];
const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

/*Funciones A */

/*Funciones B */
/* accion filtrar */
const getLista = async () => {
    await axios.get(`${baseUrl}`)
        .then(res => {
            lista = res.data;
        })
        .catch(handleError);
};

const getBuscar = async q => {
    await axios.get(`${baseUrl}/?search=${q}`)
        .then(res => {
            lista = res.data;
        })
        .catch(handleError);
};



const filtrar = () =>{
    let q = document.querySelector("#input-filtro").value; 
    getBuscar(q);
}

let botonBuscar = document.querySelector("#boton-filtro");
botonBuscar.addEventListener("click", filtrar);

/* validar campos llenos */

/*Funciones C */

/*Funciones D */