let homeScore = 0
let guestScore = 0

let homeScorePanel = document.getElementById("homeScorePanel")

let resetBtn = document.getElementById("reset-btn").addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
    homeScorePanel.innerHTML = homeScore
    guestScorePanel.innerHTML = guestScore
})

let homeBtnOne = document.getElementById("home-btn-plus1").addEventListener("click", function(){
    homeScore += 1
    homeScorePanel.innerHTML = homeScore
})

let homeBtnTwo = document.getElementById("home-btn-plus2").addEventListener("click", function(){
    homeScore += 2
    homeScorePanel.innerHTML = homeScore
})

let homeBtnThree = document.getElementById("home-btn-plus3").addEventListener("click", function(){
    homeScore += 3
    homeScorePanel.innerHTML = homeScore
})

let guestBtnOne = document.getElementById("guest-btn-plus1").addEventListener("click", function(){
    guestScore += 1
    guestScorePanel.innerHTML = guestScore
})

let guestBtnTwo = document.getElementById("guest-btn-plus2").addEventListener("click", function(){
    guestScore += 2
    guestScorePanel.innerHTML = guestScore
})

let guestBtnThree = document.getElementById("guest-btn-plus3").addEventListener("click", function(){
    guestScore += 3
    guestScorePanel.innerHTML = guestScore
})
