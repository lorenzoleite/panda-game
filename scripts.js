const panda = document.getElementById("panda");

function jump() {
  if(panda.classList != "jump") {
    panda.classList.add("jump");

    setTimeout(function () {
      panda.classList.remove("jump");
    },500);
  }
}

document.addEventListener("keydown", function (event) {
  jump();
});