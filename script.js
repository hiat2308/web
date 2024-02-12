const noButton = document.getElementById('no');

noButton.addEventListener('click', () => {
    const maxX = window.innerWidth - noButton.offsetWidth;
    const maxY = window.innerHeight - noButton.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

const siButton = document.getElementById('si');

siButton.addEventListener('click', () => {
    document.querySelector('.container').innerHTML = "<h2>Muchas gracias por aceptar hermosota, espero no haberte obligado =D Atte: El Amor de tu vida</h2>";
});
