const nameId = "name";
const surnameId = "surname";

function save_cookie(){
    let name = document.getElementById(nameId).value;
    let surname = document.getElementById(surnameId).value;

    document.cookie = nameId + "=" + name;
    document.cookie = surnameId + "=" + surname;
}

window.onload = () =>{
    let cookieValues = document.cookie.split(";");
    for(let i = 0; i < cookieValues.length; i++){
        let cookieItem = cookieValues[i].trim();
        if(cookieItem.indexOf(nameId) == 0){
            let name = cookieItem.split("=")[1];
            document.getElementById(nameId).value = name;
        }else if(cookieItem.indexOf(surnameId) == 0){
            let surname = cookieItem.split("=")[1];
            document.getElementById(surnameId).value = surname;
        }
    }
}