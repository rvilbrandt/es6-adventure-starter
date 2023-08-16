// Import stylesheets
import "./style.css";

// Write Javascript code!
var app = document.getElementById("app");
var img = document.getElementById("room");
var desc = document.getElementById("desc");
var nav = document.getElementById("nav");

function showRoom(room) {
  img.src = room.image;
  desc.innerHTML = room.description;
  nav.innerHTML = "";

  var button = document.createElement("button");
  button.innerText = "N";

  nav.append(button);
}

showRoom({});
