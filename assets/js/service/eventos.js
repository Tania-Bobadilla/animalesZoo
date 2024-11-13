import { buscarPorNombre, consumoAnimales, instanciarAnimales, renderizarImagen } from "./animalesService.js";

const eventoSelectChange = () => {
    const animal = document.querySelector('#animal');
    animal.addEventListener('change', async () => {
        const animales = await consumoAnimales();
        const animalBuscado = buscarPorNombre(animal.value, animales.animales);
        renderizarImagen('preview', animalBuscado);
    });
}

const eventoClickAgregar = () => {
    const btnRegistrar = document.querySelector('#btnRegistrar');
    const arrelgoAnimales = [];
    btnRegistrar.addEventListener('click', async () => {
        let cadena = '';
        const animal = await instanciarAnimales();
        arrelgoAnimales.push(animal);
        const animales = document.querySelector('#Animales');
        arrelgoAnimales.forEach((animalTermporal) => {
            cadena += `<div class="card" style="width: 18rem;">
                                <img class="card-img-top" src="./assets/imgs/${animalTermporal.img}" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                </div>`
        });
        animales.innerHTML = cadena;
    });
}

export{
    eventoSelectChange,
    eventoClickAgregar
}