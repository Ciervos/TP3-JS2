/*Generar la tabla y lista en html */
const showTodo = () => {

    const tbody = document.querySelector('.tabla-contenido');
    tbody.innerHTML = "";
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
      const pencil = document.createElement('i'); 
      pencil.className = 'fas fa-pencil-alt pencil';
      span.appendChild(pencil);

      pencil.addEventListener('click', () => {
        modalEditar(todo);
      });
      
      const tacho = document.createElement("i");
      tacho.className = "fas fa-trash-alt tacho";
      const idInput = document.createElement("input");
      idInput.setAttribute("type", "hidden");
      idInput.value = todo.id;
      tacho.appendChild(idInput);

      span.appendChild(tacho);
      tacho.addEventListener("click", event => {
        window.deleteId = event.currentTarget.children[0].value;
        eliminarEmpleado();
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

/*Boton para activar modal add*/
const addNewEmployee = () => {
  const botonAdd= document.querySelector('.wrapper-boton');
    botonAdd.addEventListener('click', () => {
    
      const title = document.querySelector('.modal-title');
      title.innerHTML = "Add Employee";
      const buttonAdd = document.querySelector('#todo-create');
      buttonAdd.innerHTML = "Add";
      
      document.querySelector('#name').value = "";
      document.querySelector('#email').value = "";
      document.querySelector('#address').value = "";
      document.querySelector('#phone').value = "";
      document.querySelector('#id-edit').value = "";
      let modal = document.querySelector('.modal-wrapper');
      modal.setAttribute('style', 'display:block'); 
    });
  }
   addNewEmployee();
/*fin de boton para activar modal add*/

/*Boton de agregar un nuevo empleado  y de editar los datos del empleado*/
const boton = document.querySelector('#todo-create');
  boton.addEventListener("click", async () => {

    const fullname = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;
    const phone = document.querySelector('#phone').value;
    const tbody = document.querySelector('.tabla-contenido');
    const id = document.querySelector('#id-edit').value;
    tbody.textContent = '';
    if(id === ""){
      await createTodo(fullname, email, address, phone);
    }
    else {
      await editTodo(id, fullname, email, address, phone);
    }
    showTodo();
    eliminar();
});
 /* Fin de agregar o editar los datos del empleado */

  /* Desaparecer modal */
  const modalwrapper = document.querySelector('.modal-wrapper');
  const modaleliminar = document.querySelector("#modal-eliminar");
  
  const botonCancel = document.querySelectorAll('.boton-cancel');
  const eliminar =() => {
    modalwrapper.setAttribute('style', 'display:none');
    modaleliminar.setAttribute('style', 'display:none');
  }
  botonCancel.forEach(boton => {
    boton.addEventListener('click',eliminar);
  })
  /* Fin de desaparecer modal */

/* Confirmacion de eliminacion modal */
const eliminarEmpleado = () => {

  modaleliminar.setAttribute("style", "display:block");
};
const botonEliminar = document.querySelector("#boton-eliminar");
botonEliminar.addEventListener("click", () => {
  deleteTodo(window.deleteId, () => {
    showTodo();
    eliminar();
  });
});
/* Fin de eliminacion modal */

/* Editar modal  */

const modalEditar = (todo) => {
  
  const title = document.querySelector('.modal-title');
  title.innerHTML = "Edit Employee";

  const buttonSave = document.querySelector('#todo-create');
  buttonSave.innerHTML = "Save";
  document.querySelector('#name').value = "";
  document.querySelector('#email').value = "";
  document.querySelector('#address').value = "";
  document.querySelector('#phone').value = "";
  document.querySelector('#id-edit').value = "";
  modalwrapper.setAttribute('style', 'display:block');

  const fullname = document.querySelector('#name');
  const email = document.querySelector('#email');
  const address = document.querySelector('#address');
  const phone = document.querySelector('#phone');
  const id = document.querySelector('#id-edit');
  //esto hace que aparezca en los recuadros para editar
  fullname.value = todo.fullname;
  email.value = todo.email;
  address.value = todo.address;
  phone.value = todo.phone;
  id.value = todo.id;
};
/* Fin de editar modal */

 /* Filtro y busqueda */  
const filtrar = () =>{
    let q = document.querySelector("#input-filtro").value; 
    getBuscar(q);
}

let botonBuscar = document.querySelector("#boton-filtro");
botonBuscar.addEventListener("click", filtrar);
  /* Fin de filtro y busqueda */
