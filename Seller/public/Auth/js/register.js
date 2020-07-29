var registerForm = document.querySelector('#contactform');

function submitData(event) {
    event.preventDefault();
    // get user info
    var name = registerForm['registerInputName'].value
    var email = registerForm['registerInputEmail'].value
    var password = registerForm['registerInputPassword'].value

    // sign up user
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            auth.currentUser.updateProfile({
                displayName: name
            }).then(function () {

                window.location.href = "create-account2.html";
            })

        }).catch(err => {
            registerForm.querySelector('.error').innerHTML = err.message;
        })


}