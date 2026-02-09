// ===== DASHBOARD.JS =====

// Saldo inicial
let balance = 0;

// Elementos
const balanceEl = document.getElementById("currentBalance");
const newBalanceInput = document.getElementById("newBalance");
const updateBtn = document.getElementById("updateBalanceBtn");

// Formata para Real (BR)
function formatCurrency(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

// Atualiza o saldo na tela
function renderBalance() {
  balanceEl.textContent = formatCurrency(balance);
}

// Evento do botão
updateBtn.addEventListener("click", () => {
  const value = parseFloat(newBalanceInput.value);

  if (isNaN(value)) {
    alert("Digite um valor válido!");
    return;
  }

  balance = value;
  renderBalance();

  newBalanceInput.value = "";
});

// Inicializa
renderBalance();
