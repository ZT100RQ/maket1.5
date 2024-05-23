
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


let btnShowMore = document.querySelector('.button-showmore');
let swiperMore = document.querySelector('.swiper-wrapper');

btnShowMore.addEventListener('click', function(){
    if(btnShowMore.innerHTML !== "Скрыть") {
        btnShowMore.innerHTML = "Скрыть";
        btnShowMore.classList.add('button-showmore--hidden')
        swiperMore.classList.add('swiper-wrapper--visible'); 
    } else {
        btnShowMore.innerHTML = "Показать все";
        btnShowMore.classList.remove('button-showmore--hidden')
        swiperMore.classList.remove('swiper-wrapper--visible');
    }
});
