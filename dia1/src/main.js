import "./style.css";

const app = document.querySelector('[data-js="app"]');
const link = document.querySelector('[data-js="link"]');

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Boot camp em React.js 😁</p>
`;

// Adicionar a classe "hide" ao realizar o clique no link
link.addEventListener(
  "click",
  (e) => {
    e.preventDefault();
    app.classList.toggle("hide");
  },
  false
);
