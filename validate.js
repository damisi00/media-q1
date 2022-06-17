const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Get error messages

form.addEventListener("submit", ev => {
    ev.preventDefault();

    checkingValues();
});

function checkingValues() {

    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(firstNameValue === "") {
        setErrFor(firstName, "First Name cannot be empty");
    } else {
        setSuccessFor(firstName);
    }

    if(lastNameValue === "") {
        setErrFor(lastName, "Last Name cannot be empty");
    } else {
        setSuccessFor(lastName);
    }
    if((emailValue === "") || (emailValue.includes("@") === true)) {
        setErrFor(email, "Looks like this is not an email");
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === "") {
        setErrFor(password, "Password cannot be empty");
    } else {
        setSuccessFor(password);
    }
}

function setErrFor(input, msg) {
    const wrapper = input.parentElement;
    const small = wrapper.querySelector("small");
    wrapper.className = "wrapper err";
    small.innerText = msg;
}

function setSuccessFor(input) {
    const wrapper = input.parentElement;
    wrapper.className = "wrapper success";
}