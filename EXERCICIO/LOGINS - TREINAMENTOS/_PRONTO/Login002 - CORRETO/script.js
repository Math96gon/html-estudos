const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link'); // Corrigido aqui
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.iconClose'); // Corrigido o nome da classe para '.iconClose'

if (registerLink) { // Agora a variável está correta
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active'); // Mostra o formulário de registro
    });
}

if (loginLink) {
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active'); // Mostra o formulário de login
    });
}

if (btnPopup) {
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup'); // Abre o modal
    });
}

if (iconClose) {
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup'); // Fecha o modal
    });
}

