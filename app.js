
// console.log
const responsiveNav=()=>{
  let burger = document.querySelector(".nav-burger");
  let nav = document.querySelector(".navigation");
  let [...navLinks] = document.querySelectorAll(".navigation li");
  // console.log(navLinks);
  burger.addEventListener("click", () => {
    navLinks.forEach((link,index)=>{
      if(link.style.animation){
        link.style.animation = "";
      }else{
        link.style.animation = `linkfade 0.5s ease forwards ${index/9 + 0.2}s`
        // link.style.animation = `transition all 1s ease`;
      }
    })
    nav.classList.toggle('nav-active');
    burger.classList.toggle("toggle");

  });
}

const fixCrazyLinks =()=>{
  let [...headers] = document.querySelectorAll(".header");
  let [...allLinks] = document.querySelectorAll(".navigation a");
  allLinks.find((link,index)=>{
    link.addEventListener("click",()=>{
      headers.find((header)=>{
        if(link.innerHTML == header.innerText){
          header.classList.add("headSpace");//this makes the current header have more padding space so it can be seen by the user
          setTimeout(()=>{
            header.classList.remove("headSpace");
          },10000);
        }else{
          header.classList.remove("headSpace");
        }
      })
     })
    })
}
// this js helps to fixed the navbar as we scroll thanks w3School for this
const stickyNav=()=>{
  window.onscroll = ()=>{
    addRemoveSticky();
  }
  let mainDoc = document.querySelector("#main-doc");
// get the navbar
  let navbar = document.querySelector("#navbar");
  // get the offset position of the navbar
  let sticky = navbar.offsetTop;
  // add the sticky class to the navbar when we reach its scroll position & remove the sticky class when we leave the scroll position
  const addRemoveSticky =()=>{
    if(window.pageYOffset >= sticky){
      navbar.classList.add("sticky");
    }else{
      navbar.classList.remove("sticky");
    }
  }
}

const app =()=>{
  responsiveNav();
  stickyNav();
  fixCrazyLinks();
}
app();
