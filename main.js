let toggle = document.querySelector('.toggle');
let menu = document.querySelector('nav ul');
let icon = document.querySelector('.toggle i');

//event-listener for toggle
toggle.addEventListener('click', function toggled(){
    menu.classList.toggle('reset-transform');
    icon.classList.toggle('gg-chevron-right');
})