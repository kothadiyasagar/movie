var s= JSON.parse(localStorage.getItem("sign"));
  console.log(s);

  document.querySelector("#aform").addEventListener("submit", submit);

  var form = document.querySelector("#aform");

  //console.log(form.user.value);
  // form.id.value
  function submit(event) {
    event.preventDefault();

    var email = form.email.value;
    var pass = form.pass.value;
    console.log(email, pass);

    var c=0
    for (var i = 0; i < regdUsers.length; i++) {
      if (s[i].email == email && s[i].pass == pass) {
        alert("login successful.")
        window.location.href = "index.html";
        c++
      }
      } 
       if(c==0) {
        alert("try again")
      
      }
    
  }
