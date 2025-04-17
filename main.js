/* Change page animation */

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        document.main.classList.add('page-enter');

        setTimeout(() => {
            document.main.classList.add('page-enter-active');
        }, 10);

        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

window.addEventListener('load', () => {
    document.main.classList.add('page-enter');
    setTimeout(() => {
    document.main.classList.add('page-enter-active');
    }, 100);
});



/* Preloader */

window.addEventListener('load', function () {
    setTimeout(() => {
        document.getElementById('preloader').style.display = 'none';
    }, 1500);
});




/* Navbar menu */

const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");

burgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
    burgerMenu.classList.toggle("is-active");
});

const dropdownn = document.querySelectorAll(".dropdownn");

dropdownn.forEach((item) => {
    const dropdownnToggle = item.querySelector(".dropdownn-toggle");

    dropdownnToggle.addEventListener("click", () => {
        const dropdownnShow = document.querySelector(".dropdownn-show");
        toggledropdownnItem(item);

        if (dropdownnShow && dropdownnShow != item) {
            toggledropdownnItem(dropdownnShow);
        }
    });
});

const toggledropdownnItem = (item) => {
    const dropdownnContent = item.querySelector(".dropdownn-content");

    if (item.classList.contains("dropdownn-show")) {
        dropdownnContent.removeAttribute("style");
        item.classList.remove("dropdownn-show");
    } else {
        dropdownnContent.style.height = dropdownnContent.scrollHeight + "px";
        item.classList.add("dropdownn-show");
    }
};

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        document.querySelectorAll(".dropdownn-content").forEach((item) => {
            item.removeAttribute("style");
        });
        dropdownn.forEach((item) => {
            item.classList.remove("dropdownn-show");
        });
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
            burgerMenu.classList.remove("is-active");
        }
    }
});