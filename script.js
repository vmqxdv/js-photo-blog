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

    console.log(dataArray);
  });