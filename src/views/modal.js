import { productoActivo, setProductoActivo } from "../../main";

// Pop up
const cancelButton = document.getElementById('cancelButton');
cancelButton.addEventListener('click', () => {
    closeModal();
});

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