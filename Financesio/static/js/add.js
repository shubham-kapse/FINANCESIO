const firebaseConfig = {
    apiKey: "AIzaSyBRvSPIaQ_H3vwSsGU08qIg-hXIH3oCmUI",
    authDomain: "addform-cbc36.firebaseapp.com",
    databaseURL: "https://addform-cbc36-default-rtdb.firebaseio.com",
    projectId: "addform-cbc36",
    storageBucket: "addform-cbc36.appspot.com",
    messagingSenderId: "137787639014",
    appId: "1:137787639014:web:218e41055ef34e4aa36727"
  };

// firebase init
  firebase.initializeApp(firebaseConfig);

  var addFormDB = firebase.database().ref('addForm');

  document.getElementById('addForm').addEventListener('submit', submitForm)

  function submitForm(e){
    e.preventDefault();

    var date = getElementVal('date');
    var expensename = getElementVal('expensename');
    var amount = getElementVal('amount');
    var paymode = getElementVal('paymode');
    var category = getElementVal('category');

    console.log(date, expensename, amount, paymode, category);

    saveMessages(date, expensename, amount, paymode, category);

// enable alert
    document.querySelector('.alert').style.display = 'block';

// disable alert

    setTimeout( () => {
        document.querySelector('.alert').style.display = 'none';
    },3000);

// reset alert

    document.getElementById('addForm').reset()

  }

  const saveMessages = (date, expensename, amount, paymode, category) => {
    var newAddForm = addFormDB.push();

    newAddForm.set({
        date : date,
        expensename : expensename,
        amount : amount,
        paymode : paymode,
        category : category
    })
  }


  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
