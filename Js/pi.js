//Piedra/Papel/Tijeras veraion Web. By Geovas or Mart7
//PD: Pueden Mejorarlo a su gusto

//Asignamos el contenedor de los botones
let Contenedor = document.getElementById("con");

//Mesa de Juego
let Mesa = document.getElementById("Mesa");

//Creamos el arreglo de los comandos para el Bot UwU
let Comandos = ["papel", "piedra", "tijera"];

//Nombres random para el Bot UwU.
let NombresRandom = ["Messi", "Tilin", "El bicho", "Goku", "Wazaaa", "Pepito", "Vaca Lola", "El mas perron"];

let Bjugar = document.getElementById("Bjugar");
let BPiedra = document.getElementById("Bpiedra");
let Bpapel = document.getElementById("Bpapel");
let Btijera = document.getElementById("Btijera");

BPiedra.disabled = true;
BPiedra.style.opacity = "0.5";
Bpapel.disabled = true;
Bpapel.style.opacity = "0.5";
Btijera.disabled = true;
Btijera.style.opacity = "0.5";

Bjugar.addEventListener('click',function(){
  BPiedra.disabled = false;
  BPiedra.style.opacity = "1";
  Bpapel.disabled = false;
  Bpapel.style.opacity = "1";
  Btijera.disabled = false;
  Btijera.style.opacity = "1";
  Jugar();
});

//Añadimos la funcion para Jugar :)
function Jugar(){
  Bjugar.remove();
  
  const JugarDeNuevo = document.createElement("button");
  JugarDeNuevo.classList.add('Denuevo');
  JugarDeNuevo.textContent = "Jugar de Nuevo";
  Contenedor.appendChild(JugarDeNuevo);
  JugarDeNuevo.addEventListener('click',function(){
    location.reload();
  })
  
  const Comienzo = document.getElementById("comienzo");
  Comienzo.textContent = "A jugar, Selecciona una opcion";
  
  let NombreBot = document.getElementById("Bot");
  const n = Math.floor(Math.random()*NombresRandom.length);
  let NBot = NombresRandom[n];
  NombreBot.textContent = "BOT==> Hola soy el bot, me llamo " + NombresRandom[n];
  
  BPiedra.addEventListener('click', function(){
    BPiedra.disabled = true;
    BPiedra.style.opacity = "0.5";
    Bpapel.disabled = true; 
    Bpapel.style.opacity = "0.5";
    Btijera.disabled = true;
    Btijera.style.opacity = "0.5";
    const jugador = "piedra";
    const resultado = document.getElementById("res");
    const i = Math.floor(Math.random()*Comandos.length);
    const Bot = Comandos[i];
    if(jugador=="piedra" && Bot == "piedra"){
      resultado.textContent = NBot + " Eligio lo mismo que tu, EMPATE";
      const imagen = document.createElement("img");
      imagen.src = "img/puñoDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/puñoiz.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
      
    } else if(jugador == "piedra" && Bot == "papel"){
      resultado.textContent = NBot + " Eligio papel, Tu pierdes";
      
      const imagen = document.createElement("img");
      imagen.src = "img/puñoDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/papeliz.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
      
    } else{
      resultado.textContent = NBot + " Eligio Tijera, Tu ganas";
      
      const imagen = document.createElement("img");
      imagen.src = "img/puñoDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/Tijerasiz.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
    }
  })
  
  Bpapel.addEventListener('click', function(){
    Bpapel.disabled = true;
    Bpapel.style.opacity = "0.5";
    Btijera.disabled = true;
    Btijera.style.opacity = "0.5";
    BPiedra.disabled = true;
    BPiedra.style.opacity = "0.5";
    const resultado = document.getElementById("res");
    const jugador = "papel";
    const i = Math.floor(Math.random()*Comandos.length);
    const Bot = Comandos[i];
    
    if(jugador == "papel" && Bot == "papel"){
      resultado.textContent = NBot + "Eligio lo mismo que tu, EMPATE";
      
      const imagen = document.createElement("img");
      imagen.src = "img/papelDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/papeliz.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
      
    } else if(jugador == "papel" && Bot == "piedra"){
      resultado.textContent = NBot + " Eligio piedra, Tu ganas";
      
      const imagen = document.createElement("img");
      imagen.src = "img/papelDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/puñoiz.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
      
    } else{
      resultado.textContent = NBot + " Eiligio tijeras, Tu pierdes";
      
      const imagen = document.createElement("img");
      imagen.src = "img/papelDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/Tijerasiz.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
    }
  })
  
  Btijera.addEventListener('click',function(){
    Btijera.disabled = true;
    Btijera.style.opacity = "0.5";
    Bpapel.disabled = true;
    Bpapel.style.opacity = "0.5";
    BPiedra.disabled = true;
    BPiedra.style.opacity = "0.5";
    const resultado = document.getElementById("res");
    const jugador = "tijera";
    const i = Math.floor(Math.random()*Comandos.length);
    const Bot = Comandos[i];
    
    if(jugador == "tijera" && Bot == "tijera"){
      resultado.textContent = NBot + " Eligio lo mismo que tu, EMPATE";
      
      const imagen = document.createElement("img");
      imagen.src = "img/TijerasDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/Tijerasiz.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
      
    } else if(jugador == "tijera" && Bot == "piedra"){
      resultado.textContent = NBot + " Eligio piedra, Tu pierdes";
      
      const imagen = document.createElement("img");
      imagen.src = "img/TijerasDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/puñoDer.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
      
    } else{
      resultado.textContent = NBot + " Eligio papel, Tu has ganado";
      
      const imagen = document.createElement("img");
      imagen.src = "img/TijerasDer.jpeg";
      imagen.style = "position: absolute; left: 0;";
      Mesa.appendChild(imagen);
      
      const imagen2 = document.createElement("img");
      imagen2.src = "img/papelDer.jpeg";
      imagen2.style = "position: absolute; right: 0;";
      Mesa.appendChild(imagen2);
    }
  })
}