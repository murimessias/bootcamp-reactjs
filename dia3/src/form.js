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
