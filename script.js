const decorate_balls = document.querySelectorAll(".decorate-ball")
const decorate_balls_count = decorate_balls.length
const color = ["red","green","yellow"]

setInterval(() => {
    for (let i = 0; i < decorate_balls_count; i++) {
        decorate_balls[i].style.setProperty('--color',color[parseInt(Math.random()*(3-0)+0)])
        console.log(parseInt(Math.random()*(3-0)+0))
    }
}, 1000);