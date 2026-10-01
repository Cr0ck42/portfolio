    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>


        const carouselElement = document.getElementById('hoverCarousel');

        const carousel = new bootstrap.Carousel(carouselElement, {
            interval: 2000,
            ride: false,
            pause: false
        });

        carouselElement.addEventListener('mouseenter', () => {
            carousel.cycle();
        });

        carouselElement.addEventListener('mouseleave', () => {
            carousel.pause();
        });
