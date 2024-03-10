function openModal(button) {
const buttonText = button.textContent;
const modalId = buttonText;

const modal = document.getElementById(modalId);
if (modal) {
modal.style.display = 'block';
setTimeout(() => {
modal.style.opacity = '1';
}, 50); // Delaying to ensure transition starts properly

modal.querySelector('.closer').addEventListener('click', () => {
modal.style.opacity = '0';
setTimeout(() => {
modal.style.display = 'none';
}, 300); // After transition, hide modal
});

window.addEventListener('click', (e) => {
if (e.target === modal) {
modal.style.opacity = '0';
setTimeout(() => {
modal.style.display = 'none';
}, 300); // After transition, hide modal
}
});
}
}

const modalButtons = document.querySelectorAll('.modal-button');
modalButtons.forEach((button) => {
button.addEventListener('click', () => {
openModal(button);
});
});
