import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useCart } from '../context/CartContext';

function formatVND(n: number) {
  return n.toLocaleString('vi-VN') + '₫';
}

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Header />

      <main className="pt-24 pb-32 px-container-margin-mobile md:px-[15vw] max-w-screen-xl mx-auto min-h-screen">
        {/* Header */}
        <div className="mb-section-gap-mobile text-center md:text-left">
          <h2 className="font-garamond text-[32px] leading-[40px] font-medium text-primary mb-2">Giỏ hàng của bạn</h2>
          <p className="font-vietnam text-[14px] font-semibold text-on-surface-variant uppercase tracking-widest">
            Tuyển tập sự sang trọng
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items */}
          <div className="lg:col-span-2 space-y-gutter">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <span className="material-symbols-outlined text-[80px] text-outline-variant mb-6">shopping_bag</span>
                <h3 className="font-garamond text-[32px] leading-[40px] font-medium text-on-surface-variant">Giỏ hàng đang trống</h3>
                <p className="mt-4 text-on-surface-variant max-w-xs mx-auto font-vietnam text-body-md">
                  Hãy bắt đầu hành trình tìm kiếm những món đồ kỷ niệm tuyệt vời nhất của bạn.
                </p>
                <Link
                  to="/search"
                  className="mt-8 px-12 py-4 border border-primary text-primary rounded-full font-vietnam text-[14px] font-semibold hover:bg-primary hover:text-on-primary transition-all duration-300 uppercase tracking-widest"
                >
                  Khám phá cửa hàng
                </Link>
              </div>
            ) : (
              items.map(item => (
                <div
                  key={item.id}
                  className="group flex items-center gap-6 p-4 bg-surface-container-low rounded-xl shadow-[0_15px_30px_rgba(27,28,28,0.03)] transition-all hover:shadow-[0_20px_40px_rgba(27,28,28,0.06)]"
                >
                  <div className="w-24 h-32 md:w-32 md:h-40 overflow-hidden rounded-lg bg-surface-container-highest flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-grow flex flex-col justify-between py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-garamond text-[24px] leading-[32px] font-medium text-on-surface">{item.name}</h3>
                        <p className="text-on-surface-variant font-vietnam text-body-md">{item.subtitle}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-on-surface-variant hover:text-error transition-colors"
                      >
                        <span className="material-symbols-outlined text-[20px]">delete</span>
                      </button>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border border-outline-variant rounded-full px-3 py-1">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">remove</span>
                        </button>
                        <span className="px-4 font-vietnam text-[14px] font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-outlined text-sm">add</span>
                        </button>
                      </div>
                      <p className="font-garamond text-[24px] leading-[32px] font-medium text-primary">
                        {formatVND(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          {items.length > 0 && (
            <div className="lg:col-span-1">
              <div className="bg-surface-container p-8 rounded-xl shadow-[0_30px_60px_rgba(27,28,28,0.05)] sticky top-32">
                <h3 className="font-garamond text-[24px] leading-[32px] font-medium mb-8 text-on-surface">Tóm tắt đơn hàng</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-on-surface-variant font-vietnam text-body-md">
                    <span>Tạm tính</span>
                    <span>{formatVND(total)}</span>
                  </div>
                  <div className="flex justify-between text-on-surface-variant font-vietnam text-body-md">
                    <span>Phí vận chuyển</span>
                    <span>Miễn phí</span>
                  </div>
                  <div className="pt-4 border-t border-outline-variant flex justify-between items-end">
                    <span className="font-vietnam text-[14px] font-semibold uppercase tracking-wider text-on-surface">Tổng cộng</span>
                    <span className="font-garamond text-[32px] leading-[40px] font-medium text-primary">{formatVND(total)}</span>
                  </div>
                </div>
                <button className="w-full bg-primary-container text-on-primary-container py-5 rounded-xl font-vietnam text-[14px] font-semibold tracking-widest hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-primary-container/20 uppercase">
                  Thanh toán ngay
                </button>
                <div className="mt-8 flex items-center justify-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">lock</span>
                  <span className="font-vietnam text-[12px] font-semibold uppercase tracking-widest">Thanh toán bảo mật</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
