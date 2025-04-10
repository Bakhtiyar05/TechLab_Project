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




// Toggle to show and hide navbar menu
const navbarMenu = document.getElementById("menu");
const burgerMenu = document.getElementById("burger");

burgerMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
    burgerMenu.classList.toggle("is-active");
});

// Toggle to show and hide dropdownn menu
const dropdownn = document.querySelectorAll(".dropdownn");

dropdownn.forEach((item) => {
    const dropdownnToggle = item.querySelector(".dropdownn-toggle");

    dropdownnToggle.addEventListener("click", () => {
        const dropdownnShow = document.querySelector(".dropdownn-show");
        toggledropdownnItem(item);

        // Remove 'dropdownn-show' class from other dropdownn
        if (dropdownnShow && dropdownnShow != item) {
            toggledropdownnItem(dropdownnShow);
        }
    });
});

// Function to display the dropdownn menu
const toggledropdownnItem = (item) => {
    const dropdownnContent = item.querySelector(".dropdownn-content");

  // Remove other dropdownn that have 'dropdownn-show' class
    if (item.classList.contains("dropdownn-show")) {
        dropdownnContent.removeAttribute("style");
        item.classList.remove("dropdownn-show");
    } else {
        // Added max-height on active 'dropdownn-show' class
        dropdownnContent.style.height = dropdownnContent.scrollHeight + "px";
        item.classList.add("dropdownn-show");
    }
};

// Fixed dropdownn menu on window resizing
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

// Fixed navbar menu on window resizing
window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.classList.remove("is-active");
            burgerMenu.classList.remove("is-active");
        }
    }
});