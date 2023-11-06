var switchMap = 0;

function addScene() {
  var boton = $("#boton2");

  var boton3 = $("#boton3");

  var marco = $("#marco");

  //var glitch = $("#efecto-glitch");

  var scene = document.createElement("iframe");

  scene.setAttribute("src", "arjs_scene.html");
  scene.setAttribute("width", "100%");
  scene.setAttribute("height", "100%");
  document.querySelector("#myEmbeddedScene").appendChild(scene);

  boton.removeClass("show");
  boton.addClass("hide");

  boton3.removeClass("hide");
  boton3.addClass("show");

  marco.removeClass("marco-1");
  marco.addClass("marco-2");

  /*
  glitch.removeClass("hide");
  glitch.addClass("show");
  */
}

var countDownDate = new Date("Nov 1, 2023 10:20:10").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="contador"
  document.getElementById("contador").innerHTML =
    days + " d " + hours + " h " + minutes + " m " + seconds + " s ";

  document.getElementById("tit1").innerHTML = "En";

  document.getElementById("tit2").innerHTML = "Se abre el telón";

  /*
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("contador").innerHTML = "Se abrió el telón";
    
    boton.removeClass("hide");
    
    boton.addClass("show");
  }
  */

  if (distance < 0) {
    clearInterval(x);
    endCountdown();
  }
}, 1000);

function endCountdown() {
  var boton = $("#boton2");

  var candado = $("#icon1");

  var lore1 = $("#lore-1");

  var lore2 = $("#lore-2");

  document.getElementById("contador").innerHTML = "Llegó la hora";

  document.getElementById("tit1").innerHTML = "Al fin";

  document.getElementById("tit2").innerHTML = "abre tus ojos";

  boton.removeClass("hide");
  candado.removeClass("show");

  boton.addClass("show");
  candado.addClass("hide");

  /*

  $(".phase-1").css("text-decoration", "none");

  $(".phase-1").css("font-size", "3.5vw");

  $(".phase-1").css("filter", "none");

  $(".phase-1").css("margin-right", "0px");

  $(".phase-2").css("text-decoration", "none");

  $(".phase-2").css("font-size", "3.5vw");

  $(".phase-2").css("filter", "none");

  $(".phase-2").css("margin-right", "0px");
  
  $(".phase-3").css("text-decoration", "none");

  $(".phase-3").css("font-size", "3.5vw");

  $(".phase-3").css("filter", "none");

  $(".phase-3").css("margin-right", "0px");
  
  */

  console.log("se termino wey");
}

function openMap(x) {
  switchMap = switchMap + x;

  const mapa = $("#map");

  if (switchMap % 2) {
    mapa.removeClass("anim-2-1");

    $("#boton3").addClass("anim-3");
    setTimeout(function () {
      $("#boton3").removeClass("anim-3");
    }, 600);

    $(mapa).addClass("anim-2");
    console.log("%d is odd\n", switchMap);
  } else {
    mapa.removeClass("anim-2");

    $("#boton3").addClass("anim-3");
    setTimeout(function () {
      $("#boton3").removeClass("anim-3");
    }, 600);

    $(mapa).addClass("anim-2-1");
    console.log("%d is not odd\n", switchMap);
  }
}

function showFoundMarker() {
  var punto1 = document.getElementById("punto-1");
  var punto2 = document.getElementById("punto-2");
  var punto3 = document.getElementById("punto-3");
  var punto4 = document.getElementById("punto-4");

  var mark1Found = localStorage.getItem("marker1");
  var mark2Found = localStorage.getItem("marker2");
  var mark3Found = localStorage.getItem("marker3");
  var mark4Found = localStorage.getItem("marker4");

  if (mark1Found != null) {
    punto1.style.webkitFilter = "grayscale(80%) brightness(50%)";
  }

  if (mark2Found != null) {
    punto2.style.webkitFilter = "grayscale(80%) brightness(40%)";
  }

  if (mark3Found != null) {
    punto3.style.webkitFilter = "grayscale(80%) brightness(40%)";

    console.log("LOcuron se encontro el marcador" + " " + mark3Found);
  }

  if (mark4Found != null) {
    punto4.style.webkitFilter = "grayscale(80%) brightness(40%)";

    console.log("LOcuron se encontro el marcador" + " " + mark4Found);
  }
}

$(document).ready(function () {
  $("#boton3").click(function () {
    showFoundMarker();
  });
});

var updateFoundMarkers = function () {
  checkFoundMarkers();
};
var timer = setInterval(updateFoundMarkers, 2000);
var numX = 0;
//clearInterval(timer);

function checkFoundMarkers() {
  var mark1Found = localStorage.getItem("marker1");
  var mark2Found = localStorage.getItem("marker2");
  var mark3Found = localStorage.getItem("marker3");
  var mark4Found = localStorage.getItem("marker4");

  if (mark1Found != null) {
    $("#lore-1").removeClass("redacted-2");
    $("#lore-2").removeClass("redacted-2");

    console.log("LOcuron se encontro el marcador" + " " + mark1Found);
  } else {
    console.log("Sadgi no se encontro el marcador 1");
  }

  if (mark2Found != null) {
    $(".phase-1").css("text-decoration", "none");

    $(".phase-1").css("font-size", "3.5vw");

    $(".phase-1").css("filter", "none");

    $(".phase-1").css("margin-right", "0px");

    console.log("LOcuron se encontro el marcador" + " " + mark2Found);
  } else {
    console.log("Sadgi no se encontro el marcador 2");
  }

  if (mark3Found != null) {
    $(".phase-2").css("text-decoration", "none");

    $(".phase-2").css("font-size", "3.5vw");

    $(".phase-2").css("filter", "none");

    $(".phase-2").css("margin-right", "0px");
    console.log("LOcuron se encontro el marcador" + " " + mark3Found);
  } else {
    console.log("Sadgi no se encontro el marcador 3");
  }

  if (mark4Found != null) {
    $(".phase-3").css("text-decoration", "none");

    $(".phase-3").css("font-size", "3.5vw");

    $(".phase-3").css("filter", "none");

    $(".phase-3").css("margin-right", "0px");
    console.log("LOcuron se encontro el marcador" + " " + mark4Found);
  } else {
    console.log("Sadgi no se encontro el marcador 4");
  }
  
  numX++;

  console.log("Numero de veces ejecutado: " + numX);
}