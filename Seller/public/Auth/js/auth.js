const loginForm = document.querySelector('#customer_login');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get user info 
    const email = document.getElementById('loginInputEmail').value
    const password = document.getElementById('loginInputPassword').value

    auth.signInWithEmailAndPassword(email, password).then(cred => {

        window.location.href = "../Dashboard/src/dashboard.html";

    }).catch(err => {
        loginForm.querySelector('.error').innerHTML = err.message;

    })

})