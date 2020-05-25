const leftMenu = document.querySelector('.left-menu');
const hamburger = document.querySelector('.hamburger');

const tvCard = document.querySelectorAll('.tv-card__img');


hamburger.addEventListener('click', () => {
    
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
});

document.addEventListener('click', (event) => {

    if (!event.target.closest('.left-menu')) {
        
        leftMenu.classList.remove('openMenu');
        hamburger.classList.remove('open');
    }
});

leftMenu.addEventListener('click', event =>{

    const target = event.target;
    const dropdown = target.closest('.dropdown');

    if (dropdown) {

        dropdown.classList.toggle('active');
        leftMenu.classList.add('openMenu');
        hamburger.classList.add('open');
    }
});


tvCard.forEach(tvCard => {

    let orImge = tvCard.src;
    let chImage = tvCard.getAttribute('data-backdrop');
    

    tvCard.addEventListener('mouseover', e =>{

        tvCard.src = chImage;
       
    });
    tvCard.addEventListener('mouseleave', e =>{
    
        tvCard.src = orImge;
    
    });
});
