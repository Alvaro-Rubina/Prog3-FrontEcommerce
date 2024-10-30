import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

// Aplicacion
handleGetProductsToStore();

renderCategories();

// Agregar Productos
const buttonAdd = document.getElementById('buttonAddElement');
buttonAdd.addEventListener('click', () => {
    openModal();
});


// Pop up
const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', () => {
    handleCancelButton();
});

const handleCancelButton = () => { 
    closeModal();
};

// Abrir y cerrar modal
const openModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'flex';
}

const closeModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'none';
}

// Guardar o modificar productos

const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = () => {
    const nombre = document.getElementById('nombre').value,
    precio = document.getElementById('precio').value,
    img = document.getElementById('img').value,
    categoria = document.getElementById('categoria').value;

    let object = {
        id: new Date().toISOString(),
        nombre, 
        precio, 
        img, 
        categoria
    }

    setInLocalStorage(object);

    // closeModal();
    
};