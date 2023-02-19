document.addEventListener("mousemove", function (e) {
  var customCursor = document.querySelector(".custom_cursor");
  customCursor.style.left = (e.clientX - customCursor.offsetWidth / 2) + "px";
  customCursor.style.top = (e.clientY - customCursor.offsetHeight / 2) + "px";
});