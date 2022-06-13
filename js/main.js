function toggle(){
  let header = document.getElementById('header');
  header.classList.toggle('active');
}


/* var link = document.querySelectorAll("link a");

link.onclick = function () { "use strict";
  link.classList.add("active");
  link.nextSibling.classList.remove("active");
} */


window.addEventListener('scroll', reveal);

function reveal() {
  let reveal = document.querySelectorAll('.reveal');

  reveal.forEach((r) => {
    let windowHeight = window.innerHeight;
    let revealTop = r.getBoundingClientRect().top;
    let revealPoint = 150;

    if(revealTop < windowHeight - revealPoint){
      r.classList.add('active');
    }else{
      r.classList.remove('active');
    }
    
  })
}





