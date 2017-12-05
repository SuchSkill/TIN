"use strict";

function validateForm(age, email, w) {

    if (isNaN(age.value)) {
        age.style.backgroundColor = "red";
        return false;
    } else {
        age.style.backgroundColor = "white";
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    if (!re.test(email.value)) {
        email.style.backgroundColor = "red";
        return false;
    } else {
        email.style.backgroundColor = "white";
    }
    return true;

}