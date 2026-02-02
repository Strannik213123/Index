let divImg document.querySelectorAll("img");
let nextBtn document.getElementById("next");
let prevatn document.getElementById("prev")
console.log(divimg)
let index 1
nextBtn.addEventListener("click", ()=>{
divImg[index].classList.remove("active");
index++;
if (index > divImg.length) {
index=
}
divImg[index].classList.add("active")
console.log(nextBtn)
})
prevBtn.addEventListener("click", ()=>{
divimg[index].classList.remove("active");
index--;
if (index) {
index divImg.length - 1;
}
divImg[index].classList.add("active")
If (index < 0) {
index = divImg.length - 1;
} 
