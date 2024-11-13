// consumir animales

import Aguila from "../model/aguila.js";
import Leon from "../model/leon.js";
import Lobo from "../model/lobo.js";
import Oso from "../model/oso.js";
import Serpiente from "../model/serpiente.js";

const consumoAnimales = async () => {
    try {
        const response = await fetch('../../../animales.json');
        if (!response.ok) {
            throw new Error('La ruta no se encuentra disponible');
        }
        const datos = await response.json();
        return datos;
    } catch (error) {
        console.log(error);
        return {};
    }
}

const buscarPorNombre = (nombre, animales = []) => {
    const animalBuscado = animales.find((animal) => {
        return animal.name === nombre;
    });
    return animalBuscado;
}

const renderizarImagen = (id, animal) => {
    const contenedorImagen = document.querySelector(`#${id}`);
    contenedorImagen.innerHTML = `<img class="w-100 h-100" src="./assets/imgs/${animal.imagen}" alt="Imagen de ${animal.name}">`;
}

const capturarDatosForm = () => {
    const animal = document.querySelector('#animal');
    const edad = document.querySelector('#edad');
    const comentarios = document.querySelector('#comentarios');
    return {
        name: animal.value,
        edad: edad.value,
        comentarios: comentarios.value
    }
}

const instanciarAnimales = async () => {
    const datosForm = capturarDatosForm();
    const animalesJson = await consumoAnimales();
    const animalBuscado = buscarPorNombre(datosForm.name, animalesJson.animales);
    let animal;  
    if (datosForm.name == 'Leon') {
        animal = new Leon(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    } else if (datosForm.name === 'Lobo') {
        animal = new Lobo(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    } else if (datosForm.name === 'Serpiente') {
        animal = new Serpiente(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    } else if (datosForm.name === 'Aguila') {
        animal = new Aguila(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    } else {
        animal = new Oso(datosForm.name, datosForm.edad, animalBuscado.imagen, datosForm.comentarios, animalBuscado.sonido);
    }
    return animal;
}

export {
    consumoAnimales,
    buscarPorNombre,
    renderizarImagen,
    capturarDatosForm,
    instanciarAnimales
}