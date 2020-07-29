var user;
auth.onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        this.user = firebaseUser;
    } else {
        this.user = null;
    }
});

function submitData(event) {
    event.preventDefault();


    var registerForm3 = document.querySelector('#contactform3');

    // get user info
    var storeName = registerForm3['registerInputStore'].value
    var phone = registerForm3['registerInputPhone'].value
    var productsSelling = registerForm3['registerInputSelling'].value
    var why = registerForm3['registerInputWhy'].value

    db.collection('stores').doc(user.uid).set({
            store: storeName,
            phone: phone,
            questions: {
                selling: productsSelling,
                why: why
            }
        }, {
            merge: true
        })

        .then(function () {
            registerForm3.querySelector('.error').innerHTML = '';
            window.location.href="https://connect.stripe.com/express/oauth/authorize?redirect_uri=https://firebase.google.com/docs/firestore/manage-data/add-data&client_id=ca_FI6JWO2tZTIXbI1XCNU3Z8U0LS0hOZVe&state={STATE_VALUE}&stripe_user[email]=user@example.com"
        }).catch(err => {
            registerForm3.querySelector('.error').innerHTML = err.message;
        })

}
