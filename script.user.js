 // ==UserScript==
// @name         Scratch Messages Finder
// @namespace    scratch.mit.edu/users/TastyLittleMuffin
// @version      1.0
// @description  Displays someone's message count on their profile
// @author       @TastyLittleMuffin from Scratch
// @match        scratch.mit.edu/users/*
// @grant        none
// ==/UserScript==
 var URL = window.location.href;
  if (URL.includes("scratch.mit.edu/users/") === true) {
   if (URL.includes("scratch.mit.edu/users/griffpatch/") === false {
   var user = URL.substring(30, URL.length - 1);
    xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "https://api.scratch.mit.edu/users/" + user + "/messages/count", false);
    xmlHttp.send(null);
    var raw = xmlHttp.responseText;
    var number = raw.substring(9, raw.length - 1)
    document.getElementsByClassName("footer")[0].innerHTML = user + " has " + number + " messages.";
  }
}
