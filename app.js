const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const button = document.getElementById('randomButton');


// button.addEventListener('click', getRandomNumber);


ctx.font = '48px Calibri';

function resetGame () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomNumber () {
    let random = Math.random();
    if (random < 0.5) {
        ctx.fillStyle = 'red';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.font = '48px Calibri';
        ctx.fillText(random.toFixed(3), 190, 250)
        ctx.font = '24px Calibri';
        ctx.fillText('Lose', 15, 30)
    } else if (random > 0.5) {
        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.font = '48px Calibri';
        ctx.fillText(random.toFixed(3), 190, 250)
        ctx.font = '24px Calibri';
        ctx.fillText('Win', 15, 30)
    }
    console.log(random);
}
