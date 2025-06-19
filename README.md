# 🧪 Trabajo Práctico Complementario: Implementación de Búsqueda por Nombre

## 🎯 Objetivo

Simular una tarea cotidiana dentro de un entorno de trabajo corporativo, aplicando una mejora sobre una aplicación previamente entregada. Esta mejora consiste en agregar una funcionalidad de búsqueda por nombre en la base de datos de productos, accesible desde el frontend y resuelta en el backend.

## 📌 Alcance de la mejora

Se parte de una app CRUD funcional con MongoDB, organizada por modelos, rutas y controladores, que ya permite gestionar productos, usuarios (opcional) y categorías. Esta consigna requiere:

- Agregar un campo de búsqueda en el frontend, que permita buscar productos por nombre.
- Incorporar en el backend una ruta que reciba el valor buscado y devuelva los productos que coincidan parcial o completamente.
- Asegurar la correcta visualización dinámica de los resultados en el frontend.
- Mantener y aplicar buenas prácticas como el uso de controladores, rutas limpias, manejo de errores y status de respuesta.
- Usar variables de entorno en ambos entornos para separar datos sensibles y facilitar la configuración.

## ✅ Requisitos

- Utilizar la app CRUD ya desarrollada como base de trabajo.
- Implementar un input de búsqueda de productos por nombre en el frontend.
- Configurar una nueva ruta en el backend que reciba el término de búsqueda y realice una consulta en la base de datos.
- La búsqueda debe ser parcial e insensible a mayúsculas/minúsculas.
- Mostrar los resultados en pantalla en función del valor buscado.
- Usar variables de entorno (`.env`) para definir la URL del backend en el frontend.
- Mantener separadas las capas de modelo, controlador y rutas en el backend.
- El backend debe estar conectado a una base de datos MongoDB usando Mongoose.
- Conservar todo lo que ya funciona en la app sin modificar otras funcionalidades.

## 📄 Entrega

Subir el proyecto actualizado a un repositorio en GitHub.

Incluir un archivo `README.md` que contenga:

- Título del proyecto y breve descripción de la nueva funcionalidad agregada.
- Tecnologías utilizadas.
- Instrucciones para ejecutar backend y frontend.
- Ejemplos de uso de la nueva funcionalidad.
- Variables de entorno necesarias (`.env.example`).

Asegurarse de que tanto el backend como el frontend funcionen correctamente de forma conjunta.

## ⏰ Fechas

- **Apertura:** Tuesday, 17 de June de 2025, 00:00  
- **Cierre:** Tuesday, 1 de July de 2025, 23:59
