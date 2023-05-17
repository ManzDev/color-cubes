const beep = new Audio("sounds/beep.ogg");
const pixel = new Audio("sounds/pixel.ogg");

export function playSound(sound) {
  if (sound === "beep") {
    beep.currentTime = 0;
    beep.play();
  } else if (sound === "pixel") {
    pixel.currentTime = 0;
    pixel.play();
  }
}
