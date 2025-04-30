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

- `index.html`: Página inicial con información y acceso al sistema.
- `auth.html`: Interfaz de autenticación con validación ORM.
- `gallery.html`: Sección protegida, accesible tras autenticación exitosa.
- `assets/js/authorm.js`: Módulo para cargar datos desde JSON.
- `assets/js/auth.js`: Lógica de validación de credenciales.
- `assets/js/projects.json`: Base de datos local de usuarios.
- `assets/css/design.css`: Estilos unificados con tema oscuro.
- `tests/auth.test.js`: Pruebas automatizadas para la carga de datos (TDD visual).

---

## 🔐 Flujo de Autenticación

1. El usuario ingresa a `auth.html`.
2. `AuthORM.js` carga los datos de `projects.json`.
3. Se verifican las credenciales ingresadas.
4. En caso de autenticación exitosa:
   - Se almacena un token (`authStatus=true`) en `localStorage`.
   - Se redirige a `gallery.html`.
5. Si se intenta acceder a contenido protegido sin autenticación:
   - El sistema redirige automáticamente a `auth.html`.

---

## 🧬 Aplicación de TDD (Test Driven Development)

- El archivo `tests/auth.test.js` realiza pruebas automáticas sobre `projects.json`.
- Los resultados se muestran en la interfaz:
  - ✅ ORM operativo
  - ⚠️ Alerta por problemas detectados
  - ❌ Fallo en la carga de datos

**Resultado esperado:**

```bash
✅ ORM operativo
