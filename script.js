/**
 * 
 * Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API,
 * sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
 * 
 */

const endpoint = 'https://lanciweb.github.io/demo/api/pictures/';
const rowElement = document.querySelector('.row');
const overlay = document.getElementById('overlay');
const closeOverlayButton = document.getElementById('close-overlay');
const imgOverlay = document.getElementById('img-overlay');

const request = axios.get(endpoint)
  .then(result => {
    const dataArray = result.data;

    addNewImage(rowElement, dataArray);

    const cards = document.querySelectorAll('.card');

    cards.forEach(e => {
      e.addEventListener('click', function () {
        const img = this.querySelector('img.card-img-top');

        imgOverlay.src = img.src;
        imgOverlay.alt = img.alt;

        overlay.classList.replace('d-none', 'd-flex');
      });
    });
  });


closeOverlayButton.addEventListener('click', function () {
  overlay.classList.replace('d-flex', 'd-none');
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
      <img class="--vq-pin translate-middle start-50" src="img/pin.svg" style="position:absolute;" alt="pin">
      <img src="${url}" class="card-img-top p-4 pb-0" alt="${title}">
      <div class="card-body p-4">
        <p class="card-text-date">${date}</p>
        <p class="card-text-title"><b>${title.toUpperCase()}</b></p>
      </div>
    </div>
  </div>`
};