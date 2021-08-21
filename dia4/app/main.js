import "./style.css";

function $(selector) {
  return document.querySelector(selector);
}

const url = "http://localhost:3333/cars";
const table = $('[data-js="table"]');
const form = $('[data-js="cars-form"]');

const getFormElement = (event) => (elementName) =>
  event.target.elements[elementName];

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor,
};

function createImage(value) {
  const td = document.createElement("td");
  const img = document.createElement("img");
  img.src = value;
  img.width = 100;
  td.appendChild(img);
  return td;
}

function createText(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

function createColor(value) {
  const td = document.createElement("td");
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = value;
  td.appendChild(div);
  return td;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const getElement = getFormElement(e);

  const data = {
    image: getElement("image").value,
    brandModel: getElement("brand-model").value,
    year: getElement("year").value,
    plate: getElement("plate").value,
    color: getElement("color").value,
  };

  createTableRow(data);

  e.target.reset();
  image.focus();
});

// Função para criação de linha com os dados inseridos
// no formulário ou que já estão na API
function createTableRow(data) {
  const tr = document.createElement("tr");

  const elements = [
    { type: "image", value: data.image },
    { type: "text", value: data.brandModel },
    { type: "text", value: data.year },
    { type: "text", value: data.plate },
    { type: "color", value: data.color },
  ];

  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  });

  table.appendChild(tr);
}

// Função de criação de linha com erro para ser exibida na tabela
function createNoCarRow(message) {
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  const ths = document.querySelectorAll("table th");
  td.setAttribute("colspan", ths.length);
  td.textContent = message;

  tr.appendChild(td);
  table.appendChild(tr);
}

async function main() {
  const result = await fetch(url)
    .then((r) => r.json())
    .catch((e) => ({ error: true, message: e.message }));

  if (result.error) {
    console.log("Erro ao buscar carros", result.message);
    return;
  }

  // Executar função para exibir mensagem avisando que não
  // há nenhum carro cadastrado.
  if (result.length === 0) {
    createNoCarRow("Nenhum carro encontrado!");
  }

  // Quando resultado for obtido com sucesso, executar a função
  // de criação de linha da tabela para cada resultado obtido.
  result.forEach(createTableRow);
}

main();
