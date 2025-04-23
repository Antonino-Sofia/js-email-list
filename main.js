console.log("Aloha");
/*Descrizione
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

const emailsElement = document.getElementById("emails");
const generateEmailsElement = document.getElementById("generate-emails");
const url = "https://flynn.boolean.careers/exercises/api/random/mail";
const emailsNumber = 10;

//FETCH

generateEmailsElement();
generateEmailsElement.addEventListener("click", generateEmails);

function generateEmails() {
  emailsElement.innerHTML = "";
  for (let i = 0; i < emailsNumber; i++) {
    fetch(uri)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { response: email } = data;
        emailsElement.innerHTML += `<li>${email}</li>`;
      });
  }
}
