import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', icon: 'home', label: 'Trang chủ' },
  { to: '/search', icon: 'search', label: 'Tìm kiếm' },
  { to: '/community', icon: 'group', label: 'Cộng đồng' },
  { to: '/profile', icon: 'person', label: 'Hồ sơ' },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface/90 backdrop-blur-lg rounded-t-xl shadow-[0_-15px_30px_rgba(27,28,28,0.06)] flex justify-around items-center h-24 pb-safe px-4">
      {NAV_ITEMS.map(({ to, icon, label }) => {
        const active = location.pathname === to;
        return (
          <Link
            key={to}
            to={to}
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              active
                ? 'text-primary font-bold bg-secondary-container/30 rounded-full px-4 py-1'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={active ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {icon}
            </span>
            <span className="font-vietnam text-[14px] leading-[20px] tracking-[0.05em] font-semibold mt-1">
              {label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
