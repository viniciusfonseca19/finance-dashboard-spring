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
        return { success: false, message: "Usuário já cadastrado. Faça login." };
    }

    const newUser = {
        name,
        email,
        password,
        balance: 0,
        transactions: []
    };

    users.push(newUser);
    saveUsers(users);

    localStorage.setItem("loggedUser", JSON.stringify(newUser));
    return { success: true };
}

// LOGIN
function loginUser(email, password) {
    const users = getUsers();

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return {
            success: false,
            message: "Usuário não encontrado. Cadastre-se primeiro."
        };
    }

    localStorage.setItem("loggedUser", JSON.stringify(user));
    return { success: true };
}

// USUÁRIO LOGADO
function getLoggedUser() {
    return JSON.parse(localStorage.getItem("loggedUser"));
}

// ATUALIZA USUÁRIO
function updateLoggedUser(updatedUser) {
    let users = getUsers();

    users = users.map(u =>
        u.email === updatedUser.email ? updatedUser : u
    );

    saveUsers(users);
    localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
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
