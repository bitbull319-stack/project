import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useCart } from '../context/CartContext';

const THUMBNAILS = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBF8sSmqA3la7DtwrUAK9aKLpujeWvFNVXB69G6VgNWUTBJOn40BPzKwDiapqSgPw7f0cGXVrTk4R2RMdItnOYs4jU4nAneXUO8nWlg7TFlsfPgjivBYvRl37-23rPxTpyJoppHLNicGAkwzwn5wlsOxBJiKk4m2b32VBz5EslBQbeTQ892WAatUSKChb62nBilWERIGZWhJXGvqdFiDmwqfls4tsHczqDDbScv_cdOuAzi-DBOObKDnE1LieV3Ied75W21mPRc6hM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDlxo2Nat8feOoG8AuxgVDfyoSWKoQHaUynEzeg8BCa54xRBjqK63qv75gdGicFStcy_QXa_FKtYf37PhnJEIteHaXyInA2ikSkeZkSHH77SmmuQMbvV37FVrdVQtSLEOjFkm4uGK89G51KIuEes7EGPN960azx3Xc5Wuw8PYXzZQmx6R9rgVmZUGfzo9H6jRR-AoFn2HMOyY0huuAfdHsqwCY92F6Y7GYUL0AQB_6SnkFMexIl3vKr2NZGpyI435fJ0n7JxFpcGmI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDf4-jMW-q0u1RuYwBT85czC8bsubvk5iZ3jXKTUk2NHkGtAyXoiAW6TfZsUEl9Tr1Rrd28lthZqqzBDi1k1Fl8SJqFVUQxZDEmu8DC6yNKtgbX49B05UUJYVy-7pXmQjOikbulL98SscRru9r6cQ5Y0h7iC5h45qS6-tEB6BCuudVoXLJPT7Or0-d0drmcErDn_e9CgU-A_6ohfAsdI98jv0mOneR8ZtnynCzfobwSkhkgTQKf5Quo98TcuELqBWFABZwaxRQeens',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCi5mB-KCCfhjhWToqOUuGD5XypotzN0XKJezBi-RI67ZIV2iXa6uzk77JxKDN32TRcMVo75uhN54TOvkO3Qrs_VUBjoPihzrFyN80Tz0-AkdE_U8mNTIK6eLzfur3GKU8h323j2PsCyG63T5toZKGdqzqseoctuNdZ2H3E9ctQC1W4MIFC-ajAgRUB0fWT4NEn1znypnDRZrpAh5t0P18deaZRKHNGKZhHAf2LvMNc6AJd_kLy3E2JWyPhFS8zmRpVOvDBkgOrfss',
];

const RELATED = [
  {
    name: 'Seraphina',
    price: '3.800.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD64nBt5whA4aKmyfOq4MRcfSwLpDqwieZDxf-XYLBciHxmNOiRoG5onwyXF48P5byMNYThina1OxAli8I8GgjwBD3nvbZCmY3-0pmDeiGficOVyoq05MR--e8Ap1KKOcWGJVVwBo68tiRToOOGmyOroOJ9gQMzklGeOiHehdbFI9fDINtQnuFwuBq_PEwnP0xrbvR1waICQUHylyk3dlKU1dmM_49i7UWaA9mlPbBYQM4eRn-VyimyUSgXyqvSiGLs9lLxvuxMdqg',
  },
  {
    name: 'Atlas',
    price: '4.500.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1m1kzlr3_HD5GbPN7dgg6vyZigrhEmjDSDXaBR2QxXzfIU1c_x_gVcIpaFexj62doAg0RRW07rzqhcHWIMH7kpxCDyPeQXubbEnCEu-KpXdTj3U7_C4xP7BltJCqswGqSmZSKzMfrl-p-I5AT74I1abMU3H-GAcelt8tTrvS9DZse_Kukjdb2rjKBf7MVyu3IaIIcE5ztOvUPnXWplZ1pSmYVqqWUMJ6y9Ii0Qk2uLXJbZXfua6lDYNqk9uzU1kfExGb7eZH-JmA',
  },
];

