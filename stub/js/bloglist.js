var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("signButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
   
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("signInButton");

// Get the <span> element that closes the modal
var span1 = document.getElementById("closein");
// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";

}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
   
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
var link=document.getElementById("signLink");
link.onclick = function(){
    modal.style.display = "block";
    modal1.style.display = "none";
}

function allp(){
    window.location.replace("html/bloglist.html")
}
var mod = document.getElementById('modid');
var trash = document.getElementsByClassName('bin');
trash[0].onclick = function(){
    mod.style.display = "block";
}

trash[1].onclick = function(){
    mod.style.display = "block";
}

trash[2].onclick = function(){
    mod.style.display = "block";
}

trash[3].onclick = function(){
    mod.style.display = "block";
}

trash[4].onclick = function(){
    mod.style.display = "block";
}

var no = document.getElementById('noBtn');
no.onclick = function(){
    mod.style.display = "none";
}
function post(){
    window.location.href="post.html";
}