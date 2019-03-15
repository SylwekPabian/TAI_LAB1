let nav = '<ul class="nav nav-pills">' +
    '<li class="nav-item">' +
        '<a class="nav-link" href="index.html">Home</a>' +
    '</li>' +
    '<li class="nav-item">' +
        '<a class="nav-link" href="#">Blog</a>' +
    '</li>' +
    '<li class="nav-item">' +
        '<a class="nav-link" href="quiz.html">Quiz</a>' +
    '</li>' +
    '<li class="nav-item">' +
        '<a class="nav-link" href="contact.html">Kontakt</a>' +
    '</li>';

let elem = document.querySelector(".navbar");

elem.innerHTML = nav;