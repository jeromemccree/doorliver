const registerForm = document.querySelector('#contactform');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    // const name = registerForm['registerInputName'].value
    const email = registerForm['registerInputEmail'].value
    const password = registerForm['registerInputPassword'].value

    // sign up user
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {

            auth.currentUser.updateProfile({
                displayName: registerForm['registerInputName'].value
            }).then(response => {
                
            window.location.href = "shopping_cart.html";

            })
            // console.log  (registerForm['registerInputName'].value)
            // registerForm.querySelector('.error').innerHTML = '';     
        }).catch(err => {
            registerForm.querySelector('.error').innerHTML = err.message;
        })


})
