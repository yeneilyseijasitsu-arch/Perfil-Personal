import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  // Manejo estructurado de los 3 estados requeridos por la rúbrica
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Consumo asíncrono de la API real
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Hubo un problema al conectar con el servidor.');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false); // Estado de carga finalizado exitosamente
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false); // Estado de carga finalizado por error
      });
  }, []);

  // 1. Renderizado Condicional: Estado de carga
  if (loading) {
    return (
      <div style={styles.centerMessage}>
        <div style={styles.spinner}></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  // 2. Renderizado Condicional: Estado de error
  if (error) {
    return (
      <div style={styles.centerMessage}>
        <p style={styles.errorText}>❌ Error: {error}</p>
        <p style={styles.subtext}>Por favor, intenta recargar la página más tarde.</p>
      </div>
    );
  }

  // 3. Renderizado Principal: Estado de datos listos
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Catálogo de Productos</h2>
      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  heading: {
    color: '#cdd6f4',
    fontSize: '1.8rem',
    marginBottom: '24px',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px'
  },
  centerMessage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
    color: '#cdd6f4',
    fontSize: '1.2rem',
    gap: '12px'
  },
  errorText: {
    color: '#f38ba8',
    fontWeight: 'bold'
  },
  subtext: {
    fontSize: '0.9rem',
    color: '#a6adc8'
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '4px solid #313244',
    borderTop: '4px solid #b4befe',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }
};