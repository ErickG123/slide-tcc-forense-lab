let currentSlide = 1;
const totalSlides = 17;
const progressBar = document.getElementById('progress');
const slideNumber = document.getElementById('slide-number');

function updateUI() {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('active');
        if (parseInt(slide.dataset.id) === currentSlide) {
            slide.classList.add('active');
        }
    });

    const progress = (currentSlide / totalSlides) * 100;
    progressBar.style.width = `${progress}%`;

    slideNumber.innerText = `${String(currentSlide).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
}

function nextSlide() {
    if (currentSlide < totalSlides) {
        currentSlide++;
        updateUI();
    }
}

function prevSlide() {
    if (currentSlide > 1) {
        currentSlide--;
        updateUI();
    }
}

function goToSlide(n) {
    currentSlide = n;
    updateUI();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

updateUI();
