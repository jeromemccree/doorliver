
auth.onAuthStateChanged(user => {
var registerForm3 = document.querySelector('#contactform3');
registerForm3.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    var phone = registerForm3['registerInputPhone'].value
    var experience = registerForm3['registerInputEx'].value
    var hearAbout = registerForm3['registerInputAboutUs'].value
    var why = registerForm3['registerInputWhy'].value

    db.collection('drivers').doc(user.uid).set({
        phone: phone,
        questions: {
            experience: experience,
            referred: hearAbout,
            why: why
        }
    },{ merge: true })
    
    .then(function () {
        window.location.href = "connect.html";
        registerForm3.querySelector('.error').innerHTML = '';
    }).catch(err => {        
        registerForm3.querySelector('.error').innerHTML = err.message;
    })
})
})
