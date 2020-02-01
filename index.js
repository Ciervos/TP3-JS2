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

const getTodos = async () => {
    try {
        const res = await axios.get(baseUrl);
        lista = res.data;
        showTodo();

    } catch (err) {
        handleError(err);
    }
 }
/*Funciones B */

/*Funciones C */

/*Funciones D */