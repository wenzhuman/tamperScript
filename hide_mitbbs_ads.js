// ==UserScript==
// @name       mitbss_hide_ads
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://mitbbs.ca/*
// @copyright  2012+, You
// ==/UserScript==

var ad1 = document.getElementsByClassName("newskuang1")[0];
if (ad1) {
    ad1.style.display = "none"; // Hides it
    // Or

    //ad1.parentNode.removeChild(div); // Removes it entirely
}
var ad2 = document.getElementsByClassName("newskuang2")[0];
if (ad2) {
    ad2.style.display = "none"; // Hides it
    // Or
    //ad2.parentNode.removeChild(div); // Removes it entirely
}
var ad3 = document.getElementsByTagName("img");

for(var i = 0;i<ad3.length; i++){
    ad3[i].style.display = "none";
}