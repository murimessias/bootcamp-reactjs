function $(selector) {
  return document.querySelector(selector);
}

const form = $('[data-js="cars-form"]');
const table = $('[data-js="table"]');

const getFormElement = (event) => (elementName) =>
  event.target.elements[elementName];

const elementTypes = {
  image: createImage,
  text: createText,
  color: createColor,
};

// Função para criar a imagem e adicionar à tabela.
function createImage(value) {
  const td = document.createElement("td");
  const img = document.createElement("img");
  img.src = value;
  img.width = 100;
  td.appendChild(img);
  return td;
}

// Função para criar a textContent e adicionar à tabela.
function createText(value) {
  const td = document.createElement("td");
  td.textContent = value;
  return td;
}

// Função para criar uma div com backgroundColor e adicionar à tabela.
function createColor(value) {
  const td = document.createElement("td");
  const div = document.createElement("div");
  div.style.width = "100px";
  div.style.height = "100px";
  div.style.backgroundColor = value;
  td.appendChild(div);
  return td;
}

// Função que ouvirá o evento de "submit" do formulário passando para
// o "tbody" o conteúdo digitados nos inputs.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const getElement = getFormElement(e);

  const elements = [
    { type: "image", value: getElement("image").value },
    { type: "text", value: getElement("brand-model").value },
    { type: "text", value: getElement("year").value },
    { type: "text", value: getElement("plate").value },
    { type: "color", value: getElement("color").value },
  ];

  const tr = document.createElement("tr");
  elements.forEach((element) => {
    const td = elementTypes[element.type](element.value);
    tr.appendChild(td);
  });

  table.appendChild(tr);
});
