const loginForm = document.querySelector('#customer_login');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info 
    const email = document.getElementById('loginInputEmail').value
    const password = document.getElementById('loginInputPassword').value


    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginForm.querySelector('.error').innerHTML ='' ;
        window.location.href = "shopping_cart.html";

    }).catch(err =>{
        loginForm.querySelector('.error').innerHTML = err.message;
        
    })

})