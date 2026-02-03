function play() {
  document.getElementById("info").innerText =
    "Singleplayer zatiaľ nie je hotový 👷";
}

function online() {
  // neskôr prepojenie na multiplayer
  window.location.href = "game.html";
}

function settings() {
  document.getElementById("info").innerText =
    "Settings prídu neskôr ⚙️";
}

function quit() {
  document.getElementById("info").innerText =
    "Nemôžeš quitnúť prehliadač 😄";
}
