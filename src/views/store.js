import { handleGetProductLocalStorage } from "../persistence/localstorage";

export const handleGetProductsToStore = () => {
    const products = handleGetProductLocalStorage();

    handleRenderList(products);
};

export const handleRenderList = (productsIn) => {

    const burgers = productsIn.filter((el) => el.categoria === 'Hamburguesas');
    const papasFritas = productsIn.filter((el) => el.categoria === 'Papas Fritas');
    const bebidas = productsIn.filter((el) => el.categoria === 'Bebidas');

    const renderProductGroup = (products, title) => {
        console.log(products);
        if (products.length > 0) {
            const productsHTML = products.map((product, index) => {
                return `<div id='product-${product.categoria}-${index}'>
                <div> 
                    <img src=${product.img}/>
                    <div> 
                        <h2>${product.nombre}</h2>
                    </div>
                    <div> 
                        <p><b>Precio: </b> ${product.precio}</p>
                        <p><b>Categoria: </b> ${product.categoria}</p>
                    </div>
                </div> 
            </div>`
            });

            return `
            <section> 
                <h3>${title}</h3>
                <div> 
                    ${productsHTML.join('')}
                </div>
            </section>`
        } else {
            return "";
        }
    };

    // Renderizar los productos en sus categorias
    const appContainer = document.getElementById('storeContainer');
    appContainer.innerHTML = `
        ${renderProductGroup(burgers, 'Hamburguesas')}
        ${renderProductGroup(papasFritas, 'Papas Fritas')}
        ${renderProductGroup(bebidas, 'Bebidas')}`;

        const addEvents = (productsIn) => {
            if (productsIn) {
                productsIn.forEach((element, index) => {
                    const productContainer = document.getElementById(
                        `product-${element.categoria}-${index}`);
                    productContainer.addEventListener('click', () => {
                        console.log('productoActivo', element);
                    });
                    
                });
            }
        };

        addEvents(burgers);
        addEvents(papasFritas);
        addEvents(bebidas);
};