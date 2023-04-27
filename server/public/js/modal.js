const modal = document.querySelector('.modal');
const openModal = document.querySelector('#modal-open');
const modalClose = document.querySelector('.modal-close');

openModal.addEventListener('click', () => {
    modal.dataset.active = true;
});

modalClose.addEventListener('click', () => {
    modal.dataset.active = false;
});