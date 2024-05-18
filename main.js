function preload() {
  }
  
  function setup() {
    createCanvas(640, 480).position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
  }
  
  function draw() {
    image(video, 0, 0, 640, 480)
    tint(tint_color)
  }

  function take_snapshot(){
    save("img.png");
  }

  function filter_tint(){
    tint_color = document.getElementById("color_name").value;
  }