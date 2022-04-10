
//creating Modal 
var modal = document.getElementById("myModal")
var btn = document.getElementById("answer")

//when the answer is submitted, the modal opens


function modalAppear() {
document.querySelector("#myModal").classList.remove("hide")
modal.style.display = "block";
}

btn.addEventListener("click", modalAppear);

//when the user clicks outside of the modal, the modal closes
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
};