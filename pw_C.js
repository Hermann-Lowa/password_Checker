function password_is_right(password) {
    var specialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    var upperCase = /[A-Z]/g;
    var lowerCase = /[a-z]/g;
    var numbers = /[0-9]/g;

        if(password == "") {
            throw new Error("must not be empty");
        }
        else if (password.length < 8) {
            throw new Error("length must be 8 or greater");
        }
        else if(!password.match(specialCharacters)) {
            throw new Error("must contain at least one special character");
        }
        else if(!numbers.test(password)) {
            throw new Error("must contain numbers");
        }
        else if(!password.match(upperCase)) {
            throw new Error("must contain at least one capital letter");
        }
        else if(!password.match(lowerCase)) {
            throw new Error("must contain at least one small letter");
        } 
}

function password_is_good(password) {
    var specialCharacters = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
    var upperCase = /[A-Z]/g;
    var lowerCase = /[a-z]/g;
    var numbers = /[0-9]/g;

        if(password != "" && password.length > 8 && password.match(numbers))
            return console.log("true");
        else
            return console.log("false");
}

password_is_good('Hermann Junior');

module.exports = {
    right:password_is_right, 
    good:password_is_good,
};
