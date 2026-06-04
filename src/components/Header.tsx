import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const { count } = useCart();

  return (
    <header
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-container-margin-mobile h-20 md:px-container-margin-desktop transition-all duration-300 ${
        transparent ? 'bg-transparent' : 'bg-surface/80 backdrop-blur-md'
      }`}
    >
      <button className="hover:opacity-80 transition-opacity active:scale-95 duration-300">
        <span className="material-symbols-outlined text-primary">menu</span>
      </button>

      <Link
        to="/"
        className="font-garamond text-headline-lg-mobile tracking-widest text-primary font-bold uppercase select-none"
      >
        ILLUMIA
      </Link>

      <Link
        to="/cart"
        className="hover:opacity-80 transition-opacity active:scale-95 duration-300 relative"
      >
        <span className="material-symbols-outlined text-primary">shopping_cart</span>
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {count}
          </span>
        )}
      </Link>
    </header>
  );
}
