document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'https://api.thecatapi.com/v1/images/search';

  const obtenerNuevoGato = async () => {
      try {
          const respuesta = await fetch(apiUrl);
          const data = await respuesta.json();
          const imagenGato = document.getElementById('imagenGato');
          imagenGato.src = data[0].url;
      } catch (error) {
          console.error('Error al obtener la imagen del gato:', error);
      }
  };

  const botonNuevoGato = document.getElementById('nuevoGato');
  botonNuevoGato.addEventListener('click', obtenerNuevoGato);


  obtenerNuevoGato();
});
