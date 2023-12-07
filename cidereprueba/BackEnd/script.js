document.addEventListener('DOMContentLoaded', function () {
  // Espera a que se cargue completamente el DOM antes de ejecutar el código

  // Encuentra el botón y agrega un evento de clic
  var extraerTextoBtn = document.getElementById('extraerTextoBtn');
  if (extraerTextoBtn) {
    extraerTextoBtn.addEventListener('click', function () {
      extraerTexto();
    });
  }

  // Función para extraer texto del PDF
  async function extraerTexto() {
    const inputElement = document.getElementById('pdfFile');
    const file = inputElement.files[0];

    if (file) {
      const pdfData = await leerPDF(file);

      // Lógica de extracción de texto
      const palabrasClave = {
        'Domicilio': 'SERENA',
        'Nombre del emisor:': '− 1',
        'Actividades Económicas': 'P.'
        // Agrega más palabras clave según sea necesario
      };

      let resultadoFinal = '';

      for (const palabra in palabrasClave) {
        const index = pdfData.indexOf(palabra);

        if (index !== -1) {
          const fin = pdfData.indexOf(palabrasClave[palabra], index);

          if (fin !== -1) {
            const textoExtraido = pdfData.substring(index, fin + palabrasClave[palabra].length);
            resultadoFinal += `${palabrasClave[palabra]}: ${textoExtraido}\n\n`;
          }
        }
      }

      // Mostrar el resultado en el elemento con id 'resultadoTexto'
      document.getElementById('resultadoTexto').innerText = resultadoFinal.trim();

      // Emitir un evento personalizado para notificar que la extracción se ha completado
      const eventoExtraccion = new Event('extraccionTextoCompleta');
      document.dispatchEvent(eventoExtraccion);
    } else {
      alert('Por favor, selecciona un archivo PDF.');
    }
  }

  // Función para leer el contenido del PDF
  async function leerPDF(file) {
    const pdfData = await new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = function (e) {
        const arrayBuffer = e.target.result;
        const typedArray = new Uint8Array(arrayBuffer);
        resolve(typedArray);
      };

      reader.readAsArrayBuffer(file);
    });

    const pdfDoc = await pdfjsLib.getDocument(pdfData).promise;
    const numPages = pdfDoc.numPages;
    let textContent = '';

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const pageText = await page.getTextContent();
      const pageStrings = pageText.items.map(item => item.str);

      // Agregar un salto de línea después de cada línea en el texto original
      textContent += pageStrings.join('\n') + '\n';
    }

    return textContent;
  }
});
