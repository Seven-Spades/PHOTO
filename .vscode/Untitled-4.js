// Filtres Portfolio
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Modal Portfolio
    const modal = document.getElementById('photo-modal');
    const modalImg = document.getElementById('modal-img');
    const modalText = document.getElementById('modal-text');
    const closeModal = document.querySelector('.close-modal');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const portfolioImgs = document.querySelectorAll('.portfolio-img');
    let currentIndex = 0;

    portfolioImgs.forEach((img, index) => {
        img.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalImg.src = img.src;
            modalText.textContent = img.nextElementSibling.textContent;
            currentIndex = index;
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + portfolioImgs.length) % portfolioImgs.length;
        modalImg.src = portfolioImgs[currentIndex].src;
        modalText.textContent = portfolioImgs[currentIndex].nextElementSibling.textContent;
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % portfolioImgs.length;
        modalImg.src = portfolioImgs[currentIndex].src;
        modalText.textContent = portfolioImgs[currentIndex].nextElementSibling.textContent;
    });

    // Fermer modal avec Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
});
