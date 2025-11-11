import React from 'react';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';

export default function Wishlist() {
  const wishlistItems = [
    { id: 101, title: 'Data Science with Python', instructor: 'Dr. Emily Carter', price: 129.99 },
    { id: 102, title: 'Creative Writing Workshop', instructor: 'Mark Hamil', price: 39.99 },
  ];

  const styles = {
    container: { padding: '30px' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#0f4f9f', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' },
    list: { marginTop: '20px' },
    item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 20px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.04)', marginBottom: '10px' },
    details: { flex: 1 },
    actions: { display: 'flex', gap: '10px', alignItems: 'center', width: '100px', justifyContent: 'flex-end' },
    price: { fontWeight: 700, color: '#0f4f9f', minWidth: '80px', textAlign: 'right' },
    btn: (bg) => ({ background: bg, color: '#fff', border: 'none', padding: '8px', borderRadius: '6px', cursor: 'pointer', display: 'flex', alignItems: 'center' }),
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}><Heart size={30} color="#ef4444"/> My Wishlist ({wishlistItems.length} Items)</h1>
      
      <div style={styles.list}>
        {wishlistItems.map(item => (
          <div key={item.id} style={styles.item}>
            <div style={styles.details}>
              <h3 style={{ margin: '0 0 3px 0', color: '#1e293b' }}>{item.title}</h3>
              <p style={{ margin: 0, fontSize: '.9rem', color: '#64748b' }}>By {item.instructor}</p>
            </div>
            
            <span style={styles.price}>${item.price.toFixed(2)}</span>

            <div style={styles.actions}>
              <button style={styles.btn('#22c55e')}>
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}