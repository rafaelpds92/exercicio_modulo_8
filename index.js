const form = document.getElementById('contactForm');
const contactsTable = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();

    
    if (!name || !phone) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const newRow = contactsTable.insertRow();
    newRow.insertCell(0).textContent = name;
    newRow.insertCell(1).textContent = phone;

    form.reset();
});
