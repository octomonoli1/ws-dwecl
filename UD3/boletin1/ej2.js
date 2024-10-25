function validar_datos() {
    var expRegMail = new RegExp("[0-9][a-z][A-Z]");
    var mail = document.getElementById("email");
    alert(expRegMail.test(mail.value));
}
