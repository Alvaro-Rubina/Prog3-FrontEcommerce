import { productoActivo } from "../../main";
import { handleGetProductLocalStorage ,setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal";
import { handleGetProductsToStore, handleRenderList } from "../views/store";
import Swal from "sweetalert2";

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
        };
    }   
    Swal.fire({
        title: "Hecho!",
        text: "El producto se ha guardado correctamente",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
    
};

// Eliminar producto
export const handleDeleteProduct = () => {

    Swal.fire({
        title: "¿Estás seguro de eliminar este producto?",
        text: "No podrás revertir esta acción!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "El producto ha sido eliminado.",
            icon: "success"
          });

          const products = handleGetProductLocalStorage();
          const result = products.filter((el) => el.id !== productoActivo.id);
          localStorage.setItem('products', JSON.stringify(result));
          const newProducts = handleGetProductLocalStorage();
          handleRenderList(newProducts);
          closeModal();
        } else {
            closeModal();
        }
      });

    
};