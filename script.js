const komponen = new URL("./", document.currentScript.src);

fetch(new URL("komponen/header.html", komponen))
    .then(response => response.text())
    .then(data => {
        document.querySelector("header").innerHTML = data;

        var menuBtn = document.getElementById('menu-btn');
        var sidebar = document.getElementById('sidebar');

        menuBtn.addEventListener('click', function () {
            sidebar.classList.toggle('open');
        });

        var dropBtns = document.querySelectorAll('.drop-btn');
        dropBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var parentLi = btn.parentElement;

                document.querySelectorAll('.dropdown.open').forEach(function (item) {
                    if (item !== parentLi) item.classList.remove('open');
                });

                parentLi.classList.toggle('open');
            });
        });
        const container = document.querySelector(".container-profil");
        const fotoProfil = container.querySelector(".foto-profil");
        const images = fotoProfil.querySelectorAll("img");
        const prevBtn = container.querySelector(".prev");
        const nextBtn = container.querySelector(".next");

        let currentIndex = 0;
        const totalImages = images.length;
        const autoSlideDelay = 10000;

        let autoSlideInterval;

        function updateSlider() {
            const offset = -currentIndex * 100;
            fotoProfil.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalImages;
            updateSlider();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateSlider();
        }

        function startAutoSlide() {
            autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        prevBtn.onclick = () => {
            prevSlide();
            resetAutoSlide();
        };

        nextBtn.onclick = () => {
            nextSlide();
            resetAutoSlide();
        };

        updateSlider();
        startAutoSlide();
    });

fetch("../komponen/form.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("form").innerHTML = data;
    });

fetch("komponen/berita_umum.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("berita").innerHTML = data;
    });
fetch("komponen/lokasi-maps.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("lokasi").innerHTML = data;
    });

fetch(new URL("komponen/penutup.html", komponen))
    .then(response => response.text())
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });
