/**
 * 
 * Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API,
 * sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
 * 
 */

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowElement = document.querySelector('.row');

axios.get(endpoint)
  .then(result => {
    const dataArray = result.data;

    addNewImage(rowElement, dataArray);
  });


function addNewImage(rowElement, elements) {
  let elementsToAdd = '';

  elements.forEach(e => {
    elementsToAdd += formatElement(e);
  });

  rowElement.innerHTML = elementsToAdd; 
};
  
function formatElement(element) {
  const { title, date, url } = element;

  return `<div class="col-lg-4 col-md-6 col-sm-12 mb-5">
    <div class="card rounded-0 mb-5">
      <img class="translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
      <img src="${url}" class="card-img-top p-4 pb-0" alt="${title}">
      <div class="card-body p-4">
        <p class="card-text">${date}</p>
      </div>
    </div>
  </div>`
};

// Mi ero dimenticato di pushare o.o