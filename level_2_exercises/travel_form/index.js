// index.js

const handleSubmit = (event) => {
    event.preventDefault();

    const form = document.forms['travelForm'];

    const firstName = form.elements['firstName'].value;
    const lastName = form.elements['lastName'].value;
    const age = form.elements['age'].value;
    const gender = form.elements['gender'].value;
    const location = form.elements['location'].value;
    const specialDiet = [...form.elements['specialDiet']].filter(checkbox => checkbox.checked).map(checkbox => checkbox.value).join(', ');

    const message = `First Name: ${firstName}\nLast Name: ${lastName}\nAge: ${age}\nGender: ${gender}\nLocation: ${location}\nSpecial Diets: ${specialDiet}`;

    alert(message);
};
