const coloresFondo = ["blue", "red", "green", "yellow", "white"];
let i = 0;



function cambiarColores(){
    const backColor = document.getElementById("backColor");
    const inputText = document.getElementById("colores").value;
    if (inputText !== ""){
        backColor.style.backgroundColor = coloresFondo[i];
        i = (i + 1) % coloresFondo.length;
    }

}