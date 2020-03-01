const ESC_KEY_CODE = 27;
const link = document.querySelector('.brown-button__list');
const popup = document.querySelector('.form-search');

link.addEventListener('click', function(evt) {
  evt.preventDefault();
  popup.classList.toggle('modal-show');
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === ESC_KEY_CODE) {

    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});
