
// mon code js//
 
const btn=document.getElementById("button");
document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'envoi...';

   const serviceID = 'default_service';
   const templateID = 'template_p3wowex';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'envoyer un Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'envoyer un Email';
      alert(JSON.stringify(err));
    });
});