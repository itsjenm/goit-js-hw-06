//write a scrip to manage the login form 

//1. form submission form.login-form must be processed on the submit event
const form = document.querySelector('.login-form');

form.addEventListener("submit", handleSubmit);

//2. the page must not reload when the form is submitted 
function handleSubmit(event) {
    event.preventDefault();
//As soon as the user has filled in all the fields and submitted the form, collect the field values into an object 
//where the field name will be the property name and the field value will be the 
//property value. Use the elements property to access form elements
    const {
        elements: {
            email,
            password
        }
    } = event.currentTarget;

    const formData = {
        email: email.value,
        password: password.value,
    }
        
//If the form has empty fields, display alert saying that all fields must be filled in
    if (email.value === "" ||  email.value === "") {
        return alert('Please fill in all fields!');
    } else if (password.value === "" || password.value === "" ) {
        return alert("Please fill in all fields!");
    }


// Display the object with the entered data in the console and clear the values 
//of the form field using the reset method. 
    console.log(formData);
    event.currentTarget.reset();
}
