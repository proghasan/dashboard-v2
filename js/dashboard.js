'use strict';

let buttonClick = document.getElementById("toggle-sidebar");
buttonClick.addEventListener('click', function() {
    let sidebarActive = document.getElementById("sidebar").classList.toggle('active');
    let loggedIn = document.getElementById("user-login-area");
    let mainContent = document.getElementById("main-content");
    // display hide when come mobile device
    if(sidebarActive && screen.width  <= 768) {
        loggedIn.style.display = 'none';
        mainContent.style.display ='none'
    }
    else {
        loggedIn.style.display = 'block';
        mainContent.style.display ='block'
    }

    document.getElementById("content").classList.toggle('active');
})