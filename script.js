//1) La página deberá tener un loader acorde a la temática propuesta

window.addEventListener('load', () => {
  const cont = document.querySelector('.contenedorLoader');
  const loaderText = document.querySelector('.loader-text');

  let porcentaje = 0;
  const intervalo = 100; // Actualiza el porcentaje cada 100 ms
  const duracion = 5000; // Duración total de 5 segundos
  const pasos = duracion / intervalo;

  const actualizarPorcentaje = () => {
    porcentaje += 100 / pasos;
    if (porcentaje <= 100) {
      loaderText.textContent = Math.round(porcentaje) + '%';
    } else {
      clearInterval(animacion);
      cont.style.opacity = 0;
      cont.style.visibility = 'hidden';
    }
  };

  const animacion = setInterval(actualizarPorcentaje, intervalo);
});

/*2) El menú Hamburguesa de la página cuando se despliega se debe transformar las 3 líneas en una Cruz, 
utilizando una animación.

3) Los ítems del menú tienen que aparecer desde un costado de la pantalla e ir cargándose uno por uno. */

let itemsMenu = document.querySelector('.itemsMenu');
let menu = document.getElementById('menu');
menu.addEventListener('click', function () {
  if (menu.classList.contains('open')) {
    menu.classList.remove("open");
    menu.classList.add('menu');
    itemsMenu.classList.remove('show');
  }
  else {
    menu.classList.remove('menu');
    menu.classList.add("open");
    itemsMenu.classList.add('show');
  }
});

/*4) En la sección de “Más amigos, más diversión!” Se debe tener 2 columnas en la cual la parte izquierda es una imagen
y sobre la derecha está el texto descriptivo*/
/*SECCION 7*/

document.addEventListener("scroll", () => {
  function borrar() {
    document.querySelectorAll(".imgSeccion6").forEach((s) => {
      s.classList.remove("show-img");
    });
    document.querySelectorAll(".seccion6Texto").forEach((s) => {
      s.classList.remove("show-txt");
    });
  }

  const scrollSeccion6 = window.scrollY;
  if (scrollSeccion6 < 4030) {
    borrar();
    document.querySelector("#imgSeccion6-1").classList.add("show-img");
    document.querySelector("#txt-1").classList.add("show-txt");
  } else if (scrollSeccion6 >= 4030 && scrollSeccion6 < 4500) {
    borrar();
    document.querySelector("#imgSeccion6-2").classList.add("show-img");
    document.querySelector("#txt-2").classList.add("show-txt");
  } else if (scrollSeccion6 >= 4400 && scrollSeccion6 < 5000) {
    borrar();
    document.querySelector("#imgSeccion6-3").classList.add("show-img");
    document.querySelector("#txt-3").classList.add("show-txt");
  } else if (scrollSeccion6 >= 5000) {
    borrar();
    document.querySelector("#imgSeccion6-4").classList.add("show-img");
    document.querySelector("#txt-4").classList.add("show-txt");
  }
});


/*5) Al hacer scroll el Header debe ser sticky y achicarse, de tal manera que además el logo debe achicarse.*/
let nav = document.querySelector('.imgNavFijo');
let logoChico = document.querySelector('.logoChico');
let logoGrande = document.querySelector('.logo');
let posicionInicial = 185;
let posicionLogo = 0;

window.addEventListener('scroll', function () {
  let scrollPosicion = window.scrollY;

  if (scrollPosicion > posicionLogo) {
    let nuevoTamaño = 100 - scrollPosicion * 0.4;
    // Aplicar el nuevo tamaño de la imagen

    logoGrande.style.transform = 'scale(' + nuevoTamaño / 100 + ')';
    if (scrollPosicion > posicionInicial) {
      nav.style.display = "flex";
      logoChico.style.display = "flex";
      logoGrande.style.display = "none";
    }
  }
  else {
    nav.style.display = "none";
    logoChico.style.display = "none";
    logoGrande.style.display = "flex";
  }
});

