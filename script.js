
const swiper = new Swiper('.swiper', {
    spaceBetween: 16,
    slidesPerView: 'auto',
    freeMode: true,
    
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },

    breakpoints: {
        320: {
            enabled: true,
            spaceBetween: 16,
        },

        768: {
            enabled: false,
            spaceBetween: 24,
        },

        1120: {
            spaceBetween: 32, 
            enabled: false,
        },
    }
});



function showMore()  {
    let btnShowMore = document.querySelector('.button-showmore');
    let swiperMore = document.querySelector('.swiper-wrapper');

    if (swiperMore.style.overflow !== "visible") {
        swiperMore.style.overflow = "visible";
        swiperMore.style.height = "auto";
        btnShowMore.innerHTML = "Скрыть";
        btnShowMore.style.background = 'url(images/icon/expand-back.svg) no-repeat';
    } else {           
        swiperMore.style.overflow = "hidden";
        swiperMore.style.height = "173px";
        btnShowMore.innerHTML = "Показать все";
        btnShowMore.style.background = 'url(images/icon/expand.svg) no-repeat';
    }
  }





  





// function showMore() {
//     swiperStyle.overflow = (swiperStyle.overflow = "visible") ? "hidden" : "visible";
// }






// btnShowMore.onclick = () => {
    
//     if (swiperStyle.overflow == "hidden") {
//         btnStyle.textContent = 'Показать все';
//         btnStyle.background = "url('images/icon/expand.svg') no-repeat";
//     } else { 
//         btnStyle.textContent = 'Скрыть';
//         btnStyle.background = "url('images/icon/expand-back.svg') no-repeat";
//         swiperStyle.overflow = "visible";
//         swiperStyle.height = "100%";
//     }
// }
