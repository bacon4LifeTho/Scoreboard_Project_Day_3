// initialize a varible to store the score
let score = 0

// write a function
function doSomething() {
    console.log("increase the score")
score = score + 1
draw()
}

// draw something to the page
function draw() {
let scoreElement = document.getElementById("score-spot")

// @ts-ignore
scoreElement.innerText = score

}
draw()
