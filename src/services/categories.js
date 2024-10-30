// vista de las categorias
export const renderCategories = ()=> {
    // Se toman los elementos de la lista
    const ulList = document.getElementById('listFilter');

    // Se crea la lista de categorias
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas Fritas</li>
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