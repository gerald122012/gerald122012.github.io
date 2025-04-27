![GitHub last commit](https://img.shields.io/github/last-commit/gerald122012/gerald122012.github.io?style=for-the-badge)
![GitHub pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-blue?style=for-the-badge)
![TDD Implementado](https://img.shields.io/badge/TDD-Test%20Driven%20Development-green?style=for-the-badge)
![Login Seguro](https://img.shields.io/badge/Login-Seguro%20con%20JSON-important?style=for-the-badge)

# 🔒 Proyecto: Sistema de Login Seguro para Acceso a Portafolios del Grupo G

## 📚 Descripción General

Este proyecto implementa un sistema de login seguro para el repositorio [gerald122012.github.io](https://gerald122012.github.io/), permitiendo el acceso controlado a los portafolios del grupo.  
El acceso es protegido mediante autenticación de usuarios almacenados en un archivo JSON, validado usando una mini librería `ORM.js` personalizada, y gestión de sesiones en `localStorage`.  
Además, se aplican principios de **TDD** (Test Driven Development) mediante pruebas automáticas visibles.

---

## 🎯 Objetivo

- Implementar control de acceso seguro basado en JSON.
- Aplicar un **ORM modular** para manejar datos.
- Gestionar sesión del usuario usando `localStorage`.
- Realizar pruebas de carga y validación usando TDD.
- Desplegar todo el proyecto en **GitHub Pages**.

---

## 🗂️ Estructura del Proyecto


- `index.html`: Página pública de bienvenida y acceso.
- `login.html`: Formulario de login con validación ORM.
- `success.html`: Página protegida, accesible solo después del login exitoso.
- `assets/js/orm.js`: Librería de carga de datos desde JSON.
- `assets/js/login.js`: Script de autenticación de usuarios.
- `assets/js/users.json`: Base de datos local de usuarios.
- `assets/css/styles.css`: Estilos centralizados en dark mode.
- `tests/orm.test.js`: Pruebas de carga de usuarios (TDD visual).

---

## 🔑 Proceso de Autenticación

1. El usuario accede a `login.html`.
2. El sistema carga `users.json` usando `ORM.js`.
3. Se validan las credenciales del usuario.
4. Si el login es exitoso:
   - Se guarda un token (`isAuthenticated=true`) en `localStorage`.
   - Se redirige automáticamente a `success.html`.
5. Si el usuario intenta acceder sin autenticación:
   - El sistema lo redirige a `login.html`.

---

## 🧪 Implementación de TDD (Test Driven Development)

- En `tests/orm.test.js`, se carga automáticamente el `users.json`.
- Se muestra un resultado visual:
  - ✅ ORM funcionando correctamente
  - ⚠️ Advertencia si hay problemas
  - ❌ Error en carga de datos

**Resultado esperado:**

```bash
✅ ORM funcionando correctamente

Prueba visible en la sección de login (#test-results).

🚀 Despliegue en GitHub Pages
El proyecto está desplegado desde la rama main usando GitHub Pages.

Página pública: https://gerald122012.github.io/  

🧰 Herramientas Utilizadas
Git y GitHub: Control de versiones y repositorio remoto.

GitHub Actions: Automatización de despliegue.

GitFlow: Estructura de trabajo colaborativo.

Jekyll (Minima theme): Motor de despliegue en Pages.

HTML5, CSS3, JavaScript ES6: Tecnologías de frontend.

FontAwesome: Iconografía profesional.

TDD y pruebas automáticas: Validación de carga de datos.

🔥 Mejoras Futuras
Implementar cifrado de contraseñas.

Añadir expiración automática de sesiones.

Gestionar roles de usuario (Admin, Viewer).

Migrar a un backend real (Node.js, Express.js) para producción.

👨‍💻 Autores
Gerald (gerald122012)

Ángel (angeltito)

Jasimon (Jasimon27)

Moran (Moran3277)

Miguel (Miguel25-bot)

Construido con 💻, colaboración en equipo y buenas prácticas de desarrollo de software.


