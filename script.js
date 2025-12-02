let currentSlide = 1;
const totalSlides = 19;
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

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

document.addEventListener('fullscreenchange', () => {
    const btn = document.getElementById('fullscreen-btn');
    const icon = btn.querySelector('i');
    if (document.fullscreenElement) {
        icon.classList.remove('fa-expand');
        icon.classList.add('fa-compress');
    } else {
        icon.classList.remove('fa-compress');
        icon.classList.add('fa-expand');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === 'Space') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
});

updateUI();
