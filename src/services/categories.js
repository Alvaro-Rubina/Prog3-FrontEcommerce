import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../views/store";

//  Categoria
const handleFilterProductsByCategory = (categoryIn) => {
    const products = handleGetProductLocalStorage();

    switch (categoryIn) {
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products);
            break;
        case "Hamburguesas":
        case "Papas":
        case "Bebidas":
            const result = products.filter((el) => el.categoria === categoryIn);
            handleRenderList(result);
        default:
            break;
        case "MayorPrecio":
            const resultMayor = products.sort((a, b) => b.precio - a.precio);
            handleRenderList(resultMayor);
            break;
        case "MenorPrecio":
            const resultMenor = products.sort((a, b) => a.precio - b.precio);
            handleRenderList(resultMenor);
            break;
    }
}



// vista de las categorias
export const renderCategories = ()=> {
    // Se toman los elementos de la lista
    const ulList = document.getElementById('listFilter');

    // Se crea la lista de categorias
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Bebidas">Bebidas</li>
    <li id="MayorPrecio">Mayor Precio</li>
    <li id="MenorPrecio">Menor Precio</li>
    `;
    
    // Se añade el evento click
    const liElements = ulList.querySelectorAll('li');
    liElements.forEach((liElement) => {
        liElement.addEventListener('click', () => {
            handleClick(liElement);
        })
    })

    // Se verifica y maneja el estilo del elemento activo
    const handleClick = (element) => {
        handleFilterProductsByCategory(element.id);
        liElements.forEach((el) => {
            if (el.classList.contains('liActive')) {
                el.classList.remove('liActive');
            } else {
                if (element === el) {
                    el.classList.add('liActive');
                } 
            }
        }) 
    }
}