document.querySelector("#from").addEventListener("submit", myFormSubmit);

var s = JSON.parse(localStorage.getItem("sign")) || [];
function myFormSubmit() {
  event.preventDefault();
  var signupObj = {
    email: document.querySelector("#email").value,
    pass: document.querySelector("#pass").value,
  };
//   localStorage.setItem("sign", JSON.stringify(s));
  
   add(signupObj)
}
  function add(signupObj){
  s.push(signupObj);
  console.log(s);
  localStorage.setItem("sign", JSON.stringify(s));
  window.location.href = "login.html";

  }
