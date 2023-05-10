// Obtener elementos HTML relevantes
const formulario = document.querySelector('#formularioCarga');
const galeria = document.querySelector('#galeria ul');

// Agregar evento de envío de formulario
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Prevenir el envío del formulario

  // Obtener las imágenes seleccionadas
  const imagenes = formulario.imagenes.files;
  const numImagenes = imagenes.length;

  // Obtener la descripción de las imágenes
  const descripcion = formulario.descripcion.value;

  // Recorrer las imágenes seleccionadas y crear los elementos de lista
  for (let i = 0; i < numImagenes; i++) {
    const imagen = imagenes[i];

    // Crear elemento de lista con imagen y descripción
    const li = document.createElement('li');
    const img = document.createElement('img');
    const pDescripcion = document.createElement('p');
    const pFecha = document.createElement('p');

    img.src = URL.createObjectURL(imagen);
    img.alt = `Imagen ${galeria.children.length + 1}`;
    pDescripcion.textContent = descripcion;
    pFecha.textContent = `Cargada el ${new Date().toLocaleString()}`;

    li.appendChild(img);
    li.appendChild(pDescripcion);
    li.appendChild(pFecha);

    galeria.appendChild(li);
  }
  // Limpiar los campos del formulario
  formulario.reset();
});