function show(){
document.getElementById("phone").style.right = "0"

}
function hide(){
document.getElementById("phone").style.right = "-100%"

}
var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 10,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

 