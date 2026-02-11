// auth.js

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// REGISTRO
function registerUser(name, email, password) {
    const users = getUsers();

    const exists = users.some(user => user.email === email);
    if (exists) {
        return { success: false, message: "Usuário já existe" };
    }

    users.push({
        name,
        email,
        password // no hash
    });

    saveUsers(users);
    return { success: true };
}

// LOGIN
function loginUser(email, password) {
    const users = getUsers();

    const userExists = users.find(u => u.email === email);

    if (!userExists) {
        return {
            success: false,
            message: "Usuário não encontrado. Faça o cadastro primeiro."
        };
    }

    if (userExists.password !== password) {
        return {
            success: false,
            message: "Senha incorreta."
        };
    }

    localStorage.setItem("loggedUser", JSON.stringify(userExists));
    return { success: true };
}

// VERIFICA LOGIN
function isAuthenticated() {
    return localStorage.getItem("loggedUser") !== null;
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
}
