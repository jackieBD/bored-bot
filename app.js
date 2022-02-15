const message = document.getElementById("message")
const btn = document.getElementById("btn")
const body = document.getElementById("body")
let clicks = 0


btn.addEventListener("click", newActivity)

function newActivity(){
    checkClicks()
    clicks++
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data=> message.textContent = `${(data.activity)}`)
}

    function checkClicks() {
    if (clicks % 5 === 0){
        body.className = ""
        body.classList.add("purple")
    }
    else if (clicks % 4 === 0) {
        body.className = ""
        body.classList.add("yellow")
    }
    else if (clicks % 3 === 0) {
        body.className = ""
        body.classList.add("green")
    }
    else if (clicks % 2 === 0){
        body.className = ""
        body.classList.add("pink")
    }
    else {
            body.className = ""
    }
}
