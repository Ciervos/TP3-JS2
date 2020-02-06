
/* Estos comentarios con nombres seran borrados, es para que cada una trabaje en su parte sin pisarse, luego en el merge final movemos bien si no quedaron en orden */
const baseUrl = "https://tp-js-2-api-wjfqxquokl.now.sh/users";
let lista = [];
let todo = {
    fullname :"",
    email: "",
    address: "",
    phone: ""
};
const handleError = err =>{
    alert(`Hubo un error. ${err}`);
};

/*Funciones A */
const createTodo = async (fullname, email, address, phone) => {
   
    try {
        let data = {
            fullname,
            email,
            address,
            phone,
        }
        const res = await axios.post(baseUrl, data);
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
            showTodo();
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


/* validar campos llenos */

/*Funciones C eliminar*/
const deleteTodo = async (id, callback) => {
    try {
        const res = await axios.delete(`${baseUrl}/:${id}`);
        const index = lista.findIndex(todo => {
            return todo.id == id;
        })
        lista.splice(index, 1);
        callback();
        
    } catch (err) {
        handleError(err)
    }
 }


getLista();

/* Funciones D Modificar */

const editTodo = async (id,fullname, email, address, phone) => {
    
    const todo = {
        fullname,
        email,
        address,
        phone
    }
    try{
        const res= await axios.put(`${baseUrl}/${id}`,todo)
        lista = res.data     

    }catch(err){
        handleError(err)
    }
}