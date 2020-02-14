// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyD7hhl6Ws0NVpcWAcaKqOF12mclM3EViCA",
    authDomain: "contact-form-2a792.firebaseapp.com",
    databaseURL: "https://contact-form-2a792.firebaseio.com",
    projectId: "contact-form-2a792",
    storageBucket: "contact-form-2a792.appspot.com",
    messagingSenderId: "331808921796",
  };

  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, lastname, email, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, lastname, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      lastname:lastname,
      email:email,
      message:message
    });
  }
  