const beats = Array.from(document.querySelectorAll("[data-beat]"));
const buttons = Array.from(document.querySelectorAll(".shutter, .next-shot"));

function showBeat(number) {
  beats.forEach((beat) => {
    beat.hidden = beat.dataset.beat !== String(number);
  });
}

const params = new URLSearchParams(window.location.search);
const requestedBeat = Number(params.get("beat"));
let currentBeat = Number.isInteger(requestedBeat) && requestedBeat >= 1 && requestedBeat <= 5 ? requestedBeat : 1;

showBeat(currentBeat);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentBeat = currentBeat === 5 ? 1 : currentBeat + 1;
    showBeat(currentBeat);
  });
});
