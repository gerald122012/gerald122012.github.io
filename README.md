![GitHub last commit](https://img.shields.io/github/last-commit/gerald122012/gerald122012.github.io?style=for-the-badge)
![GitHub pages](https://img.shields.io/badge/Hosted-GitHub%20Pages-blue?style=for-the-badge)
![TDD Applied](https://img.shields.io/badge/TDD-Test%20Driven%20Approach-green?style=for-the-badge)
![Secure Auth](https://img.shields.io/badge/Authentication-JSON%20Secure-critical?style=for-the-badge)

# 🛡️ Proyecto: Sistema de Autenticación para Galería de Proyectos del Equipo G

## 📖 Resumen del Proyecto

Este repositorio alberga un sistema de autenticación robusto para la galería de proyectos alojada en [gerald122012.github.io](https://gerald122012.github.io/).  
El sistema garantiza un acceso restringido a los contenidos mediante un mecanismo de autenticación basado en un archivo JSON, gestionado por una librería personalizada `AuthORM.js`. Las sesiones se manejan con `localStorage`, y el desarrollo sigue principios de **TDD** (Test Driven Development) con pruebas visibles en la interfaz.

---

## 🎯 Propósito

- Establecer un sistema de autenticación seguro basado en JSON.
- Utilizar un **ORM personalizado** para procesar datos.
- Gestionar sesiones de usuario con `localStorage`.
- Validar funcionalidad mediante pruebas TDD.
- Publicar el proyecto en **GitHub Pages** para acceso público.

---

## 📂 Organización del Proyecto

Organización del Proyecto
index.html: Página principal del sistema. Sirve como punto de entrada general y redirecciona a otras secciones del sitio.

- login.html: Interfaz de autenticación del sistema. Contiene el formulario de inicio de sesión y se vincula con los módulos login.js y orm.js para la validación de credenciales.
- success.html: Página a la que se accede tras una autenticación exitosa. Representa una sección protegida del sistema.
- resources/styles.css: Archivo de hojas de estilo (CSS). Aplica el diseño visual del sitio, incluyendo el formulario de autenticación y otros componentes.
- resources/login.js: Lógica de validación de credenciales. Escucha el formulario de login.html, valida contra los datos del ORM, y redirige si el acceso es exitoso.
- resources/orm.js: Módulo tipo ORM que permite la carga de datos desde un archivo JSON. Facilita la abstracción de acceso a datos.
- resources/users.json: Base de datos local en formato JSON. Contiene los registros de usuarios con username y password.
- test/orm.test.js: Script de pruebas automatizadas para el módulo orm.js. Implementa pruebas bajo enfoque TDD visual o funcional.
- README.md: Archivo de documentación principal del proyecto. Explica el propósito, estructura y cómo ejecutar o probar el sistema.
- _conf.yml: Archivo de configuración, posiblemente para uso con Jekyll u otra herramienta de documentación estática (no utilizado directamente por el sistema web).

---

## 🔐 Flujo de Autenticación

1 .-Acceso a la página de inicio de sesión :
El usuario accede a index.html , que actúa como punto de entrada general.
Desde index.html , se redirige al usuario a login.html , la interfaz de autenticación que contiene el formulario de inicio de sesión.
2.-Interacción con el formulario de inicio de sesión :
En login.html , el usuario ingresa sus credenciales (nombre de usuario y contraseña) en el formulario.
El diseño visual del formulario está definido por resources/styles.css , que garantiza una presentación consistente.
3.-Validación de credenciales :
Al enviar el formulario, resources/login.js captura el evento de envío.
login.js procesa las credenciales ingresadas y las validas contra los datos almacenados en resources/users.json , utilizando resources/orm.js para acceder a los datos.
orm.js actúa como una capa de abstracción que carga y consulta los registros de usuarios desde el archivo JSON ( users.json ), verificando si las credenciales coinciden con un registro existente.
4.-Resultado de la autenticación :
Si las credenciales son válidas, login.js redirige al usuario a Success.html , una página protegida que indica un inicio de sesión exitosa.
Si las credenciales son inválidas, login.js muestra un mensaje de error en login.html (definido en la lógica del script y estilizado por estilos.css ), solicitando al usuario que intente de nuevo.
5.-Pruebas y fiabilidad :
La lógica de acceso a datos en orm.js está probada mediante test/orm.test.js , que asegura que las consultas al archivo JSON sean correctas y confiables bajo un enfoque TDD (desarrollo guiado por pruebas).
Resumen del flujo :
- Entrada: index.html → login.html .
- Interacción: Formulario en login.html captura de credenciales.
- Procesamiento: login.js valida credenciales usando orm.js contra usuarios.json .
- Salida: Redirección a Success.html (éxito) o mensaje de error en login.html (fallo).
  
Este flujo asegura una autenticación segura y modular, con separación clara entre interfaz, lógica y datos, apoyada por pruebas automatizadas.
---

## 🧬 Aplicación de TDD (Test Driven Development)

- El archivo `test/auth.test.js` realiza pruebas automáticas sobre `orm.test.js`.
- Los resultados se muestran en la interfaz:
  - ✅ ORM operativo
  - ⚠️ Alerta por problemas detectados
  - ❌ Fallo en la carga de datos

**Resultado esperado:**

```bash
✅ ORM operativo
