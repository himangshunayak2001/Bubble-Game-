var timer = 60;
var score = 0;
var random = 0;
function bubbleMaker() {
    var data = ""

    for (let i = 1; i < 120; i++) {
        let rn = Math.floor(Math.random() * 10)
        data += `<div class = "bubble">${rn}</div>`

    }

    document.querySelector('#pbtm').innerHTML = data;
}
function runTimer() {
    var time = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer
        }
        else {
            clearInterval(time)
            document.querySelector("#pbtm").innerHTML = `<h1> Game Over </h1> <br></br> <h3> You scored ${score}`
            document.querySelector("#hit").innerHTML = "0"
            document.querySelector("#score").innerHTML = "0"
           
        }
    }, 1000)
}

function newHit() {
    random = Math.floor(Math.random() * 10 );
    document.querySelector("#hit").textContent = random
}

function scoreHolder() {
    score += 10;
    document.querySelector("#score").textContent = score
}

document.querySelector("#pbtm")
.addEventListener("click",(data) => {
    var number = Number(data.target.textContent)
    if(number === random ) {
        scoreHolder();
        bubbleMaker()
        newHit();
    }
})

runTimer()
bubbleMaker()
newHit();
