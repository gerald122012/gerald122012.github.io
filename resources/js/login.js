// Clase ORM para cargar los datos desde el archivo JSON
class ORM {
    constructor(path) {
        this.path = path;
    }

    async getAll() {
        try {
            const response = await fetch(this.path);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error al cargar datos del ORM:', error);
            throw error;
        }
    }
}

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', async function () {
    const orm = new ORM('assets/js/users.json'); // Ruta al archivo JSON con los usuarios
    const form = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            // Obtener todos los usuarios
            const users = await orm.getAll();
            const user = users.find(u => u.username === username && u.password === password);

            if (user) {
                // Si el usuario existe, se guarda en el almacenamiento local
                localStorage.setItem('isAuthenticated', 'true');
                messageDiv.innerHTML = "<p class='success'>Login Exitoso. Redirigiendo...</p>";
                setTimeout(() => {
                    window.location.href = 'success.html'; // Redirigir a una página de éxito
                }, 1000);
            } else {
                // Si no se encuentra el usuario
                messageDiv.innerHTML = "<p class='error'>Usuario o contraseña incorrectos</p>";
            }
        } catch (error) {
            messageDiv.innerHTML = "<p class='error'>Error al validar</p>";
        }
    });
});

