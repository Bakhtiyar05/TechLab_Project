document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.body.classList.add('page-enter');

        setTimeout(() => {
            document.body.classList.add('page-enter-active');
        }, 10);

        setTimeout(() => {
            window.location.href = href;
        }, 500);
        });
    });

    window.addEventListener('load', () => {
        document.body.classList.add('page-enter');
        setTimeout(() => {
        document.body.classList.add('page-enter-active');
        }, 10);
    });
