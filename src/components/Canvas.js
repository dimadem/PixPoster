/* eslint-disable no-undef, no-unused-vars */

// inspired by Tim Rodenbröker & his youtube channel
// So Tim if you being there - thank you!
// https://www.youtube.com/watch?v=KL_b6eTm9Ag&t=1934s
// ----- ----- ----- ----- -----

// next update
// https://gorillasun.de/blog/working-with-svgs-in-p5js
// import "p5.js-svg";

// Resolutios
const cW = 680 * 2;
const cH = 680;
const wW = 680;
const wH = 680;

// img
let currentImage; // is loaded to source
let imageLink; //
let savePicture;
var invert;
var bw, wb;

// canvases
let source, target, result; // canvases

// let divider = 170;
let divider = 136;
let TILES_X = divider;
let TILES_Y = divider;
let tileW, tileH;
let px, py;
let sx, sy, sw, sh, dx, dy, dw, dh; // copy props
let c, b; // colour, brightness

// UI
let thresholdBrightness = 75; // default
let scalar = 1; // scale
let offsetX = 0; // pos X
let offsetY = 0; // pos Y
let sq = -30; // square size

export default function Canvas(p5) {
  p5.disableFriendlyErrors = true; // disables FES

  p5.state = {};

  p5.preload = () => {
    // first image
    // currentImage = p5.loadImage(imageLink);

    // pixeled Canvas
    tileW = wW / TILES_X;
    tileH = wH / TILES_Y;
  };

  p5.setup = () => {
    // basic setup

    // canvases setup
    p5.createCanvas(cW, cH);
    source = p5.createGraphics(wW, wH);
    target = p5.createGraphics(wW, wH);
    result = p5.createGraphics(wW, wH);

    // bg canvases
    // result.background(255, 150, 150, 30);
    result.background(241, 241, 241, 30);
    // source.background(143, 201, 255, 30);
  };

  // PROPS FUNCTIONS
  p5.updateWithProps = ({
    dataLink,
    brightness,
    sizeRectangle,
    offX,
    offY,
    scale,
    onSave,
    invertColor = false,
  }) => {
    if (invertColor === false) {
      invert = false;
    } else {
      invert = true;
    }

    if (onSave === true) savePicture = p5.save(result);
    if (dataLink) {
      // prop ImageLink
      imageLink = dataLink;
      currentImage = p5.loadImage(imageLink);
      console.log("imglink from Canvas:", imageLink);
    }

    // prop brightness
    if (brightness) thresholdBrightness = brightness;

    // prop sizeRect
    if (sizeRectangle) sq = sizeRectangle;

    // prop offsetX
    if (offX || offY || scale) {
      offsetX = offX;
      offsetY = offY;
      scalar = scale;
      // console.log("OffsetX: ", offsetX);
      // console.log("OffsetY: ", offsetY);
      // console.log("Scale: ", scalar);
    }
  };

  p5.draw = () => {
    // draw functions
    if (imageLink) drawSource();
    drawTarget();
    if (p5.mouseIsPressed) drawResult();

    // render frames to Canvas
    p5.image(source, 0, 0); // original
    p5.image(target, wW, 0); // collage
    p5.image(result, wW, 0); // pixelised

    // White brush
    p5.noFill();
    p5.strokeWeight(5);
    p5.stroke(241, 241, 241);
    p5.rect(p5.mouseX, p5.mouseY, sq, sq);

    // Black brush
    p5.noFill();
    p5.stroke(0);
    p5.rect(p5.mouseX + wW, p5.mouseY, sq, sq);
  };

  function drawSource() {
    source.imageMode(p5.CENTER);
    if (invert === false) {
      source.background(0, 30);
    } else {
      source.background(241, 241, 241, 30);
    }
    source.push();
    source.translate(source.width / 2 + offsetX, source.height / 2 + offsetY);
    source.scale(scalar);
    source.image(currentImage, 0, 0);
    source.pop();
  }

  function drawTarget() {
    // copy/paste parameters
    sx = p5.mouseX;
    sy = p5.mouseY;
    sw = sq;
    sh = sq;
    dx = p5.mouseX;
    dy = p5.mouseY;
    dw = sq;
    dh = sq;

    // paste picture to buffer
    let sourceBuffer = source.get();

    // copy/paste square function
    if (p5.mouseIsPressed) {
      target.copy(sourceBuffer, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  }

  function drawResult() {
    result.noStroke();

    // paste data to buffer
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

        // invert rendering
        if (invert === false) {
          b < thresholdBrightness ? result.fill(241, 241, 241) : result.fill(0);
        } else {
          b > thresholdBrightness ? result.fill(241, 241, 241) : result.fill(0);
        }
        // draw result
        result.push();
        result.translate(col * tileW, row * tileH);
        result.rect(0, 0, tileW, tileH);
        result.pop();
      }
    }
  }
}
