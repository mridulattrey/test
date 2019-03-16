function allp(){
    window.location.href="html/bloglist.html";
}
var crmodal = document.getElementById('createModal');

// Get the button that opens the modal
var crbtn = document.getElementById("createBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("closecr");
// When the user clicks the button, open the modal 
crbtn.onclick = function() {
  crmodal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  crmodal.style.display = "none";
   
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    crmodal.style.display = "none";
  }
}
var span1 = document.getElementById("closeBt");
span1.onclick = function() {
  crmodal.style.display = "none";
   
}