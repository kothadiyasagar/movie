var s= JSON.parse(localStorage.getItem("sign"));
  console.log(s);

    document.querySelector("#afrom").addEventListener("submit", fromdata)
    var form = document.querySelector("#aform")
     function fromdata(event){
      event.preventDefault();
      var email=document.querySelector("#email").value;
      var pass=document.querySelector("#pass").value;
      console.log(pass,email)
       var c=0;
       for(let i=0; i<s.length; i++){
        if (s[i].email == email && s[i].pass == pass) {
                alert("login successful.")
                c++
              window.location.href = "index.html";
               
               }
              } 
                if(c==0) {
                alert("try again")
              
             }
       }
     
  // var form = document.querySelector("#aform").value;
  // console.log(form)

  //console.log(form.user.value);
  // form.id.value
  // function submit(event) {
  //   event.preventDefault();

  //   var email = form.email.value;
  //   var pass = form.pass.value;
  //   console.log(email, pass);

  //   var c=0
  //   for (var i = 0; i < regdUsers.length; i++) {
  //     if (s[i].email == email && s[i].pass == pass) {
  //       alert("login successful.")
  //       window.location.href = "index.html";
  //       c++
  //     }
  //     } 
  //      if(c==0) {
  //       alert("try again")
      
  //     }
    
  // }
