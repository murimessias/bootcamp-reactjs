const input = document.querySelector('[data-js="username"]');

const dontChange = ["da", "das", "de", "do", "dos"];

// Executar a função de ouvir o evento de digitação
// do input e fazer a manipulação para "Title Case" excluindo
// as palavras que não precisam serem mudadas
input.addEventListener("input", (e) => {
  const valueAsArray = e.target.value.split(" ");
  e.target.value = valueAsArray
    .map((word) => {
      return dontChange.includes(word.toLowerCase())
        ? word.toLowerCase()
        : fixCase(word);
    })
    .join(" ");
});

// Função para trocar o primeiro caractere para maiúsculo
// e deixar o restante em minúsculo
function fixCase(word) {
  return `${word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()}`;
}

// Criação do formulário e o campo de select.
const form = document.querySelector('[data-js="form"]');
const select = document.createElement("select");
const colors = ["#ef2", "#3f3f", "#02f", "#d0f", "#0fd", "#a3a"];
const colorsContainer = document.createElement("div");
colorsContainer.style.display = "flex";

// Criar a option a partir do Array "colors" iterando
// sobre cada cor existente e colocando "value" e "textContent"
colors.forEach((color) => {
  const option = createOption(color);
  select.appendChild(option);
});

// Executar a função de ouvir quando uma opção for selecionada
// e criar uma div com a cor selecionada
select.addEventListener("change", (e) => {
  colorsContainer.innerHTML = "";

  Array.from(e.target.selectedOptions).forEach((option) => {
    const div = createDivColor(option.value);
    colorsContainer.appendChild(div);
  });
});

// Função para criar a div que vai receber o valor selecionado
function createDivColor(value) {
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.background = value;
  return div;
}

// Função para criar o option dentro do select
function createOption(color) {
  const option = document.createElement("option");
  option.value = color;
  option.textContent = color;
  return option;
}

select.setAttribute("multiple", "");
form.appendChild(select);
form.appendChild(colorsContainer);
