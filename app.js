const navigation = document.querySelector(".navigation");
const burger = document.querySelector(".burger");
const navLinks = [...document.querySelectorAll(".nav-link")];

// this function adds the animation css class to whatever link was passed to it
function animateLinks(links){
  links.forEach((link,index)=>{
    if(link.style.animation){
      link.style.animation = "";
    }else{
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 20 + 0.3}s`;
    }
  })
}
// this othe function lets the user close the nav bar when the user clicks on any nav link item
function toggleNavFromLink(navLinks){
  navLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
      navigation.classList.toggle("nav-active");
      // this line of code animates the links as they enter onto the display
      animateLinks(navLinks);
      burger.classList.toggle("toggle");
    });
  });
}
// this function does the main work of calling the other functions
const navSlide = ()=>{
  burger.addEventListener("click",()=>{
    navigation.classList.toggle("nav-active");
    animateLinks(navLinks);
    burger.classList.toggle("toggle");
  });
  // this toggles the responsive nav bar from the nav link
  toggleNavFromLink(navLinks);
}
navSlide();