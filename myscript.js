document.addEventListener("mousemove", function(e) {
    var customCursor = document.querySelector(".custom-cursor");
    customCursor.style.left = e.clientX + "px";
    customCursor.style.top = e.clientY + "px";
  });