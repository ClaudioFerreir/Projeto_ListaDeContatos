console.log('main.js added');

const form = document.getElementById('form-contact');
const contacts = {};

let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();
  addContact();
  showContacts();
  totalContacts();
});

function addContact() {
  const inputContactName = document.getElementById('name-contact');
  const inputDDDContact = document.getElementById('ddd-contact');
  const inputPhoneContact = document.getElementById('phone-contact');

  if (contacts.hasOwnProperty(inputContactName.value)) {
    alert(`The contact ${inputContactName.value} already exists!`);
  } else {

    contacts[inputContactName.value] = [inputDDDContact.value, inputPhoneContact.value];

    let linha = `<tr>`;
    linha += `<td>${inputContactName.value}</td>`;
    linha += `<td>(${inputDDDContact.value})${inputPhoneContact.value.substring(0,5)}-${inputPhoneContact.value.substring(5,10)}</td>`;
    linha += `</tr>`;

    linhas += linha;
  }

  inputContactName.value = '';
  inputDDDContact.value = '';
  inputPhoneContact.value = '';
}; 

function showContacts() {
  const bodyTable = document.querySelector('tbody');
  bodyTable.innerHTML = linhas;
};

function totalContacts() {
  const total = document.getElementById('total-contacts');
  var totalContacts = Object.keys(contacts).length;
  total.innerHTML = `Total: ${totalContacts}`;
};