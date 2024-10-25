function validar_datos(){
    let expReg = /[0-9]/;
    let expRegMail = new RegExp("[0-9]");

    let mail = document.getElementById("email") as HTMLInputElement;

    alert(expRegMail.test(mail.value));
}
