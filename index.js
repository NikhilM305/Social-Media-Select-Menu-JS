const menuEl=document.querySelector(".menu")
const menuTextEl=document.querySelector(".menu p")
const socialListEl=document.querySelector(".social-lists")
const liELS=document.querySelectorAll(".social-lists li")



menuEl.addEventListener("click",()=>{
socialListEl.classList.toggle("hide")
menuEl.classList.toggle("rotate")
})

liELS.forEach((liEl)=>{
liEl.addEventListener("click",()=>{
menuTextEl.innerHTML = liEl.innerHTML;
socialListEl.classList.toggle("hide")
menuEl.classList.toggle("rotate")
})


})

// for(let i=0;i<liELS.length;i++){

//     liELS[i].addEventListener("click",()=>{
//         menuTextEl.innerHTML = liELS[i].innerHTML;

//     })
// }