<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Iniciar sesión</h2>
    <form id="loginForm">
        <div>
            <label for="username">Usuario:</label>
            <input type="text" id="username" name="username" required>
        </div>
        <div>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" name="password" required>
        </div>
        <button type="submit">Iniciar sesión</button>
    </form>
    
    <div id="message"></div>
    
    <script>
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
    </script>
</body>
</html>


