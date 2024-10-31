import { closeModal } from "../../main";
import { setInLocalStorage } from "../persistence/localstorage";
import { handleGetProductsToStore } from "../views/store";


// Guardar el producto
const acceptButton = document.getElementById('acceptButton');
acceptButton.addEventListener('click', () => {
    handleSaveOrModifyElements();
});

// Funcion de guardar
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