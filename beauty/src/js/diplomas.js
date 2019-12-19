$(document).ready(function() {

  document.re
  let diploma = ''
  for (let i = 0; i < 62; i++) {
    console.log(i);
    diploma += `
        <a class="diploma-item" href="./assets/img/diplomas/modal/${i}.jpg" data-fancybox="">
          <img class="w-100" src="./assets/img/diplomas/${i}.jpg" alt="diploma"/>
        </a>
      `;
  }
  document.querySelector('.diploma-slider').innerHTML = diploma

});
