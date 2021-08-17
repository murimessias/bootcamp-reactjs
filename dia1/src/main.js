import "./style.css";

const app = document.querySelector('[data-js="app"]');
const link = document.querySelector('[data-js="link"]');

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Boot camp em React.js 😁</p>
`;

const visibility = {
  // Adicionar ao elemento o atributo display="block"
  show: (element) => {
    element.style.display = "block";
    element.style.visibility = "visible";
  },
  // Adicionar ao elemento o atributo display="none"
  hide: (element) => {
    element.style.display = "none";
    element.style.visibility = "hidden";
  },
};

// Verificar se o elemento possui display="block" ou display="none"
// Se estiver com display="block" e visibility="visible", executar hide(element).
// Se estiver com display="none" e visibility="invisible", executar show(element)
const toggle = (element) => {
  const isVisible =
    window.getComputedStyle(element).display === "block" &&
    window.getComputedStyle(element).visibility === "visible";
  isVisible ? visibility["hide"](element) : visibility["show"](element);
};

// Executar a função toggle() quando o usuário clicar no link,
// prevenindo a ação padrão que um clique realiza.
link.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    toggle(app);
  },
  false
);
