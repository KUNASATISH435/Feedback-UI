const ratingEls =document.querySelectorAll(".rating");
const btnEl=document.getElementById("btn");
const containerEl=document.getElementById("container");

let selectedRating ="";
ratingEls.forEach((ratingE1)=>{
    ratingE1.addEventListener("click",(event)=>{
    removeactive();
    selectedRating=event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
    });
});

btnEl.addEventListener("click",()=>{
    if(selectedRating !==""){
        containerEl.innerHTML=`<strong>Thank you !</strong>
        <br>
        <br>
        <strong>${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
    }
})
function removeactive(){
    ratingEls.forEach((ratingE1)=>{
        ratingE1.classList.remove("active");
    });
}


