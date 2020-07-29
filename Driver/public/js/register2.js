
auth.onAuthStateChanged(user => {
var registerForm2 = document.querySelector('#contactform2');
registerForm2.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    var address = registerForm2['registerInputAddress'].value
    var city = registerForm2['registerInputCity'].value
    var state = registerForm2['registerInputState'].value
    var zipcode = registerForm2['registerInputZipcode'].value

    db.collection('drivers').doc(user.uid).set({
        location: {
            address: address,
            city: city,
            state: state,
            zipcode: zipcode,
        }
    })
    .then(function () {
        window.location.href = "create-account3.html";
        registerForm2.querySelector('.error').innerHTML = '';
    }).catch(err => {        
        registerForm2.querySelector('.error').innerHTML = err.message;
    })
})
})