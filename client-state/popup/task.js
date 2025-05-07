let modal = document.getElementById("subscribe-modal");
let modalClose = document.querySelector(".modal__close_times");

function getCookie(name) {
  let object = document.cookie.split("; ");
  let cookie = object.find((p) => p.startsWith(name + "="));
  return cookie && cookie.substring(name.length + 1);
}

if (getCookie("close") !== "true") {
  window.onload = function () {
    modal.classList.add("modal_active");
  };
}

modalClose.onclick = function () {
   modal.classList.remove("modal_active");
  document.cookie = "close = true";
};