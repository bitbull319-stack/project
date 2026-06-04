import { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

const DEFAULT_ITEMS: CartItem[] = [
  {
    id: 'oliver',
    name: 'Gấu bông Oliver',
    subtitle: 'Limited Edition · Cream Velvet',
    price: 1250000,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxUT9mgzUzm_gakKxaJ-zdp8HaPym5LsJbUuM7OLWpSJOIx-yjdngAeDJqPc8mmGD4lXHKLj-Znc5lvLMdBcAmUr1mrZIO3rdWW95e3KZoCr2ksz-FiaIBGqEdhNTkTI7ZbstdfVocnr7hMg__op3N1noOP-mQCK3J58EwntbD079y3v0SrFNo7G2roxnMzn0T-es0NKQ6UyUISln66JhSgBi6aB18C5qE6QQb2VNz1iVuMWSxojTz9_lmrXrIwbxa5OXHV-y1I-Q',
  },
  {
    id: 'lumiere',
    name: 'Túi LUMIÈRE',
    subtitle: 'Champagne Gold · Genuine Leather',
    price: 3800000,
    quantity: 1,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCs92H1P0s3mDBSM_g24UFNTtdRpdVuVaGsLjemloqX8X1a3t8xDbbSccABdROE6ptAm-9GfAdqWN9SFiSPGuFRYGj3izGMUX5C55wVZBbrNv44PaqdViPI9NLiOZFzEVB-4llKqKrC9cDZlsaugN16YdDB5gsmt2ZSUJz7xYbdpCOnZ9gA1pnwY0Jtgc-4fB9RLu7INWLdZaqVXlUqMMvuHxbQZalvYwmJgagIdnTQsZvsAqrAanvfGXSE8pKbvuWpxCmdxh2T1Jc',
  },
];

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(DEFAULT_ITEMS);

  function addItem(newItem: Omit<CartItem, 'quantity'>) {
    setItems(prev => {
      const existing = prev.find(i => i.id === newItem.id);
      if (existing) {
        return prev.map(i => i.id === newItem.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...newItem, quantity: 1 }];
    });
  }

  function removeItem(id: string) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function updateQuantity(id: string, delta: number) {
    setItems(prev =>
      prev.map(i => {
        if (i.id !== id) return i;
        const newQty = i.quantity + delta;
        return newQty < 1 ? i : { ...i, quantity: newQty };
      })
    );
  }

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}
