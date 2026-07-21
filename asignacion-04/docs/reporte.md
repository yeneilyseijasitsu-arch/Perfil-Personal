# 📊 Reporte de Mejoras y Puntos Críticos - Refactorización React

**Autora:** Yeneily Seijas
**Fecha:** Julio 2026  
**Proyecto:** FakeStore App — Asignación 04 (Arquitectura React Modular)

---

## 1. Evaluación de Severidad y Resoluciones

| Severidad | Área Impactada | Problema Detectado | Solución Implementada |
| :--- | :--- | :--- | :--- |
| **Alta** | Arquitectura y Código | Mezcla de sintaxis al refactorizar que provocaba fallos de parsing de JS en `ProductCard.jsx`. | Limpieza total de código y reestructuración bajo estándar JSX puro y separación de estilos (`styles`). |
| **Alta** | Layout y Usabilidad | Deformación vertical de tarjetas y desbordamiento por `height: 100%` y `alignItems: stretch`. | Modificación a `height: 'auto'` y alineación Grid `alignItems: 'start'` con espaciado amplio (`gap: '24px'`). |
| **Media** | Experiencia de Usuario | Ausencia de controles para modificar la cantidad seleccionada en el carrito. | Implementación de evento decremental interactivo `onClick={handleRemove}` en el indicador flotante `cartBadge`. |

---

## 2. Matriz MoSCoW Aplicada (Versión Final)

* **MUST (Completado):** 
  * Separación modular entre la lista contenedora (`ProductList.jsx`) y la tarjeta de producto (`ProductCard.jsx`).
  * Botón de acción **"Comprar"** con respuesta reactiva e integración visual con la paleta *Catppuccin Mocha*.
* **SHOULD (Completado):** 
  * Indicador flotante en la esquina superior derecha (`cartBadge`) con la cantidad en tiempo real.
  * Capacidad de eliminar productos del carrito al pulsar el icono `🛒`.
* **COULD (Completado):** 
  * Maquetación fluida y responsiva para adaptarse a pantallas anchas de escritorio sin márgenes blancos muertos.