# 🗺️ Plan de Acción y Tareas de Refactorización

**Autora:** Yeneily Seijas
**Fecha:** Julio 2026  
**Proyecto:** Arquitectura React Modular — Asignación 04

---

## 1. Alcance (Scope)

* **IN:**
  * Componentización en React mediante ES Modules (`import / export`).
  * Manejo reactivo de estado con `useState` para carrito de compras.
  * Consumo de API REST (`fakestoreapi.com`).
  * Estilizado dinámico e integrado con CSS-in-JS / objetos de estilos.
  * Control de versiones y subida de cambios al repositorio remoto en GitHub.
* **OUT:**
  * Implementación de backend o persistencia en base de datos SQL/NoSQL.
  * Pasarelas de pago reales (Stripe, PayPal).

---

## 2. Registro de Tareas Ejecutadas

| ID | Tarea | Tipo | Estado | Responsable |
| :--- | :--- | :--- | :--- | :--- |
| **T1** | Crear componente reutilizable `ProductCard.jsx` con botón de compra. | Refactor | **Completado** | `yeneilyseijasitsu-arch` |
| **T2** | Migrar consumo de productos en `ProductList.jsx` mediante `useEffect` y `fetch`. | Feature | **Completado** | `yeneilyseijasitsu-arch` |
| **T3** | Rediseñar la cuadrícula a un Grid fluido y ajustar alturas de tarjetas (`height: auto`). | UI/UX | **Completado** | `yeneilyseijasitsu-arch` |
| **T4** | Implementar widget del carrito `🛒` con contador dinámico e incremento/decremento. | Feature | **Completado** | `yeneilyseijasitsu-arch` |
| **T5** | Mover terminal a directorio raíz (`cd ..`) y hacer `git push` a repositorio de GitHub. | DevOps | **Completado** | `yeneilyseijasitsu-arch` |

---

## 3. Verificación de Invariantes (Pruebas Manuales)

1. **Invariante de Carga:** Al refrescar la página, la aplicación muestra el spinner de carga y posteriormente despliega la cuadrícula completa de productos.
2. **Invariante del Carrito:** Al hacer clic en el botón *"Comprar"*, el contador rosa de la esquina superior derecha incrementa en 1. Al pulsar el icono `🛒`, decrece en 1 sin permitir valores negativos.
3. **Invariante de Layout:** Al cambiar el tamaño de la ventana del navegador, las tarjetas se acomodan fluidamente entre 4, 5 o 6 columnas sin amontonarse ni cortarse.