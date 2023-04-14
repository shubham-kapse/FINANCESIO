const firebaseConfig = {
    apiKey: "AIzaSyAiJisLpflqsVRJ3GsZisMcn2ICJTa-iE8",
    authDomain: "financesio-b174c.firebaseapp.com",
    databaseURL: "https://financesio-b174c-default-rtdb.firebaseio.com",
    projectId: "financesio-b174c",
    storageBucket: "financesio-b174c.appspot.com",
    messagingSenderId: "678821784577",
    appId: "1:678821784577:web:b6d7caa220d184dd196400"
  };

  firebase.initializeApp(firebaseConfig);

 var signupFormDB = firebase.database().ref('signupForm');

 document.getElementById('signupForm').addEventListener('submit', submitForm);

 function submitForm(e){
    e.preventDefault();

    var username = getElementVal('username');
    var email    = getElementVal('email');
    var password = getElementVal('password');

    saveMessages(username, email, password);

    document.querySelector('.alert').style.display = 'block';

    setTimeout( () => {
        document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('signupForm').reset()

 }

 const saveMessages = (username, email, password) => {
    var newSignupForm = signupFormDB.push();

    newSignupForm.set({
        username : username,
        email : email,
        password : password
    })

 }

 const getElementVal = (id) => {
    return document.getElementById(id).value; 
 }

 