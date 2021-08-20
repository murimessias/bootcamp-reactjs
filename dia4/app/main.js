import "./style.css";

function $(selector) {
  return document.querySelector(selector);
}

const table = $('[data-js="table"]');

function setError(message) {
  const td = document.createElement("td");
  const tr = document.createElement("tr");
  td.textContent = message;
  tr.appendChild(td);
  table.appendChild(tr);
}

function displayData(data) {
  const div = document.createElement("div");
  div.textContent = data;
  table.appendChild(div);
}

const url = "http://localhost:3333/cars";

async function getCars(url, data) {
  const result = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return result.json();
}

getCars(url).then((result) => {
  result.length === 0
    ? setError("Nenhum carro encontrado!")
    : displayData(result);
});
