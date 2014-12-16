'use strict';

window.AID = {
  CRS: "A00000015143525300",
  PPSE: "325041592E5359532E4444463031",
  PKCS: "A000000063504b43532d3135"
};

function updateResultStatus(id, color, wording) {
  var result = document.getElementById(id);
  result.style.color = color;
  result.textContent = wording;
}

function recordLogs(id, message) {
  var li = document.createElement('li');

  var events = document.getElementById(id);
  var html = message;

  li.innerHTML = html;
  events.appendChild(li);
}

function clearLogs(id) {
  var events = document.getElementById(id);
  while (events.firstChild) {
    events.removeChild(events.firstChild);
  }
}

function hexString2byte(str) {
  var a = [];
  for(var i = 0, len = str.length; i < len; i+=2) {
    a.push(parseInt(str.substr(i, 2), 16));
  }
  return new Uint8Array(a);
}
