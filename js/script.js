let link = document.querySelector('.brown-button__list');
let popup = document.querySelector('.form-search');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
});
