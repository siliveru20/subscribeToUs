const nameEl = document.getElementById("name");
const nameErrMsgEl = document.getElementById("nameErrMsg");
const emailEl = document.getElementById("email");
const emailErrMsgEl = document.getElementById("emailErrMsg");

let errorMsg = "Required*";

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = errorMsg;
    } else {
        nameErrMsgEl.textContent = "";
    }
});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = errorMsg;
    } else {
        emailErrMsgEl.textContent = "";
    }
});