var registerForm = document.querySelector('#contactform');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    var name = registerForm['registerInputName'].value
    var email = registerForm['registerInputEmail'].value
    var password = registerForm['registerInputPassword'].value

    // sign up user
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            console.log  (name)
            auth.currentUser.updateProfile({
                displayName: name
            })
            window.location.href = "create-account2.html";
            registerForm.querySelector('.error').innerHTML = '';     
        }).catch(err => {
            registerForm.querySelector('.error').innerHTML = err.message;
        })


})
