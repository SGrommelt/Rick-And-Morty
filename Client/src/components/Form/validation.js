export default function validation(input) {
    
    const error = {};

    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Insert a valid email";
    }
    if(!input.email) {
        error.email = "Email field is required";
    }
    if(input.email.length > 35) {
        error.email = "Email must be less than 35 characters"
    }
    if(!regexPassword.test(input.password)) {
        error.password = "Password must include a number";
    }
    if(input.password.length < 6 || input.password.length > 10) {
        error.password = "Password must have beetween 6 and 10 characters"
    }
    return error;
}