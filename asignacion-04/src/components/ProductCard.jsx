import React from 'react';

// Componente puro y reutilizable para cada tarjeta de producto
export default function ProductCard({ id, title, price, image }) {
  return (
    <div style={styles.card}>
      <div style={styles.imageContainer}>
        <img src={image} alt={title} style={styles.image} />
      </div>
      <div style={styles.info}>
        <span style={styles.badge}>ID: {id}</span>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.price}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
}

// Estilos básicos integrados para asegurar que se vea impecable
const styles = {
  card: {
    backgroundColor: '#1e1e2e',
    borderRadius: '12px',
    border: '1px solid #313244',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s, box-shadow 0.2s',
    color: '#cdd6f4',
    height: '100%'
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
    gap: '8px',
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
    marginTop: 'auto'
  }
};