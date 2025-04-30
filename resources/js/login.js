// Clase ORM para cargar los datos desde el archivo JSON
document.addEventListener('DOMContentLoaded', async function () {
    const orm = new ORM('resources/js/users.json'); // ← ruta actualizada
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const users = await orm.getAll();
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                localStorage.setItem('isAuthenticated', 'true');
                messageDiv.innerHTML = "<p class='success'>Login Exitoso. Redirigiendo...</p>";
                setTimeout(() => {
                    window.location.href = 'success.html';
                }, 1000);
            } else {
                messageDiv.innerHTML = "<p class='error'>Usuario o contraseña incorrectos</p>";
            }
        } catch (error) {
            messageDiv.innerHTML = "<p class='error'>Error al validar</p>";
        }
    });
});
