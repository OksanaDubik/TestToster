let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

//timer
let getNow = new Date().getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let countDownDate = getNow + 86400000;
    let distance = countDownDate - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML =
         hours + ": " + minutes + ": " + seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);


//price

let oldPrice = document.getElementById("oldPrice").innerText;

let action = 64


mewPrice = (oldPrice * action) / 100
console.log(mewPrice.toFixed(2))
document.getElementById("newPrice").innerHTML = mewPrice.toFixed(2);

//stars
const ratings = document.querySelectorAll(".rating");

if (ratings.length > 0) {
    initRatings();
}

function initRatings() {
    let ratingActive, ratingValue;
    for (let i = 0; i < ratings.length; i++) {
        const rating = ratings[i];
        initRating(rating);
    }

    function initRating(rating) {
        initRatingVars(rating);

        setRatingActiveWidth();
        if (rating.classList.contains('rating_set')) {
            setRating(rating);
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
        const ratingActiveWidth = index / 0.1;

        ratingActive.style.width = `${ratingActiveWidth}%`
    }

    function setRating(rating) {
        const ratingItems = rating.querySelectorAll('.rating__item');
        for (let i = 0; i < ratingItems.length; i++) {
            const ratingItem = ratingItems[i];
            ratingItem.addEventListener("mouseenter", function (e) {
                initRatingVars(rating);
                setRatingActiveWidth(ratingItem.value);
            });
            ratingItem.addEventListener("mouseleave", function (e) {

                setRatingActiveWidth();
            })
            ratingItem.addEventListener('click', function (e) {
                initRatingVars(rating);
                ratingValue.innerHTML = (i + 1)*2;
                setRatingActiveWidth();
            })
        }
    }
}

