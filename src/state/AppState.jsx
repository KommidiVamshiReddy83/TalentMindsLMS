import React, { createContext, useContext, useEffect, useState } from "react";

const AppStateContext = createContext(null);

export function AppStateProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tm_cart")) || []; } catch { return []; }
  });
  const [wishlist, setWishlist] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tm_wishlist")) || []; } catch { return []; }
  });
  const [messages, setMessages] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tm_messages")) || [
      { id: "m1", from: "Instructor", text: "Please update submission.", unread: 1 }
    ]; } catch { return [];}
  });
  const [notifications, setNotifications] = useState(() => {
    try { return JSON.parse(localStorage.getItem("tm_notifications")) || [
      { id: "n1", text: "Assignment 1 graded", read: false }
    ]; } catch { return []; }
  });

  useEffect(() => { localStorage.setItem("tm_cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("tm_wishlist", JSON.stringify(wishlist)); }, [wishlist]);
  useEffect(() => { localStorage.setItem("tm_messages", JSON.stringify(messages)); }, [messages]);
  useEffect(() => { localStorage.setItem("tm_notifications", JSON.stringify(notifications)); }, [notifications]);

  // cart
  function addToCart(item) {
    setCart((s) => {
      if (s.find(x => x.id === item.id)) return s;
      return [...s, item];
    });
  }
  function removeFromCart(id) { setCart((s) => s.filter(x => x.id !== id)); }

  // wishlist
  function addToWishlist(item) {
    setWishlist((s) => {
      if (s.find(x => x.id === item.id)) return s;
      return [...s, item];
    });
  }
  function removeFromWishlist(id) { setWishlist((s) => s.filter(x => x.id !== id)); }

  // messages
  function markMessageRead(id) {
    setMessages((s) => s.map(m => m.id === id ? { ...m, unread: 0 } : m));
  }
  function sendMessage(msg) { setMessages((s) => [{ id: String(Date.now()), ...msg }, ...s]); }

  // notifications
  function markNotificationRead(id) {
    setNotifications((s) => s.map(n => n.id === id ? { ...n, read: true } : n));
  }

  const unreadMessages = messages.reduce((c,m)=> c + (m.unread||0), 0);
  const unreadNotifications = notifications.filter(n => !n.read).length;

  return (
    <AppStateContext.Provider value={{
      cart, wishlist, messages, notifications,
      addToCart, removeFromCart,
      addToWishlist, removeFromWishlist,
      markMessageRead, sendMessage,
      markNotificationRead,
      unreadMessages, unreadNotifications
    }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used inside AppStateProvider");
  return ctx;
}