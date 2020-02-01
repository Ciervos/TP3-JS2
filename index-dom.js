

const addNewEmployee = () => {
   let botonAdd= document.querySelector('.wrapper-boton');
   botonAdd.addEventListener('click', () => {
    let modal = document.querySelector('.modal-wrapper');
    modal.setAttribute('style', 'display:block');
   });
}

addNewEmployee();

const cancelModal = () => {

    console.log('98172938172');
    let botonCancel = document.querySelectorAll('.boton-cancel');
    botonCancel.forEach(boton => {
        boton.addEventListener('click', () => {
            let modal = document.querySelector('.modal-wrapper');
            console.log(boton);
            modal.setAttribute('style', 'display:none');
        });
    })
    
}
cancelModal();

