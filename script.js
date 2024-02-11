document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('runawayButton');
    btn.addEventListener('mouseover', function () {
        var height = window.innerHeight;
        var width = window.innerWidth;

        var newLeft = Math.random() * (width - btn.clientWidth);
        var newTop = Math.random() * (height - btn.clientHeight);

        btn.style.left = newLeft + 'px';
        btn.style.top = newTop + 'px';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('runawayButton');
    btn.addEventListener('click', function () {
        var height = window.innerHeight;
        var width = window.innerWidth;

        var newLeft = Math.random() * (width - btn.clientWidth);
        var newTop = Math.random() * (height - btn.clientHeight);

        btn.style.left = newLeft + 'px';
        btn.style.top = newTop + 'px';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.querySelector('.yes');
    var fireworks = document.querySelectorAll('.firework');

    yesButton.addEventListener('click', function () {
        fireworks.forEach(function (firework) {
            firework.classList.add('show-fireworks');
        });
    });
});

