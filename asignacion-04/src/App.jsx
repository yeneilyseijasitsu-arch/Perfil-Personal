import React from 'react';
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div style={styles.appWrapper}>
      {/* Encabezado Principal de la Aplicación */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.logo}>🛒 FakeStore App</h1>
          <p style={styles.subtitle}>Asignación 04 — Arquitectura React Modular</p>
        </div>
      </header>

      {/* Contenedor Principal donde se inyecta la lógica de la API */}
      <main style={styles.mainContent}>
        <ProductList />
      </main>

      {/* Pie de página con tus créditos */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          Desarrollado por <span style={styles.author}>Yeneily Seijas</span> &copy; 2026
        </p>
      </footer>
    </div>
  );
}

// Estilos globales en formato JS de acuerdo a la paleta oscura utilizada
const styles = {
  appWrapper: {
    backgroundColor: '#11111b', // Fondo ultra oscuro para resaltar las tarjetas
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: '#1e1e2e',
    borderBottom: '1px solid #313244',
    padding: '20px 0',
    textAlign: 'center',
  },
  headerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  logo: {
    margin: 0,
    fontSize: '2rem',
    color: '#b4befe', // Tono lavanda pastel muy limpio
    fontWeight: '700',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    margin: '6px 0 0 0',
    color: '#a6adc8',
    fontSize: '0.9rem',
  },
  mainContent: {
    flex: 1, // Hace que el contenido ocupe el espacio restante empujando el footer abajo
    padding: '20px 0 60px 0',
  },
  footer: {
    backgroundColor: '#181825',
    borderTop: '1px solid #313244',
    padding: '16px 0',
    textAlign: 'center',
    marginTop: 'auto',
  },
  footerText: {
    margin: 0,
    fontSize: '0.85rem',
    color: '#6c7086',
  },
  author: {
    color: '#f5c2e7', // Un tono rosado sutil para tu firma
    fontWeight: '600',
  },
};