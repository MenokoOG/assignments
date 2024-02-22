document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('user_name'); // Replace 'your_user_id' with your actual EmailJS user ID
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Assuming your submit button has an id of 'send'
    const btn = document.getElementById('submit');
    // btn.value = 'Sending...'; // Change button text or disable it

    const serviceID = 'service_fuxcqip';
    const templateID = 'template_mdeygdr';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});
