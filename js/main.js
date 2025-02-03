const burger = document.querySelector('.burger__menu');
const burgerEng = document.querySelectorAll('.burger__menu')[1];
const navMenu = document.querySelector('.menu__list');
const navMenuEng = document.querySelectorAll('.menu__list')[1];
const burgerActive = document.querySelector('.burger--active');
const burgerActiveEng = document.querySelectorAll('.burger--active')[1];
const socialMenu = document.querySelector('.social__menu-mobile');
const socialMenuEng = document.querySelectorAll('.social__menu-mobile')[1];

burger.addEventListener('click', () => {
    burger.classList.add('burger--active')
    socialMenu.classList.add('social__menu-mobile--active')
    navMenu.classList.toggle('menu--active');
    if (navMenu.classList.contains('menu--active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = '';
        burger.classList.remove('burger--active')
        socialMenu.classList.remove('social__menu-mobile--active')
    }

});
burgerEng.addEventListener('click', () => {
    burgerEng.classList.add('burger--active')
    socialMenuEng.classList.add('social__menu-mobile--active')
    navMenuEng.classList.toggle('menu--active');
    if (navMenuEng.classList.contains('menu--active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = '';
        burgerEng.classList.remove('burger--active')
        socialMenuEng.classList.remove('social__menu-mobile--active')
    }

});
const property = document.querySelectorAll('.main__wrapper-text');
function deleteProperty() {
    property.forEach(item => {
        item.style.webkitTextFillColor = 'rgba(70,70,70,0)'
        item.style.backgroundSize = '100%' 
    })
}
setTimeout(deleteProperty, 3500);

const ru = document.querySelectorAll('.lang-btn')[2];
const eng = document.querySelectorAll('.lang-btn')[1];
const pageRu = document.querySelector('.ru');
const pageEng = document.querySelector('.eng');
ru.addEventListener('click', (e) => {
    e.preventDefault();
    pageRu.classList.add('active');
    pageRu.classList.remove('hide');
    pageEng.classList.add('hide');
    pageEng.classList.remove('active');

})
eng.addEventListener('click', (e) => {
    e.preventDefault();
    pageEng.classList.add('active');
    pageEng.classList.remove('hide');
    pageRu.classList.add('hide');
    pageRu.classList.remove('active');

})



const trigger = document.querySelectorAll('.services__box');
const infoWrapper = document.querySelectorAll('.hidden__info-wrapper');
const closeBtn = document.querySelectorAll('.close-btn');
const servicesImg = document.querySelectorAll('.services__img');


function hideWrapperContent() {
    infoWrapper.forEach(item => {
        item.classList.remove('hidden__info-wrapper--active')
    });
};

function showWrapperContent(i = 0) {
    infoWrapper[i].classList.add('hidden__info-wrapper--active')
};

trigger.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        servicesImg.forEach((img, i) => {
            if (e.target == img) {
                hideWrapperContent();
                showWrapperContent(i);

            }


        })
    })
    infoWrapper.forEach(item => {
        item.style.overflowY = 'scroll'
    })
});
closeBtn.forEach(item => {
    item.addEventListener('click', () => {
        hideWrapperContent();
    })
});
document.addEventListener('keydown', (e) => {
    infoWrapper.forEach(item => {
        if (e.code === "Escape" && item.classList.contains('hidden__info-wrapper--active')) {
            hideWrapperContent();
        }
    })
});

const services = document.querySelectorAll('.services')

window.addEventListener('click', (e) => {
    services.forEach(item => {
        if (e.target ==  item) {
            hideWrapperContent();
        }
    })
    
    
});
window.addEventListener('click', (e) => {
    if (e.target ==  pageRu || e.target == pageEng) {
        hideWrapperContent();
    }
});