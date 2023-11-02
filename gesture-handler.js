/* global AFRAME, THREE */

var barLevel;

AFRAME.registerComponent("gesture-handler", {
  schema: {
    enabled: { default: true },
    rotationFactor: { default: 5 },
    minScale: { default: 0.3 },
    maxScale: { default: 8 },
  },

  init: function () {

    
    const elemento = $("#searchingText");
    
    const elemento2 = $("#boton1");
    
    const elemento3 = $("#scene");
    
    const glitch = $("#glitch"); 
    
    //var entidad1 = document.querySelector('[sound]');
    
    this.handleScale = this.handleScale.bind(this);
    this.handleRotation = this.handleRotation.bind(this);

    this.isVisible = false;
    this.initialScale = this.el.object3D.scale.clone();
    this.scaleFactor = 1;

    this.el.sceneEl.addEventListener("markerFound", (e) => {
      this.isVisible = true;
      
      document.querySelector("#camera").setAttribute('distance1', '');
      
      elemento.removeClass("show")
      elemento2.removeClass("hide")
      elemento3.removeClass("non-clickable")
      
      glitch.addClass("show")
      
      //entidad1.components.sound.playSound();
      
      elemento.addClass("hide")
      elemento2.addClass("show")
      elemento3.addClass("clickable")
      glitch.removeClass("hide")
      
    });

    this.el.sceneEl.addEventListener("markerLost", (e) => {
      this.isVisible = false;
      
      elemento.removeClass("hide")
      elemento2.removeClass("show")
      elemento3.removeClass("clickable")
      
      glitch.removeClass("show")
      
      //entidad1.components.sound.stopSound();
      
      elemento.addClass("show")
      elemento2.addClass("hide")
      elemento3.addClass("non-clickable")
      glitch.addClass("hide")
    });
  },

  update: function () {
    if (this.data.enabled) {
      this.el.sceneEl.addEventListener("onefingermove", this.handleRotation);
      this.el.sceneEl.addEventListener("twofingermove", this.handleScale);
    } else {
      this.el.sceneEl.removeEventListener("onefingermove", this.handleRotation);
      this.el.sceneEl.removeEventListener("twofingermove", this.handleScale);
    }
  },

  remove: function () {
    this.el.sceneEl.removeEventListener("onefingermove", this.handleRotation);
    this.el.sceneEl.removeEventListener("twofingermove", this.handleScale);
  },

  handleRotation: function (event) {
    if (this.isVisible) {
      this.el.object3D.rotation.y +=
        event.detail.positionChange.x * this.data.rotationFactor;
      this.el.object3D.rotation.x +=
        event.detail.positionChange.y * this.data.rotationFactor;
    }
  },

  handleScale: function (event) {
    if (this.isVisible) {
      this.scaleFactor *=
        1 + event.detail.spreadChange / event.detail.startSpread;

      this.scaleFactor = Math.min(
        Math.max(this.scaleFactor, this.data.minScale),
        this.data.maxScale
      );

      this.el.object3D.scale.x = this.scaleFactor * this.initialScale.x;
      this.el.object3D.scale.y = this.scaleFactor * this.initialScale.y;
      this.el.object3D.scale.z = this.scaleFactor * this.initialScale.z;
    }
  },
});
