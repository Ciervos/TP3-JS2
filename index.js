/* Estos comentarios con nombres seran borrados, es para que cada una trabaje en su parte sin pisarse, luego en el merge final movemos bien si no quedaron en orden */
const baseUrl = " https://tp-js-2-api-wjfqxquokl.now.sh/users";
/*Funciones A */

let lista = [];
let todo = {
    fullname :"",
    email: "",
    address: "",
    phone: ""
};

const handleError = err => {
    alert (`Hubo un error. ${err}`)
}

const getLista = async () => {
    await axios.get(baseUrl)
        .then(res => {
            lista = res.data;
            showTodo();
        })
        .catch(handleError);
};

const createTodo = async (fullname, email, address, phone) => {
   
    try {
        let data = {
            fullname,
            email,
            address,
            phone
        }
        const res = await axios.post(baseUrl, data);
        lista.push(res.data);
        
    } catch (err) {
    handleError(err);
    }
 }

getLista();

const showTodo = () => {
    const tbody = document.querySelector('.tabla-contenido');
    for(let todo of lista) {

        console.log(todo);

        const tr = document.createElement('tr');
        tr.className= 'tabla-contenido-fila';

        const td = document.createElement('td');
        td.className ='tabla-contenido-celda';
        const input =document.createElement('input');
        input.type = 'checkbox';
        td.appendChild(input);

        const td1 = document.createElement('td');
        const spanName = document.createElement('span');
        spanName.textContent = todo.fullname;
        td1.appendChild(spanName);

        const td2 = document.createElement('td');
        const spanEmail = document.createElement('span');
        spanEmail.textContent = todo.email;
        td2.appendChild(spanEmail);

        const td3 = document.createElement('td');
        const spanAddress = document.createElement('span');
        spanAddress.textContent = todo.address;
        td3.appendChild(spanAddress);

        const td4 = document.createElement('td');
        const spanPhone = document.createElement('span');
        spanPhone.textContent = todo.phone;
        td4.appendChild(spanPhone);

        const td5 = document.createElement('td');
        const span = document.createElement('span');
        span.className = 'content-icons'
        const i = document.createElement('i');
        i.className = 'fas fa-pencil-alt pencil';
        span.appendChild(i);
        const i1= document.createElement('i');
        i1.className = 'fas fa-trash-alt tacho';
        span.appendChild(i1);
       
        td5.appendChild(span);
        tr.appendChild(td);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tbody.appendChild(tr);
    }
}

showTodo();