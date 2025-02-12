let colores = ["red","green","blue","brown","yellow"];
let id = 0;
window.onload = () => {

    let task = Array.from(document.getElementsByClassName("task"));

    task.forEach(element => {
        let num = Math.floor(Math.random() * colores.length);
        element.style.backgroundColor = colores[num];
        id++;
        element.id = id;
    });

    task.forEach(element => {
        element.addEventListener("dragstart", event =>{
            //Añadimos el id del div de la tarea al 
            event.dataTransfer.setData('text/plain', element.id);
        })
    });

    let columns = Array.from(document.getElementsByClassName("caja"));

    columns.forEach(element => {

        element.addEventListener("dragover", event=>{
            //Necesario para poder hacer la transicción desde el dragstart hasta el drop
            event.preventDefault();
        });

        element.addEventListener("drop", event=>{
            //Necesario para evitar el comportamiento por defecto de abrir en nueva ventana
            const taskId = event.dataTransfer.getData('text/plain');
            const task = document.getElementById(taskId);
            element.appendChild(task);
        });
    });

}