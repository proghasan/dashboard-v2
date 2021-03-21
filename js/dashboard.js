'use strict';
let buttonClick = document.getElementById("toggle-sidebar");
buttonClick.addEventListener('click', function() {
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("content").classList.toggle('active');
})