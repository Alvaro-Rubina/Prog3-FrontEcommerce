import { setProductoActivo } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { openModal } from "./modal";

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();

    handleRenderList(products);
};

export const handleRenderList = (productsIn) => {

    const burgers = productsIn.filter((el) => el.categoria === 'Hamburguesas');
    const papasFritas = productsIn.filter((el) => el.categoria === 'Papas');
    const bebidas = productsIn.filter((el) => el.categoria === 'Bebidas');

    const renderProductGroup = (products, title) => {
        
        if (products.length > 0) {
            const productsHTML = products.map((product, index) => {
                return `<div class='containerTargetItem' id='product-${product.categoria}-${index}'>
                            <div> 
                                <img src="${product.img}"/>
                                <div> 
                                    <h2>${product.nombre}</h2>
                                </div>
                                <div class='targetProps'> 
                                    <p><b>Precio: </b> ${product.precio}</p>
                                </div>
                            </div> 
                        </div>`
            });

            return `
            <section class='sectionStore'> 
                <div class='containterTitleSection'>
                <h3>${title}</h3>
                </div>
                <div class='containerProductStore'> 
                    ${productsHTML.join("")}
                </div>
            </section>
            `;
        } else {
            return "";
        }
    };

    // Renderizar los productos en sus categorias
    const appContainer = document.getElementById('storeContainer');
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, 'Hamburguesas')}
        ${renderProductGroup(papasFritas, 'Papas')}
        ${renderProductGroup(bebidas, 'Bebidas')}`;

        const addEvents = (productsIn) => {
            if (productsIn) {
                productsIn.forEach((element, index) => {
                    const productContainer = document.getElementById(
                        `product-${element.categoria}-${index}`);
                    productContainer.addEventListener('click', () => {
                        setProductoActivo(element);
                        openModal();
                    });
                    
                });
            }
        };

        addEvents(burgers);
        addEvents(papasFritas);
        addEvents(bebidas);
};