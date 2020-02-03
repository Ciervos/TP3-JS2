
/* Estos comentarios con nombres seran borrados, es para que cada una trabaje en su parte sin pisarse, luego en el merge final movemos bien si no quedaron en orden */

const baseUrl = "https://tp-js-2-api-wjfqxquokl.now.sh/users";
let lista = [];
const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

/*Funciones A */

let lista = [];
let todo = {
    name,
    email,
    address,
    phone,
};

const handleError = err => {
    alert (`Hubo un error. ${err}`)
}

const createTodo = async (name, email, address, phone) => {
    try {
        let data = {
            name,
            email,
            address,
            phone,   
        }
        const res = await axios.post(baseUrl, data);
        console.log(res)
        lista.push(res.data);
        
    } catch (err) {
        handleError(err);
    }
}
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

/*Funciones C eliminar*/

/*Funciones D */
