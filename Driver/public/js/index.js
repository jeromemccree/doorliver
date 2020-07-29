
//   make auth and firestore refrences 
auth.onAuthStateChanged(user => {
    if (user) {
        console.log  ("user logged in", user)
        setupUI(user);
    } else {
        setupUI();
        console.log  ("user logged out")

    }
})
const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

const setupUI = (user) => {
    if (user){
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none')
    } else{
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block')
}

}


const logout = document.querySelector("#logout1");
logout.addEventListener('click', (e) => {

    auth.signOut().then(() =>{
        window.location.reload();
        console.log  ('user signout');
    }).catch(function(error) {
        // An error happened.
        console.log  (error)
    });
});

const logoutMobile = document.querySelector("#logout2");
logout.addEventListener('click', (e) => {

    auth.signOut().then(() =>{
        window.location.reload();
        console.log  ('user signout');
    }).catch(function(error) {
        // An error happened.
        console.log  (error)
    });
});