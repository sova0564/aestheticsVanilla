//contacts.html contacts modal

const modal = document.getElementById("modalContacts");
const thanks = document.getElementById("modalThanks");
const btn = document.getElementById("contactsBtn");

btn.onclick = function() {
    modal.style.display = "none";
    thanks.style.display = "block";
}