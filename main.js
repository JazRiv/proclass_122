x = 0;
y = 0;

draw_apple = "";
apple = "";

screenWidth = 0;
screenHeigth = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "El sistema está escuchando. Por favor, habla.";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 document.getElementById("status").innerHTML = "La voz se reconoció como: " + content; 
 
 to_number = Number(content);
 if (Number.isInteger(to_number)) {
    document.getElementById("status").innerHTML = "Se empezó a dibujar una manzana",
    draw_apple = "set";
    }
    else {
        document.getElementById("status").innerHTML = "No se reconoció un número";
    }
 }


function setup() {
    screenWidth = window.innerWidth;
    screenHeigth = window.innerHeight;
    canvas = createCanvas(screenWidth, screenHeigth -150);
    canvas.position(0, 150);
}

function preload() {
    apple = loadImage("apple.png");
}

function draw() {
  if(draw_apple == "set")
  {
    for (var i = 1; i <= to_number; i++) {
        x = Math.floor(Math.random() * 700);
        y = Math.floor(Math.random() * 400);
        image(apple, x, y, 50, 50);
    }
    speak_data = document.getElementById("status").innerHTML = to_number + " manzanas dibujadas";
    speak();
    draw_apple = "";

  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    utterThis.lang = "es-MX";

    synth.speak(utterThis);
}

/*function hablar(mensaje){
    var leer_en_voz_alta = window.speechSynthesis;
    var lectura = new SpeechSynthesisUtterance(mensaje);
    lectura.lang = "es-MX";
    leer_en_voz_alta.speak(lectura);
}
*/
