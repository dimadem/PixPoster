/* eslint-disable no-undef, no-unused-vars */

import "p5.js-svg";

//https://gorillasun.de/blog/working-with-svgs-in-p5js

// inspired by Tim Rodenbröker & his youtube channel
// So Tim if you being there - thank you!
// https://www.youtube.com/watch?v=KL_b6eTm9Ag&t=1934s
// components

// Props for
// loading images from JSON
// keypressd events
// mouseWheell events

// Resolutios
const cW = 680 * 2;
const cH = 680;
const wW = 680;
const wH = 680;

// img
let currentImage; // is loaded to source
let imageLink =
  "https://media1.giphy.com/media/l3vQY93bN54rXJTrO/giphy.gif?cid=b3f2a308cpljh6om7ndpnqwiiwr3gyz7e99b5eftnc0u6q3l&rid=giphy.gif&ct=g";

// canvases
let source, target, result; // canvases

let divider = 170;
// let TILES_X = wW / divider;
let TILES_X = divider;
// let TILES_Y = wH / divider;
let TILES_Y = divider;
let tileW, tileH;
let px, py;
let sx, sy, sw, sh, dx, dy, dw, dh; // copy props

// magic effects
let c, b; // colour, brightness
let thresholdBrightness = 75; // default
let scalar = 1; // scale source
let offsetX = 0; // position source
let offsetY = 0;
let sq = -30; // square size

export default function Canvas(p5) {
  p5.preload = () => {
    // first image
    currentImage = p5.loadImage(imageLink);
  };

  p5.setup = () => {
    // basic setup
    // canvases setup
    p5.createCanvas(cW, cH);
    source = p5.createGraphics(wW, wH);
    target = p5.createGraphics(wW, wH);
    result = p5.createGraphics(wW, wH, p5.SVG);

    // setting canvases
    result.background(255, 150, 150, 30);
    source.background(143, 201, 255, 30);
  };

  // load image from JSON to canvas
  p5.updateWithProps = ({ dataLink, brightness, sizeRectangle }) => {
    // prop ImageLink
    if (dataLink) {
      imageLink = dataLink;
      console.log("imglink:", imageLink);
      currentImage = p5.loadImage(imageLink);
    }

    // prop brightness
    if (brightness) {
      thresholdBrightness = brightness;
    }

    // prop sizeRect
    if (sizeRectangle) {
      sq = sizeRectangle;
    }
  };

  p5.draw = () => {
    // draw functions
    drawSource();
    drawTarget();
    if (p5.mouseIsPressed) {
      drawResult();
    }

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
    source.imageMode(p5.CENTER);
    source.push();
    source.translate(source.width / 2 + offsetX, source.height / 2 + offsetY);
    source.scale(scalar);
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
    // if (p5.frameRate === 1) {
    //   target.background(241, 241, 241);
    // }

    //copy-paste square
    if (p5.mouseIsPressed) {
      target.copy(sourceBuffer, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

  function drawResult() {
    // noStroke build
    result.noStroke();

    // decrease Canvas resolution
    tileW = wW / TILES_X;
    tileH = wH / TILES_Y;

    // copy from target data
    let bufferTarget = target.get();

    //converting algorythm
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

    // p5.save(result, `${name}.png`);
  }
}
