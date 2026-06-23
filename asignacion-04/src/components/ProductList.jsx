import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Hubo un problema al conectar con el servidor.');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // ➕ Incrementar carrito
  const handleBuy = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  // ➖ Decrementar carrito (evitando números negativos)
  const handleRemove = () => {
    setCartCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  if (loading) {
    return (
      <div style={styles.centerMessage}>
        <div style={styles.spinner}></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.centerMessage}>
        <p style={styles.errorText}>❌ Error: {error}</p>
        <p style={styles.subtext}>Por favor, intenta recargar la página más tarde.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Catálogo de Productos</h2>
        
        {/* Al hacer clic en el carrito, se descuenta un producto */}
        <div 
          style={styles.cartContainer} 
          onClick={handleRemove} 
          title="Haz clic aquí para quitar un artículo del carrito"
        >
          <span style={styles.cartIcon}>🛒</span>
          {cartCount > 0 && (
            <div style={styles.cartBadge}>{cartCount}</div>
          )}
        </div>
      </div>

      <div style={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            onBuy={handleBuy}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '100%',
    margin: '0',
    padding: '20px',
    boxSizing: 'border-box'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
    padding: '0 10px'
  },
  heading: {
    color: '#cdd6f4',
    fontSize: '1.8rem',
    margin: 0,
    fontWeight: 'bold'
  },
  cartContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#313244',
    padding: '10px',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  cartIcon: {
    fontSize: '1.4rem'
  },
  cartBadge: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    backgroundColor: '#f38ba8', 
    color: '#11111b',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
    gap: '24px',
    alignItems: 'start'
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