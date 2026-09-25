const komponen = new URL("./", document.currentScript.src);

fetch(new URL("header.html", komponen))
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
    });

fetch("../komponen/form.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("form").innerHTML = data;
    });

fetch("../komponen/berita_umum.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("berita").innerHTML = data;
    });

fetch(new URL("penutup.html", komponen))
    .then(response => response.text())
    .then(data => {
        document.querySelector("footer").innerHTML = data;
    });
