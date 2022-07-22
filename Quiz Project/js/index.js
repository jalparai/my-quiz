function submitS(){
  var username=document.getElementById("first_name")
  var lname=document.getElementById("last_name")
  var email=document.getElementById("email")
  var password=document.getElementById("password")
  if(username.value===""){
  alert("Enter your First Name")
 }
 
else if(lname.value===""){
  alert("Enter your Last Name")
 }

else if(email.value===""){
  alert("Enter your Password")
}
else if(password.value===""){
  alert("Enter your Password")
}

else{
  firebase.auth().createUserWithEmailAndPassword(email.value,password.value)
    .then((userCredential) => {
      userCredential.user.sendEmailVerification()
      // Signed in 
      var user = userCredential.user;   
      
  // document.getElementById("email").value=""
  // document.getElementById("password").value=""
  // document.getElementById("first_name").value=""
  // document.getElementById("last_name").value=""
       window.location.assign("./pages/quizstart.html") 

    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
         
    firebase.database().ref('post/').push({
      fname: username.value,
      lname:lname.value,
      email:email.value,
      password:password.value

    

    });
   
alert("signup successesfully")
// document.getElementById("email").value=""
//  document.getElementById("password").value=""
  }

  }










const login = () => window.location.href="./pages/login.html"          
const sign = () => window.location.href="./index.html"     
const sign2 = () => window.location.href="../index.html"     
const login_2 = () => window.location.href="../pages/login.html" 
const submitLogin = () =>window.location.href="./quizstart.html" 
const quiz = () =>window.location.href="quiz.html"  
const sign_2 = () => window.location.href="../index.html"  