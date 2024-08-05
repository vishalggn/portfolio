let featuresMenu = document.querySelector(".features-menu")
let companyMenu = document.querySelector(".company-menus")
let featuresMenuHere = document.querySelector("#featuremenuhere")
let companyMenuHere = document.querySelector("#companymenuhere")
let dropDown1 = document.querySelector(".dropdown1")
let dropDown2 = document.querySelector(".dropdown2")
let arrowDown1 = document.querySelector(".arrow-down1")
let arrowDown2 = document.querySelector(".arrow-down2")
let menuIcon = document.querySelector(".menu-icon")
let header = document.querySelector(".mobile-header")

dropDown1.addEventListener("mouseover", function() {
    featuresMenu.style.display = "flex"  
    arrowDown1.classList.add("arrow-movement")
})

dropDown1.addEventListener("mouseout", function() {
    featuresMenu.style.display = "none"
    arrowDown1.classList.remove("arrow-movement")
})

dropDown2.addEventListener("mouseover", function() {
    companyMenu.style.display = "flex"  
    arrowDown2.classList.add("arrow-movement")
})

dropDown2.addEventListener("mouseout", function() {
    companyMenu.style.display = "none"
    arrowDown2.classList.remove("arrow-movement")
})

menuIcon.addEventListener('click', function() {
    menuIcon.classList.toggle('active')
    header.classList.toggle('active')
})
