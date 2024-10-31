import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import './style.css';

// Aplicacion
export let categoriaActiva = null;
export const setCategoriaActiva = (categoriaIn) => {
    categoriaActiva = categoriaIn;
}

export let productoActivo = null;
export const setProductoActivo = (productoIn) => {
    productoActivo = productoIn;
}

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
export const openModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'flex';

    if (productoActivo) {
        const nombre = document.getElementById('nombre'),
        precio = document.getElementById('precio'),
        img = document.getElementById('img'),
        categoria = document.getElementById('categoria');
        nombre.value = productoActivo.nombre;
        img.value = productoActivo.img;
        precio.value = productoActivo.precio;
        categoria.value = productoActivo.categoria;
    }
}

export const closeModal = () => {
    const modal = document.getElementById('modalPopUp');
    modal.style.display = 'none';
    setProductoActivo(null);

    resetModal();
}

const resetModal = () => {

    const nombre = document.getElementById('nombre'),
    precio = document.getElementById('precio'),
    img = document.getElementById('img'),
    categoria = document.getElementById('categoria');
    nombre.value = "";
    img.value = "";
    precio.value = 0;
    categoria.value = "Seleccione una categoria";
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
    let object = null;     

    if (productoActivo) {
        object = {
            ...productoActivo,
            nombre, 
            precio, 
            img, 
            categoria
        }
    } else {
        object = {
            id: new Date().toISOString(),
            nombre, 
            precio, 
            img, 
            categoria
        }
    }   

    setInLocalStorage(object);

    handleGetProductsToStore();
    closeModal();
    
};