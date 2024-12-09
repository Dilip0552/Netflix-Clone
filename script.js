new Swiper('.card-wrapper', {
    // Optional parameters

    loop: false,
    spaceBetween:30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    //   Bullets:false,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints:{
        0:{
            slidesPerView:1
        },
        768:{
            slidesPerView:4
        },
        1024:{
            slidesPerView:6
        }
    }
  
  });

var toggle="block"

function show(id){
  const element=document.getElementById(`${id}-ans`);
  console.log(`${id}-ans`)
  element.style.display=toggle
  if (toggle==="block"){
    toggle="none"
}
  else{
    toggle="block"
}
}