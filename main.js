const mainbox = document.querySelector('.mainbox');
const inputs = document.querySelectorAll('.custom-input');

const update = () => inputs.forEach((input) => input.checked = mainbox.checked);

mainbox.addEventListener('input',update,false);