/*6)En la sección "Conoce a Spidey y sus sorprendentes amigos", el duende verde debe moverse más lento que la velocidad de scroll.*/
let inicialPosicion = 900;
window.addEventListener('scroll', function () {
  let scrollPosicion = window.scrollY;
  if (scrollPosicion >= inicialPosicion) {
    let imgPosicion = inicialPosicion - (scrollPosicion - inicialPosicion) * 0.5;
    document.querySelector('.duende').style.top = imgPosicion + 'px';
  }
});

/*7) El héroe debe tener efecto parallax, utilizando las capas de la composición de la imagen, moverlas según el scroll, a diferentes velocidades, dando sensación de profundidad.*/
const personaje1 = document.querySelector("#personaje1");
const hombreAraña = document.querySelector("#personaje2");
const hombreArañaNegro = document.querySelector("#personaje3");
const hombreArañaNegroChico = document.querySelector("#personaje3Chico");
const edificio1 = document.querySelector("#edificio1");
const edificio2 = document.querySelector("#edificio2");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  // Calcular la nueva posición left sumando la posición inicial y la cantidad desplazada
  let nuevaPosicion = scroll * 0.4;
  let nuevaPosicionMayor = scroll * 0.5;
  let nuevaPosicionMenor = scroll * 0.3;
  let nuevaPos = scroll * 0.2;

  // Calcular el nuevo tamaño
  let nuevoTamaño = 1 + scroll * 0.001;
  let nuevoTamañoChico = 1 - scroll * 0.001;

  if (scroll < 500) {
    personaje1.style.transform = 'scale(' + nuevoTamañoChico + ')';
    hombreAraña.style.left = -638 - nuevaPosicion + "px";
    hombreAraña.style.transform = 'scale(' + nuevoTamaño + ')';
    hombreArañaNegro.style.top = 335 + nuevaPosicionMenor + "px";
    hombreArañaNegro.style.left = 650 + nuevaPos + "px";
    hombreArañaNegroChico.style.top = 335 + nuevaPos + "px";
    edificio1.style.left = 0 - nuevaPosicion + "px";
    edificio1.style.transform = 'scale(' + nuevoTamañoChico + ')';
    edificio1.style.top = 144 + nuevaPosicionMayor + "px";
    edificio2.style.left = 385 - nuevaPosicionMayor + "px";
    edificio2.style.transform = 'scale(' + nuevoTamañoChico + ')';
    edificio2.style.top = 570 + nuevaPosicion + "px";
  }
});

/*8) Lo mismo para la sección "Los vengadores acompañando tu aventura". En este caso, el movimiento debe reaccionar al movimiento del mouse. */
const imagenes = document.querySelectorAll('.contenedor img');

(function () {
  document.addEventListener("mousemove", parallax);

  function parallax(e) {
    let ancho = window.innerWidth / 2;
    let alto = window.innerHeight / 2;

    imagenes.forEach((img, index) => {
      let velocidad = (index + 1) * 0.1;
      let mouseX = e.clientX; 
      let mouseY = e.clientY;
      let movimientoEnX = (mouseX - ancho) * velocidad;
      let movimientoEnY = (mouseY - alto) * velocidad;

      img.style.transform = 'translate(' + movimientoEnX +'px, ' + movimientoEnY + 'px)';
    });
  }
})();

/*9) En la sección de los cards de los 3 personajes, los cards deben aparecer flotados con fade-in, es decir, no se ven inicialmente, 
y cuando se scrollea hasta dejar la sección visible, aparecen sutilmente (a diferentes velocidades) los tres cards desde abajo desde un estado transparente. */ 
 window.addEventListener('scroll', function () {
  let spider = document.querySelector('.historiaSpider');
  let spiderNegro = document.querySelector('.historiaSpiderNegro');
  let spiderGhost = document.querySelector('.historiaGhost');
  let height = window.innerHeight;
  let posicionTop = spider.getBoundingClientRect().top;// devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización
  let posicionBottom = spider.getBoundingClientRect().bottom;

  if (posicionTop - height <= 0 && posicionBottom >= 0) {
    spider.style.animation = 'fadeIn 3s';
    spiderNegro.style.animation = 'fadeIn 5s';
    spiderGhost.style.animation = 'fadeIn 7s';
  } else {
    spider.style.animation = 'none';
    spiderNegro.style.animation = 'none';
    spiderGhost.style.animation = 'none';
  }
});


