(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  function baseUrl(path) {
    // Resolve relative to this page so it works both at the domain root
    // and under a GitHub Pages project subpath (username.github.io/repo/).
    return new URL(path, document.baseURI).toString();
  }

  function renderBooks(books) {
    const container = document.getElementById("books-list");
    container.innerHTML = "";
    books.forEach(function (book) {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML =
        '<img class="card__cover" src="' + book.cover + '" alt="Capa do livro ' + book.title + '" />' +
        '<div class="card__body">' +
        '<h3 class="card__title">' + book.title + "</h3>" +
        '<p class="card__description">' + book.description + "</p>" +
        '<a class="btn btn--gold" href="' + book.file + '" download>Baixar livro</a>' +
        "</div>";
      container.appendChild(card);
    });
  }

  function loadJson(path) {
    return fetch(baseUrl(path)).then(function (response) {
      if (!response.ok) {
        throw new Error("Falha ao carregar " + path);
      }
      return response.json();
    });
  }

  loadJson("assets/data/books.json")
    .then(renderBooks)
    .catch(function () {
      document.getElementById("books-list").innerHTML =
        '<p class="cards__loading">Não foi possível carregar os livros no momento.</p>';
    });
})();
