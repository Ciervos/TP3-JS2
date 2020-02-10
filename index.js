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
      phone
    };
    const res = await axios.post(baseUrl, data);
    lista.push(res.data);
  } catch (err) {
    handleError(err);
  }
};

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
            const tbody = document.querySelector('.tabla-contenido');
            tbody.textContent = '';
            showTodo();
        })
        .catch(handleError);
};

/* validar campos llenos */
/* Nombre (Máximo 50 carácteres)
Dirección (Máximo 60 carácteres)
Telefono (Solo números, espacios y/o guiones medios. Validar el formato utilizando expresiones regulares)
Email (Validar el formato utilizando expresiones regulares)
 */
const formatoMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const formatoTel = /^\d{4}-\d{4}$/;
const validarCampos = (fullname, email, address, phone) =>{
    if(fullname.length==0 || fullname.length>=50){
      
        alert("Nombre ingresado no válido. Máx: 50 cáracteres");
        throw "Error en nombre ingresado"
    }else if(address.length<=0 || address.length>=60){
        alert("Dirección ingresado no válido. Máx: 60 cáracteres");
        throw "Error en dirección ingresado" 
    }

    if(!email.match(formatoMail)){
      alert("Mail inválido");
      throw "Error en mail ingresado";
    }

    if(!phone.match(formatoTel)){
      alert("Tel inválido, Formato esperado: XXXX-XXXX");
      throw "Error en telefono ingresado. Formato esperado: XXXX-XXXX"     
    }
} 

/*Funciones C eliminar*/
const deleteTodo = async (id, callback) => {
  try {
    const res = await axios.delete(`${baseUrl}/${id}`);
    const index = lista.findIndex(todo => {
      return todo.id == id;
    });
    lista.splice(index, 1);
    callback();
  } catch (err) {
    handleError(err);
  }
};

/* Funciones de Modificar */

const editTodo = async (id, fullname, email, address, phone) => {
    
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
getLista();