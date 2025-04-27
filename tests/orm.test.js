document.addEventListener('DOMContentLoaded', async function () {
    const orm = new ORM('assets/js/users.json');
    const testResults = document.querySelector('#test-results');

    try {
        const users = await orm.getAll();

        if (users.length > 0 && users[0].username) {
            testResults.innerHTML = "✅ ORM funcionando correctamente";
            testResults.style.color = 'green';
        } else {
            testResults.innerHTML = "⚠️ ORM cargando datos locales (ver consola)";
            testResults.style.color = 'orange';
        }
    } catch (error) {
        testResults.innerHTML = "❌ Error cargando datos";
        testResults.style.color = 'red';
        console.error('Error en prueba ORM:', error);
    }
});
