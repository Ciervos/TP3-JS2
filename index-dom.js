/*Generar la tabla y lista en html */
const showTodo = () => {
    const tbody = document.querySelector('.tabla-contenido');
    for(let todo of lista) {
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
        span.className = 'content-icons';
        const i = document.createElement('i');
        i.className = 'fas fa-pencil-alt pencil';

        i.addEventListener('click', () => {
          modalEditar(todo);
        });
         
        span.appendChild(i);
        const tacho= document.createElement('i');
        tacho.className = 'fas fa-trash-alt tacho';
        span.appendChild(tacho);

        tacho.addEventListener('click', () => {
            tbody.textContent = '';
            deleteTodo(deleteid, () => {
              showTodo();
            });
          });
    
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

/*Fin de generar tabla */

/*Boton de header y agregar un nuevo empleado */
const addBoton = document.querySelector('#todo-create');

addBoton.addEventListener("click", async () => {
  const fullname = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const address = document.querySelector('#address').value;
  const phone = document.querySelector('#phone').value;
  const tbody = document.querySelector('.tabla-contenido');
  tbody.textContent = '';
  await createTodo(fullname, email, address, phone);
  showTodo();
});

const addNewEmployee = () => {
  
    let botonAdd= document.querySelector('.wrapper-boton');
    botonAdd.addEventListener('click', () => {
    
     let modal = document.querySelector('.modal-wrapper');
     modal.setAttribute('style', 'display:flex');
    
    });
 }

 addNewEmployee();
 /* Fin de agregar empleado */
 
  /* Desaparecer modal */
 const cancelModal = () => {
     let botonCancel = document.querySelectorAll('.boton-cancel');
     botonCancel.forEach(boton => {
         boton.addEventListener('click', () => {
             let modal = document.querySelector('.modal-wrapper');
             modal.setAttribute('style', 'display:none');
         });
     })
     
 }
 cancelModal();
  /* Fin de desaparecer modal */

  /* Confirmacion de eliminacion modal */

 /* Fin de eliminacion modal */


/* Editar modal  */


/* Fin de editar modal */


 /* Filtro y busqueda */  
const filtrar = () =>{
    let q = document.querySelector("#input-filtro").value; 
    getBuscar(q);
}

let botonBuscar = document.querySelector("#boton-filtro");
botonBuscar.addEventListener("click", filtrar);
  /* Fin de filtro y busqueda */ 