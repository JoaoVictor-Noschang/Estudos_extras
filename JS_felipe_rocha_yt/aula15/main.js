// Criado e validando um Formulário
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subimitButton = document.querySelector('#submit-button');

const errorMessege = document.querySelector('.msg');

const items = document.querySelector('.items');

subimitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;

    if(nameValue === '' || emailValue === '') {
        errorMessege.textContent = 'Please fill out the fields';
        errorMessege.classList = 'error';

        setTimeout(() => {
            errorMessege.textContent = '';
            errorMessege.classList = '';
        }, 3000);
        return;
    }

    const li = document.createElement('li');
    li.classList = 'item';
    li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`;

    items.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
});