/*11) En la sección Ghost Spider, los 3 cards (en 3D) deben desplazarse a destiempo en el scroll, y on hover deben cambiar la perspectiva sutilmente.*/
let inicialPosicionAuto = 1100;
window.addEventListener('scroll', function () {
  var scrollPosicion = window.scrollY;
  if (scrollPosicion >= inicialPosicionAuto) {
    let imgPosicionAuto = inicialPosicionAuto - (scrollPosicion - inicialPosicionAuto) * 0.8;
    document.querySelector('.autosAndando').style.top = imgPosicionAuto + 'px';
  }
});

/*12) En la sección de los tres personajes, debe animarse on hover el personaje, agrandando la figura del hover, achicando, cambiar el color del fondo.*/
const ghost = document.querySelector(".ghost-Spider8");
const spiderMan8 = document.querySelector(".spiderMan8");
const spiderNegro8 = document.querySelector(".spiderNegro8");
const fondoRosa = document.querySelector(".fondoRosa");
const fondoCeleste = document.querySelector(".fondoCeleste");
const fondoAzulOscuro = document.querySelector(".fondoAzulOscuro");

ghost.addEventListener('mouseover', function () {
  ghost.style.transform = 'scale(' + 1.2 + ')';
  spiderMan8.style.transform = 'scale(' + 0.9 + ')';
  spiderNegro8.style.transform = 'scale(' + 0.9 + ')';
  spiderMan8.style.filter = 'blur(' + 5 + 'px)';
  spiderNegro8.style.filter = 'blur(' + 5 + 'px)';
  fondoRosa.style.display = 'block';
})

ghost.addEventListener('mouseout', function () {
  ghost.style.transform = 'scale(' + 1 + ')';
  spiderMan8.style.transform = 'scale(' + 1 + ')';
  spiderNegro8.style.transform = 'scale(' + 1 + ')';
  spiderMan8.style.filter = 'none';
  spiderNegro8.style.filter = 'none';
  fondoRosa.style.display = 'none';
})

spiderMan8.addEventListener('mouseover', function () {
  spiderMan8.style.transform = 'scale(' + 1.2 + ')';
  ghost.style.transform = 'scale(' + 0.9 + ')';
  spiderNegro8.style.transform = 'scale(' + 0.9 + ')';
  ghost.style.filter = 'blur(' + 5 + 'px)';
  spiderNegro8.style.filter = 'blur(' + 5 + 'px)';
  fondoCeleste.style.display = 'block';
})

spiderMan8.addEventListener('mouseout', function () {
  spiderMan8.style.transform = 'scale(' + 1 + ')';
  ghost.style.transform = 'scale(' + 1 + ')';
  spiderNegro8.style.transform = 'scale(' + 1 + ')';
  ghost.style.filter = 'none';
  spiderNegro8.style.filter = 'none';
  fondoCeleste.style.display = 'none';
})

spiderNegro8.addEventListener('mouseover', function () {
  spiderNegro8.style.transform = 'scale(' + 1.2 + ')';
  ghost.style.transform = 'scale(' + 0.9 + ')';
  spiderMan8.style.transform = 'scale(' + 0.9 + ')';
  ghost.style.filter = 'blur(' + 5 + 'px)';
  spiderMan8.style.filter = 'blur(' + 5 + 'px)';
  fondoAzulOscuro.style.display = 'block';
})

spiderNegro8.addEventListener('mouseout', function () {
  spiderNegro8.style.transform = 'scale(' + 1 + ')';
  ghost.style.transform = 'scale(' + 1 + ')';
  spiderMan8.style.transform = 'scale(' + 1 + ')';
  ghost.style.filter = 'none';
  spiderMan8.style.filter = 'none';
  fondoAzulOscuro.style.display = 'none';
})