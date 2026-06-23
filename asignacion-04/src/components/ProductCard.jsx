import React from 'react';

// Recibimos "onBuy" desde las propiedades heredadas
export default function ProductCard({ id, title, price, image, onBuy }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div style={styles.info}>
        <span style={styles.badge}>ID: {id}</span>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>${price.toFixed(2)}</p>
        
        {/* Ejecuta la función del padre para actualizar el contador */}
        <button style={styles.buyButton} onClick={onBuy}>
          Comprar
        </button>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#1e1e2e',
    borderRadius: '12px',
    border: '1px solid #313244',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s, box-shadow 0.2s',
    color: '#cdd6f4',
    height: 'auto'
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '180px',
    marginBottom: '14px'
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain'
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    flexGrow: 1
  },
  badge: {
    fontSize: '0.75rem',
    backgroundColor: '#313244',
    color: '#a6adc8',
    padding: '4px 8px',
    borderRadius: '4px',
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: '1rem',
    fontWeight: '600',
    margin: '4px 0',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    height: '2.4rem',
    lineHeight: '1.2rem'
  },
  price: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#f9e2af',
    marginTop: 'auto',
    marginBottom: '4px'
  },
  buyButton: {
    backgroundColor: '#b4befe',
    color: '#11111b',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 16px',
    fontSize: '0.95rem',
    fontWeight: '600',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.2s ease',
  }
};