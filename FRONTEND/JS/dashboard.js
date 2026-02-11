document.addEventListener("DOMContentLoaded", () => {

  // VERIFICA LOGIN
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));

  if (!loggedUser) {
    window.location.href = "login.html";
    return;
  }

  // ESTADO INICIAL DO USUÁRIO
  let balance = loggedUser.balance ?? 0;
  let transactions = loggedUser.transactions ?? [];

  // ELEMENTOS
  const balanceEl = document.getElementById("currentBalance");
  const newBalanceInput = document.getElementById("newBalance");
  const updateBalanceBtn = document.getElementById("updateBalanceBtn");

  const amountInput = document.getElementById("amount");
  const typeSelect = document.getElementById("type");
  const addTransactionBtn = document.getElementById("addTransactionBtn");

  const historyList = document.getElementById("transactionHistory");

  // ATUALIZA SALDO NA TELA
  function updateBalanceUI() {
    balanceEl.innerText = balance.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
  }

  // SALVA DADOS DO USUÁRIO
  function saveUserData() {
    loggedUser.balance = balance;
    loggedUser.transactions = transactions;

    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map(user =>
      user.email === loggedUser.email ? loggedUser : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }

  // ATUALIZAR SALDO MANUALMENTE
  updateBalanceBtn.addEventListener("click", () => {
    const value = parseFloat(newBalanceInput.value);

    if (isNaN(value)) {
      alert("Digite um valor válido");
      return;
    }

    balance = value;
    updateBalanceUI();
    saveUserData();

    newBalanceInput.value = "";
  });

  // ADICIONAR TRANSAÇÃO
  addTransactionBtn.addEventListener("click", () => {
    const amount = parseFloat(amountInput.value);
    const type = typeSelect.value;

    if (isNaN(amount) || amount <= 0) {
      alert("Digite um valor válido");
      return;
    }

    if (type === "income") {
      balance += amount;
    } else {
      balance -= amount;
    }

    transactions.unshift({
      amount,
      type,
      date: new Date().toLocaleString("pt-BR")
    });

    updateBalanceUI();
    renderTransactions();
    saveUserData();

    amountInput.value = "";
  });

  // RENDERIZA HISTÓRICO
  function renderTransactions() {
    if (!historyList) return;

    historyList.innerHTML = "";

    if (transactions.length === 0) {
      historyList.innerHTML = "<li>Nenhuma transação registrada</li>";
      return;
    }

    transactions.forEach(tx => {
      const li = document.createElement("li");
      li.classList.add("transaction-item", tx.type);

      const sign = tx.type === "income" ? "+" : "-";

      li.innerHTML = `
        <span>${tx.date}</span>
        <strong>${sign} ${tx.amount.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}</strong>
      `;

      historyList.appendChild(li);
    });
  }

  // INIT
  updateBalanceUI();
  renderTransactions();
});
