/* Estos comentarios con nombres seran borrados, es para que cada una trabaje en su parte sin pisarse, luego en el merge final movemos bien si no quedaron en orden */
const baseUrl = " https://tp-js-2-api-wjfqxquokl.now.sh";
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

/*Funciones C eliminar*/

/*Funciones D */
