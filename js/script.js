
function krishna() {
    const krishna1 = document.getElementById("imG1")
    const krishna2 = document.getElementById("imG2")
    const krishna3 = document.getElementById("imG3")
    krishna1.src = "./img/krishna.jpeg";
    krishna2.src = "./img/krishna.jpeg";
    krishna3.src = "./img/krishna.jpeg";
}
function mahadev() {
    const mahadev1 = document.getElementById("imG1")
    const mahadev2 = document.getElementById("imG2")
    const mahadev3 = document.getElementById("imG3")
    mahadev1.src = "./img/mahadev.jpg";
    mahadev2.src = "./img/mahadev.jpg";
    mahadev3.src= "./img/mahadev.jpg";

 
}
function ram() {
    const ram1 = document.getElementById("imG1")
    const ram2 = document.getElementById("imG2")
    const ram3 = document.getElementById("imG3")
    ram1.src = "./img/shri ram.jpg";
    ram2.src = "./img/shri ram.jpg";
    ram3.src = "./img/shri ram.jpg";
    
}
function DarkTheme(){
    const darkMain = document.getElementById("BodyId")
    darkMain.classList.remove("body-light")
    darkMain.classList.add("body-dark")

}
function LightTheme(){
    const darkMain = document.getElementById("BodyId")
    darkMain.classList.remove("body-dark")
    darkMain.classList.add("body-light")

}
