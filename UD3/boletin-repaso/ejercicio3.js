//Vamos a realizar un validador de contraseñas.
//Para ello se muestra en el formulario un campo
//texto que recibe una pwd y valida que cumpla lo
//siguiente:
//1. Tenga mayúsculas y minúsculas
//2. Tenga valores numéricos
//3. Extensión mínima 8
//4. Contenga los siguientes caract. esp: @#.

//AMPLIACIÓN: Transcurridos cinco segundos, que se 
//elimine el mensaje de error.
const expReg = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@.?])[A-Za-z\d#@.?]{8,}$";

function validate(){
    let pass = document.getElementById("pass").value;
    let regExp = new RegExp(expReg);

    if(regExp.test(pass)){
        console.log("OK");
    }else{
        let textoError = document.getElementById("error");

        textoError.innerText = "La contraseña no es segura";

        setTimeout(() => {
            textoError.innerText = '';  // Limpiar el mensaje de error
        }, 5000);
    }

}