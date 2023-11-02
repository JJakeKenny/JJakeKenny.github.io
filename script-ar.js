function markerFound(markerId) {

  if (typeof Storage !== "undefined") {
    if (markerId == "markerA") {
      localStorage.setItem("marker1", markerId);
    } else if (markerId == "markerB") {
      localStorage.setItem("marker2", markerId);
    }else if (markerId == "markerC") {
      localStorage.setItem("marker3", markerId);
    }else if (markerId == "markerD") {
      localStorage.setItem("marker4", markerId);
    }
  } else {
    document.getElementById("text").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}
  