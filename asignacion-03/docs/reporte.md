**Autor:** Yeneily Seijas 
**Fecha:** Julio 2026  
**Proyecto:** Refactorización Modular - Fase 3 (Lumina)


 📊 Reporte de Mejoras y Puntos Críticos

## 1. Evaluación de Severidad
- **Severidad Alta (Arquitectura):** Acoplamiento total en `app.js`. El almacenamiento del catálogo de productos para el insomnio (gafas de fototerapia, elixires botánicos, brumas) convive con las funciones de manipulación del HTML y el control del tema Día/Noche. Falta de aplicación del principio **SOLID (Single Responsibility)**.
- **Severidad Media (Manejo de Estado):** El carrito manipula el arreglo global directamente al restar el inventario (`productoOriginal.stock -= itemCarrito.cantidad`) al confirmar la compra.

## 2. Priorización de Usabilidad (Matriz MoSCoW)
- **MUST (Obligatorio):** Separar las fuentes de datos (el arreglo del catálogo Lumina) del archivo principal de interacción.
- **SHOULD (Deseable):** Crear un módulo exclusivo para las reglas del carrito, cálculo de ofertas y el conmutador de tema circadiano (Día/Noche).
- **COULD (Podría esperar):** Implementar un bundler como Vite para la optimización y empaquetado de módulos ES de la plataforma Lumina.