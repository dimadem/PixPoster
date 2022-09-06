/* eslint-disable no-undef, no-unused-vars */

// inspired by Tim Rodenbröker & his youtube channel
// So Tim if you being there - thank you!
// https://www.youtube.com/watch?v=KL_b6eTm9Ag&t=1934s
// components

// Props for
// loading images from JSON
// keypressd events
// mouseWheell events

// Resolutios
const cW = 1312;
const cH = 896;
const wW = 656;
const wH = 896;

// working with img
let images = [];
let currentImage;
let imageLink =
  "https://media1.giphy.com/media/l3vQY93bN54rXJTrO/giphy.gif?cid=b3f2a308cpljh6om7ndpnqwiiwr3gyz7e99b5eftnc0u6q3l&rid=giphy.gif&ct=g";
let source, target, result; // canvases
let sx, sy, sw, sh, dx, dy, dw, dh; // copy

// interface
const fr = 60;
let thresholdBrightness = 75;

// TILE for result
// One PIXEL
let TILES_X = wW / 11;
let TILES_Y = wH / 11;
let tileW, tileH;
let px, py;

// magic effects
let c, b; // colour, brightness
let scalar = 1; // scale source
let offsetX = 0; // position source
let offsetY = 0;
let sq = -100; // square size

export default function Canvas(p5) {
  p5.preload = () => {
    currentImage = p5.loadImage(imageLink);
  };

  p5.setup = () => {
    // basic setup
    p5.frameRate(fr);
    p5.colorMode(p5.RGB, 255, 255, 255, 255);

    // main canvas
    p5.createCanvas(cW, cH);
    p5.background(241, 241, 241);

    // canvases setup
    source = p5.createGraphics(wW, wH);
    target = p5.createGraphics(wW, wH);
    result = p5.createGraphics(wW, wH);
  };

  // load image from JSON to canvas
  p5.updateWithProps = ({ dataLink }) => {
    if (dataLink) {
      imageLink = dataLink;
      console.log("imglink:", imageLink);
      currentImage = p5.loadImage(imageLink);
    }
  };

  p5.draw = () => {
    // p5.background(241, 241, 241);
    // draw functions

    drawSource();
    drawTarget();
    drawResult();

    // keyPressed();
    // mouseWheel();

    // frames
    p5.image(source, 0, 0);
    p5.image(target, wW, 0); // collage
    p5.image(result, wW, 0); // pixelised

    // copy brush
    p5.noFill();
    p5.strokeWeight(2);
    p5.stroke(0, 255, 0);
    p5.rect(p5.mouseX, p5.mouseY, sq, sq);

    // paste brush
    p5.noFill();
    p5.stroke(255, 0, 255);
    p5.rect(p5.mouseX + wW, p5.mouseY, sq, sq);
  };

  //test it
  function drawSource() {
    // drawSource
    source.background(241, 241, 241);
    source.imageMode(p5.CENTER);
    source.push();
    source.translate(source.width / 2 + offsetX, source.height / 2 + offsetY);
    // source.scale(scalar);
    source.image(currentImage, 0, 0);
    source.pop();
  }

  function drawTarget() {
    // setup copy parameters
    sx = p5.mouseX;
    sy = p5.mouseY;
    sw = sq;
    sh = sq;
    dx = p5.mouseX;
    dy = p5.mouseY;
    dw = sq;
    dh = sq;

    // copy picture to buffer
    let sourceBuffer = source.get();

    // freeze background
    if (p5.frameRate === 1) {
      target.background(241, 241, 241);
    }

    //copy-paste square
    if (p5.mouseIsPressed) {
      target.copy(sourceBuffer, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

  function drawResult() {
    // decrease Canvas resolution
    tileW = wW / TILES_X;
    tileH = wH / TILES_Y;

    // copy from target data
    let bufferTarget = target.get();

    // BG COLOR
    result.background(241, 241, 241);
    result.noStroke();

    for (let col = 0; col < TILES_X; col++) {
      for (let row = 0; row < TILES_Y; row++) {
        // each pixel of grid is stored
        px = Math.floor(col * tileW);
        py = Math.floor(row * tileH);

        // get color from buffer of each pixel
        c = bufferTarget.get(px, py);
        // brightness
        b = p5.brightness(c);

        b < thresholdBrightness ? result.fill(241, 241, 241) : result.fill(0);

        result.push();
        result.translate(col * tileW, row * tileH);
        result.rect(0, 0, tileW, tileH);
        result.pop();
      }
    }
  }
}
