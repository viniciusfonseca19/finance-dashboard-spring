const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const credentials = btoa(`${email}:${password}`);

  try {
    const response = await fetch("http://localhost:8080/api/health", {
      method: "GET",
      headers: {
        "Authorization": `Basic ${credentials}`
      }
    });

    if (response.ok) {
      alert("Login realizado com sucesso ✅");
      window.location.href = "dashboard.html";
    } else {
      alert("Email ou senha inválidos ❌");
    }

  } catch (error) {
    alert("Erro ao conectar com o servidor");
    console.error(error);
  }
});
