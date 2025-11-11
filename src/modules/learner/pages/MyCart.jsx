import React from 'react';
import { DollarSign, X } from 'lucide-react';

export default function MyCart() {
  const cartItems = [
    { id: 1, title: 'Mastering React Hooks (2025)', price: 49.99 },
    { id: 2, title: 'Financial Modeling for Beginners', price: 99.99 },
  ];
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const styles = {
    container: { padding: '30px', background: '#f8fafc', display: 'flex', gap: '30px', alignItems: 'flex-start' },
    left: { flex: 3, background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' },
    right: { flex: 1, background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', position: 'sticky', top: '84px' },
    title: { fontSize: '2.2rem', fontWeight: 800, color: '#0f4f9f', marginBottom: '25px' },
    item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 0', borderBottom: '1px solid #e2e8f0' },
    checkoutBtn: { background: '#22c55e', color: '#fff', border: 'none', width: '100%', padding: '12px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', marginTop: '20px' },
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h1 style={styles.title}>Shopping Cart ({cartItems.length} Items)</h1>
        
        {cartItems.map(item => (
          <div key={item.id} style={styles.item}>
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0, color: '#1e293b' }}>{item.title}</h3>
            </div>
            <div style={{ fontWeight: 700, color: '#0f4f9f', width: '100px', textAlign: 'right' }}>
              ${item.price.toFixed(2)}
            </div>
            <button style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', paddingLeft: '15px' }}>
              <X size={20} />
            </button>
          </div>
        ))}
      </div>

      <div style={styles.right}>
        <h2 style={{ fontSize: '1.5rem', color: '#1e293b', marginBottom: '15px' }}>Order Summary</h2>
        {/* ... summary details ... */}
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 800, fontSize: '1.2rem', color: '#0f4f9f' }}>
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <button style={styles.checkoutBtn}>
          <DollarSign size={20} style={{ verticalAlign: 'middle', marginRight: '5px' }} /> Proceed to Checkout
        </button>
      </div>
    </div>
  );
}