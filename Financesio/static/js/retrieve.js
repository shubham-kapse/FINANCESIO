const firebaseConfig = {
    apiKey: "AIzaSyBRvSPIaQ_H3vwSsGU08qIg-hXIH3oCmUI",
    authDomain: "addform-cbc36.firebaseapp.com",
    databaseURL: "https://addform-cbc36-default-rtdb.firebaseio.com",
    projectId: "addform-cbc36",
    storageBucket: "addform-cbc36.appspot.com",
    messagingSenderId: "137787639014",
    appId: "1:137787639014:web:218e41055ef34e4aa36727"
  };
  firebase.initializeApp(firebaseConfig);
  var firebaseRef = firebase.database().ref("addForm");
  firebaseRef.once("value",function(snapshot){
    var data = snapshot.val();
    for(let i in data){
        console.log(data[i]);
    }
  })