document.addEventListener("DOMContentLoaded", () => {
  const currentBalanceEl = document.getElementById("currentBalance");
  const newBalanceInput = document.getElementById("newBalance");
  const updateBalanceBtn = document.getElementById("updateBalanceBtn");

  updateBalanceBtn.addEventListener("click", () => {
    const value = Number(newBalanceInput.value);

    if (isNaN(value) || newBalanceInput.value.trim() === "") {
      alert("Digite um valor válido");
      return;
    }

    currentBalanceEl.textContent =
      `R$ ${value.toFixed(2).replace(".", ",")}`;

    newBalanceInput.value = "";
  });
});
