let menue=document.querySelector("#bars")
let nav=document.querySelector(".navbar")
// let search=document.querySelector("#search-box")
let search=document.querySelector("#search-icon")


menue.onclick = () =>{
    menue.classList.toggle("fa-times")
    nav.classList.toggle('active')
}
window.onscroll = () =>{
    menue.classList.remove("fa-times")
    nav.classList.remove('active')
}
search.onclick=() => {
    let searchform=document.querySelector("#search-form")
    searchform.classList.toggle('active')
}
document.querySelector("#close").onclick=() => {
    let searchform=document.querySelector("#search-form")
    searchform.classList.remove('active')
}
// searchform.onfocus=()=>{
//     document.querySelector("input").ariaPlaceholder=""
// }



var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // loop:true,
  });



  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints:{
      0:{
        slidesPerView:1,
      },
      640:{
        slidesPerView:2,
      },
      768:{
        slidesPerView:2,
      },
      1024:{
        slidesPerView:3,
      },
    },
  });


  function fadein(){
    document.querySelector(".loader-container").classList.add("fadein")
  }
  function fadeout(){
    setInterval(fadein, 3000);
  }
  window.onload=fadeout()


let links=document.querySelectorAll("nav a")


  links.forEach(function(ele){

    ele.onclick=function(){


      links.forEach(function(elem){
        elem.classList.remove("active")
      })

      this.classList.add("active")

    }

  })