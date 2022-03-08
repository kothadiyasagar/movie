// // document.querySelector("#from").addEventListener("submit", myFormSubmit);
document.querySelector("#from").addEventListener("submit",sa)

var s = JSON.parse(localStorage.getItem("sign")) || [];
function sa() {
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
