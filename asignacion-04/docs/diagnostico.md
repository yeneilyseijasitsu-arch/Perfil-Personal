# 🔍 Diagnóstico de Arquitectura - FakeStore App (Asignación 04)

**Autora:** Yeneily Seijas
**Fecha:**Julio 2026  
**Contexto:** Diagnóstico de la migración de un monolito Vanilla JS hacia una Arquitectura Modular en React + Vite.

---

## 1. Estado Actual del Repositorio y Evolución
El proyecto evolucionó desde una estructura centralizada en un único archivo JavaScript hacia una **arquitectura modular moderna con React**:
- **Consumo Asíncrono de API (`ProductList.jsx`):** Se eliminó la dependencia de arreglos mockeados locales en favor de la integración directa con la API REST `https://fakestoreapi.com/products` mediante `fetch` e `useEffect`.
- **Manejo Centralizado de Estado Reactivo:** El estado global de la aplicación (como el conteo interactivo de productos en el carrito `cartCount`) se desacopló del DOM y pasó a ser gestionado mediante los hooks `useState` y el patrón de "elevación de estado" (*lifting state up*).
- **Componentización Pura y Reutilizable (`ProductCard.jsx`):** La representación visual de cada ítem (imagen, ID, título, precio, botón de acción) se encapsuló en un componente modular libre de efectos secundarios directos.

---

## 2. Puntos Críticos Resueltos durante la Refactorización
Durante la fase de ajuste visual e interactividad se resolvieron los siguientes cuellos de botella:
- **Flujo bidireccional del Carrito:** Se implementó una interfaz reactiva donde el usuario puede añadir artículos desde la tarjeta del producto (`handleBuy`) y descontar productos directamente desde el widget superior (`handleRemove`) con prevención de enteros negativos (`cartCount > 0`).
- **Ajuste de Layout y Escalabilidad:** Se migró de contenedores rígidos (`maxWidth: 1200px`) a un layout fluido (`width: 100%`) con CSS Grid adaptativo (`repeat(auto-fill, minmax(220px, 1fr))`) y `alignItems: 'start'`, eliminando la deformación vertical de las tarjetas (*height strech*).
- **Higiene del Repositorio Git:** Identificación y corrección de la ubicación del directorio raíz del proyecto (`/yeneilyseijasitsu-arch Perfil-Personal`) para la ejecución precisa de comandos Git (`git add`, `git commit`, `git push`).