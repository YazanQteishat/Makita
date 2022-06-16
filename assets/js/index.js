function open_menu(){
  document.getElementById("menu").classList.add("show_menu");
  document.getElementById("menu_mob_footer").classList.add("show_menu");
  document.getElementById("menu").classList.remove("hide_menu");
  document.getElementById("menu_mob_footer").classList.remove("hide_menu");
}

function close_menu(){
  document.getElementById("menu").classList.add("hide_menu");
  document.getElementById("menu_mob_footer").classList.add("hide_menu");
  document.getElementById("menu").classList.remove("show_menu");
  document.getElementById("menu_mob_footer").classList.remove("show_menu");

}

//slider functions
let dots = document.getElementsByClassName('slide_btn'),
    dotsArea = document.getElementById('slider_list'),
    slides = document.getElementsByClassName('slider-item'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('slide_active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('slide_active');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n)
}

dotsArea.onclick = function (e) {

  for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('slide_btn') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
}
const d = new Date();
let year = d.getFullYear();
document.getElementById("copyright-year").innerHTML =year;
