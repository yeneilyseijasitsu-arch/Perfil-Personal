# 🗺️ Plan de Acción y Tareas de Refactorización

**Autor:** Yeneily  
**Fecha:** Julio 2026  
**Proyecto:** Refactorización Modular - Fase 3 (Lumina)

## 1. Alcance (Scope)
- **IN:** Separar el código de la tienda Lumina en módulos independientes (Datos del Catálogo, Motor del Carrito, Interfaz de Usuario y Alternador de Tema Día/Noche) utilizando ES Modules (`import/export`).
- **OUT:** No se añadirán estilos nuevos en CSS ni pasarelas de pago externas en esta sesión.

## 2. Tabla de Tareas Priorizadas
| ID | Tarea | Tipo | Prioridad |
|----|-------|------|-----------|
| T1 | Aislar catálogo de productos de descanso a `productsData.js` | Refactor | P0 |
| T2 | Aislar lógica del carrito y descuentos a `cartEngine.js` | Refactor | P0 |
| T3 | Configurar punto de entrada centralizado en `main.js` | Refactor | P1 |

## 3. Estrategia de Refactorización en 3 Pasos
- **Paso 1 (Invariante - Datos):** Extraer el arreglo del catálogo (Lumina Glasses, Elixir Botánico, Bruma Circadia, Antifaz Ergonómico) a un archivo separado. *Prueba manual:* Verificar que la cuadrícula de productos renderice exactamente igual con sus respectivas categorías y precios.
- **Paso 2 (Invariante - Lógica):** Mudar las funciones de agregar, actualizar y vaciar el carrito de compras, así como la lógica del switch de tema Día/Noche. *Prueba manual:* Añadir productos al carrito y constatar que el subtotal y los descuentos de lanzamiento calculen correctamente.
- **Paso 3 (Invariante - Validación):** Centralizar eventos del formulario de compra e interacción en el entry point. *Prueba manual:* Intentar procesar la compra con datos no válidos para asegurar que las RegEx sigan rechazándolos y descontando el stock correspondiente al confirmar.