export default function ProductDetailPage() {
  const [activeThumb, setActiveThumb] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addItem } = useCart();

  function handleAddToCart() {
    addItem({
      id: 'oliver',
      name: 'Gấu bông Oliver',
      subtitle: 'Heritage Edition · Mohair',
      price: 4200000,
      image: THUMBNAILS[0],
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  }

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="pt-20 pb-32 max-w-screen-xl mx-auto">
        {/* Breadcrumb */}
        <nav className="px-container-margin-mobile py-6 flex items-center gap-2 text-on-surface-variant font-vietnam text-[14px] font-semibold">
          <Link to="/home" className="hover:text-primary transition-colors">Bộ sưu tập</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-primary">The Heritage</span>
        </nav>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 px-container-margin-mobile">
          {/* Gallery */}
          <div className="space-y-6">
            <div className="aspect-[4/5] overflow-hidden rounded-xl bg-surface-container shadow-[0_20px_50px_rgba(27,28,28,0.05)] relative group cursor-zoom-in">
              <img
                src={THUMBNAILS[activeThumb]}
                alt="Oliver"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-surface-container-lowest/80 backdrop-blur-sm px-4 py-1 rounded-full text-primary font-vietnam text-[14px] font-semibold border border-outline-variant">
                  NEW ARRIVAL
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {THUMBNAILS.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-24 aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-primary' : 'border-transparent hover:border-outline-variant'
                  }`}
                >
                  <img src={src} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col h-full">
            <p className="font-vietnam text-[14px] font-semibold text-primary tracking-[0.2em] uppercase mb-2">
              The Heritage Collection
            </p>
            <h2 className="font-garamond text-[32px] leading-[40px] font-medium text-on-surface mb-3">Oliver</h2>

            <div className="flex items-center gap-2">
              <div className="flex text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                ))}
              </div>
              <span className="text-on-surface-variant font-vietnam text-[14px] font-semibold">(48 Đánh giá)</span>
            </div>

            <div className="mt-8">
              <p className="font-garamond text-[24px] leading-[32px] font-medium text-primary">4.200.000đ</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-on-surface-variant font-vietnam text-[14px] font-semibold">Còn hàng</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-on-surface-variant font-vietnam text-body-md leading-relaxed">
                Oliver là biểu tượng của sự sang trọng vượt thời gian. Được chế tác từ chất liệu{' '}
                <span className="text-primary font-medium">Mohair thượng hạng</span> nhập khẩu trực tiếp, mỗi đường kim mũi chỉ đều được thực hiện thủ công tỉ mỉ bởi các nghệ nhân lành nghề của Illumia.
              </p>
              <ul className="space-y-2">
                {['Chứng nhận thủ công Heritage', 'Mắt kính cường lực tinh xảo'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-on-surface font-vietnam text-[14px] font-semibold">
                    <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 px-8 rounded-full font-vietnam text-[14px] font-semibold flex items-center justify-center gap-2 active:scale-95 transition-all ${
                  addedToCart
                    ? 'bg-green-700 text-white'
                    : 'bg-primary text-on-primary hover:opacity-90'
                }`}
              >
                <span className="material-symbols-outlined">{addedToCart ? 'check' : 'shopping_bag'}</span>
                {addedToCart ? 'ĐÃ THÊM VÀO GIỎ' : 'THÊM VÀO GIỎ HÀNG'}
              </button>
              <button className="w-14 h-14 border border-outline-variant rounded-full flex items-center justify-center hover:bg-surface-container transition-colors group">
                <span className="material-symbols-outlined text-on-surface group-hover:text-error transition-colors">favorite</span>
              </button>
            </div>

            {/* Shipping info */}
            <div className="mt-8 pt-8 border-t border-outline-variant grid grid-cols-2 gap-4">
              {[
                { icon: 'local_shipping', title: 'Giao hàng miễn phí', desc: 'Cho đơn hàng trên 2tr' },
                { icon: 'verified', title: 'Bảo hành 2 năm', desc: 'Chăm sóc chất liệu trọn đời' },
              ].map(info => (
                <div key={info.title} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary">{info.icon}</span>
                  <div>
                    <p className="font-vietnam text-[14px] font-semibold">{info.title}</p>
                    <p className="text-xs text-on-surface-variant">{info.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="mt-24 px-container-margin-mobile">
          <div className="flex gap-10 border-b border-outline-variant mb-10 overflow-x-auto hide-scrollbar">
            {['Mô tả chi tiết', 'Quy trình chế tác', 'Đánh giá (48)'].map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`pb-4 border-b-2 font-vietnam text-[14px] font-semibold whitespace-nowrap transition-colors ${
                  activeTab === i
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-garamond text-[24px] leading-[32px] font-medium">Nghệ thuật thủ công</h3>
              <p className="text-on-surface-variant font-vietnam leading-relaxed text-body-md">
                Mỗi chú gấu Oliver được tạo ra qua một quy trình kéo dài 72 giờ làm việc tập trung. Chúng tôi sử dụng vải Mohair truyền thống, được dệt từ lông dê Angora, mang lại độ mềm mại tự nhiên và độ bóng đặc trưng không thể tìm thấy ở các vật liệu nhân tạo.
                <br /><br />
                Hệ thống khớp nối bên trong cho phép Oliver có thể cử động linh hoạt ở đầu, tay và chân, giúp tạo ra những tư thế trưng bày sống động trong không gian sống của bạn.
              </p>
            </div>
            <div className="bg-surface-container-low p-8 rounded-xl space-y-6">
              <h4 className="font-vietnam text-[14px] font-semibold tracking-widest text-on-surface-variant uppercase">Thông số kỹ thuật</h4>
              <div className="space-y-4">
                {[
                  ['Kích thước', '35cm'],
                  ['Cân nặng', '850g'],
                  ['Vật liệu', 'Mohair, Silk, Glass'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between border-b border-outline-variant pb-2">
                    <span className="text-on-surface-variant font-vietnam text-body-md">{label}</span>
                    <span className="font-medium font-vietnam text-body-md">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related products */}
        <section className="mt-section-gap-mobile md:mt-section-gap-desktop px-container-margin-mobile mb-20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="font-vietnam text-[14px] font-semibold text-primary tracking-widest mb-2 uppercase">Gợi ý cho bạn</p>
              <h3 className="font-garamond text-[24px] leading-[32px] font-medium">Sản phẩm liên quan</h3>
            </div>
            <Link to="/search" className="text-primary font-vietnam text-[14px] font-semibold flex items-center gap-1 hover:underline">
              Xem tất cả <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RELATED.map(p => (
              <div key={p.name} className="group cursor-pointer">
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-surface-container mb-4 shadow-sm group-hover:shadow-lg transition-all duration-500">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="font-vietnam text-[14px] font-semibold text-on-surface-variant uppercase tracking-wider mb-1">The Heritage</p>
                <h4 className="font-garamond text-base mb-1">{p.name}</h4>
                <p className="text-primary font-medium font-vietnam">{p.price}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
