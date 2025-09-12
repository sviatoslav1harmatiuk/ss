/*----------------------------Burger-Menu-----------------------------------*/
const burgerMenu = document.getElementById('burgerMenu');
const open_icon = document.getElementById('open-icon');
const close_icon = document.getElementById('close-icon');
const header_now = document.getElementById('header-nav');

burgerMenu.addEventListener('click', () => {
    open_icon.classList.toggle('d-none');
    close_icon.classList.toggle('d-none');
    header_now.classList.toggle('header-nav--open');
});
/*-------------------------Scroll-Animation-----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const elementsToScale = document.querySelectorAll('.scale-scroll');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const intersectionCallback = (entries, observer) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
    };
    
    const observer = new IntersectionObserver(intersectionCallback, observerOptions);

    elementsToScale.forEach(element => {
        observer.observe(element);
    });
});

/*----------------------------Modal-Window-----------------------------------*/

const open_modal_window = document.getElementById('open-modal-window');
const modal = document.getElementById('contact-modal');
const close_modal_screen = modal.querySelector('.modal-close');
const overlay = modal.querySelector('.modal-overlay');

document.addEventListener("DOMContentLoaded", () => {

    const open_modal = (event) => {
        event.preventDefault(); 
        modal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    };
   
    const close_modal = () => {
        modal.classList.remove('is-open');
        document.body.style.overflow = ''; 
    };

    
    if (open_modal_window && modal) {
        open_modal_window.addEventListener('click', open_modal);
        close_modal_screen.addEventListener('click', close_modal);
        overlay.addEventListener('click', close_modal);        
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.classList.contains('is-open')) {
                close_modal();
            }
        });
    }
});
/*----------------------------Sticky-Header----------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    
    const header = document.getElementById('main-header');
    
    if (header) {
        const colorStart = [255, 255, 255];
        const colorEnd = [205, 162, 116];
        
        const scrollDistance = 8000; 
        
        const stickyPoint = header.offsetTop - 40;

        const lerpColor = (colorA, colorB, amount) => {
            const r = Math.round(colorA[0] + (colorB[0] - colorA[0]) * amount);
            const g = Math.round(colorA[1] + (colorB[1] - colorA[1]) * amount);
            const b = Math.round(colorA[2] + (colorB[2] - colorA[2]) * amount);
            return `rgb(${r}, ${g}, ${b})`;
        };

        const handle_scroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > stickyPoint) {
                header.classList.add('header--scrolled');
            } else {
                header.classList.remove('header--scrolled');
            }
            const progress = Math.min(scrollY / scrollDistance, 1);
            const newColor = lerpColor(colorStart, colorEnd, progress);
            header.style.backgroundColor = newColor;
        };        
        window.addEventListener('scroll', handle_scroll);
    }    
});