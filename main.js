let homeScore = 0
let guestScore = 0

document.getElementById("home-btn-plus1").addEventListener("click", function(){
    homeScore =+ 1
})
document.getElementById("home-btn-plus2").addEventListener("click", function(){
    console.log("+2")
})
document.getElementById("home-btn-plus3").addEventListener("click", function(){
    console.log("+3")
})

document.getElementById("guest-btn-plus1").addEventListener("click", function(){
    console.log("+1")
})
document.getElementById("guest-btn-plus2").addEventListener("click", function(){
    console.log("+2")
})
document.getElementById("guest-btn-plus3").addEventListener("click", function(){
    console.log("+3")
})

document.getElementById("reset-btn").addEventListener("click", function(){
    homeScore = 0
    guestScore = 0
})