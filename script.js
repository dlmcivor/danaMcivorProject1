let barToggling = document. querySelector('.barToggle');
let navToggling = document.querySelector('.navToggle');

barToggling.addEventListener('click', function() {
    navToggling.classList.toggle('slide');
})
