import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const HERITAGE_PRODUCTS = [
  {
    id: 'oliver',
    name: 'Oliver',
    subtitle: 'Chất liệu Mohair Thượng Hạng',
    price: '4.200.000₫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ8P3zvLu28N11kPmrgL44Y6pt_ACjBwFb5Q3XMVpLHKV7utGCi2EAB0wObg9f66Fof-nqhoPwjnpJvNiAMxVj25DYcQliyJent3d7a2pJV8jkzwzhFT3ct3xPx8EJ8cTwMR2suunq_WyrVcHAjrg3AOuCZjPIM8nNpCGO6seh-PFpHVz0QciKwbRGr-7WpYpz6_j4XB2IUL14fNqKVUdcGK5ZMxM0z369dHBnmh2UXRRa0EMpy8EPBfGnx-gnOfD1sc4loBcie5M',
  },
  {
    id: 'seraphina',
    name: 'Seraphina',
    subtitle: 'Lụa Satin & Thêu Tay',
    price: '5.800.000₫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr762B8Qtnu9HV0MxJ64756L11tTMx6CIai7o8kNoCvbnjCR1U2ho1RVmtK3kM2Wwl65eAqmpTsmkNJX9T_EEMEvX7s77HKdF5ryBvEYP1BQaHsB6lwEKbrwemKtgNDr5SU357ZJ7iLsMCLeUM7PhBJR9NNrG39pM5N5A2GRB-g7A1EMIjGAajJy6JdUOr5Cy5jFMv6tX-l0O1fOCUGoCI7BlE1VKhaVJbwRFAMEWUGPiO6bbX5azYCTKE1rVW2g2_PmzhDL1MNf0',
  },
  {
    id: 'atlas',
    name: 'Atlas',
    subtitle: 'Len Lông Cừu & Chi Tiết Vàng 18K',
    price: '7.500.000₫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCX3PkEVwMdECnSW3c81IvTZLIqxrfDkGIoT8zrAtf6bi6sjoL5MKDNOXkzLphWd95lW8XKz_sgNCxJ-s4oQuGHVeXOfYcvDdu1HTPUfk-tsP1qkeOA-kPH2fvfqa-uoJeeLTTElT4ngMDjgO9jbAhTFs1_BMZXRBT9Ga_dSlLFYbxw3WV_-IPBQcBKwS07uKbmBxRHMNvEYNawccbhC_1C0siFJuvcwgSYjzgZcBLYYX7DEkeJwlherfml0aQo7lru5hguyDmX3xc',
  },
];

const LIMITED_PRODUCTS = [
  {
    name: 'Orion',
    badge: '05/50 Toàn cầu',
    price: '12.000.000₫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABt3Hiw91oPJ6Tzn6EQ7_wA7nmR4uFxyqxGLNLSw62nMRufR535Zo4yZAhouYYKMowHIWswdN5OUQCbUF0IbqdhMvioAeUKFu545qDTE50sK913PGtDp0OUWNzkDR8-ilJ0Lpw0f25n9bhuFctnWwXbnRxrI3prD6Owf8UQMj-s9hXcvW6Z-gxf11Uzi5P0qgmHIglqm7PYqFUnAjAA466x2hy1L77FUKsuN8M8DuL2XxTtn-08VHZTg9wCMM6mZPFj2ElrG52Hdo',
    soldOut: false,
  },
  {
    name: 'Aurelius',
    badge: '12/50 Toàn cầu',
    price: '15.500.000₫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrg-plgSbBuLyxnZ_tJqKsneAUlLpcIUPd5ytNQDEJMS2PVTo76rhvSq2jG9USAQvCevn3iarJ-QGiIdg2pNEaAmKW26zMbDz8xMNFbxX9xbUDZ9BdvCUOjxWhYLQJhzCnXgIZQ2Sc4aOBXyeky_eq_6VOYoYCDvOVT0fwI6L8abYlm_OoEKxmf2CebFjdI8BVsVAGX1Wg_g3tXb3Z7J_wPH2975AeIhVRX-AhCKCgtmuCpmwpJqFZiXAIuCcLh50zCDgGCZqULk8',
    soldOut: false,
  },
  {
    name: 'Muse',
    badge: 'Sold Out',
    price: '9.800.000₫',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvZ6ra0ZNnebGEwzdXexXsajsYg28VZOVDCZ8p3leN0xyMNH18Tvyne7S_PxPCSvKccWxrozDSjnge-wK65Qat35P4jPbIrfblIYuY7gpqjJFSTJyIWSUmyXmfjm5RUQXLtI-8AL6CPFlLPpKlEDd0axFfyXjQjWJlzM9n0jn17j_mJYAJuY3ltYyfq5JiXfaUdRrTdWtgxK4kqsdF8Rl4Gafj4YTDPbSRHTluTYPqYvEPxtXHzVZPtsJ1CXULPzwlHn695LZFNlA',
    soldOut: true,
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function RevealSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={className}>
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <Header />

      <main className="pt-20 pb-32">
        {/* Hero Banner */}
        <RevealSection className="px-container-margin-mobile md:px-container-margin-desktop mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="relative h-[540px] md:h-[700px] w-full rounded-xl overflow-hidden shadow-luxury group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2neOTig5Hmln8sK9lySXkOayJfykdwyZzEcSHd4E8f-RlUIlCE4_enOGsco4uW5EL3xEsvb1LaLKuXsvk5m7Mr3GAQ7ausjM0OYXHZxqLIBtAX09166t2y4_UoILSvBImEBw1WS9hXoDJ3jl-J6__6GIecl4xHS-ujfZW1i0FtoG3Cy6QIt-Syygf7krxlXQYhLijzN7RX9UWUInxa1eXrDgs_Ka6H_BaoFOboGxadrAhAobaNYJGV95FQWmQYzAzvk_4kjO3zMU"
              alt="ILLUMIA Hero"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-end p-8 md:p-16">
              <span className="text-white/90 font-vietnam text-[14px] leading-[20px] tracking-[0.2em] uppercase mb-4 font-semibold">
                Ra mắt bộ sưu tập mới
              </span>
              <h1 className="text-white font-garamond text-[28px] md:text-[48px] font-medium mb-8 max-w-2xl leading-tight">
                Vẻ Đẹp Vĩnh Cửu Từ Sự Tinh Tế
              </h1>
              <Link
                to="/search"
                className="bg-primary-fixed text-on-primary-fixed px-8 py-4 rounded-full w-fit font-vietnam text-[14px] leading-[20px] tracking-widest hover:bg-primary-fixed-dim transition-colors uppercase font-semibold"
              >
                Khám Phá Ngay
              </Link>
            </div>
          </div>
        </RevealSection>

        {/* The Heritage */}
        <RevealSection className="mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="px-container-margin-mobile md:px-container-margin-desktop flex justify-between items-end mb-8">
            <div>
              <h2 className="font-garamond text-[32px] leading-[40px] font-medium text-primary mb-2">The Heritage</h2>
              <p className="text-on-surface-variant font-vietnam text-body-md opacity-70">Sự kế thừa từ những giá trị thủ công truyền thống.</p>
            </div>
            <Link to="/search" className="text-primary font-vietnam text-[14px] font-semibold border-b border-primary/30 pb-1 hover:border-primary transition-all">
              Xem tất cả
            </Link>
          </div>
          <div className="flex overflow-x-auto hide-scrollbar gap-gutter px-container-margin-mobile md:px-container-margin-desktop snap-x">
            {HERITAGE_PRODUCTS.map(p => (
              <Link
                key={p.id}
                to={p.id === 'oliver' ? '/product/oliver' : '#'}
                className="min-w-[280px] md:min-w-[360px] snap-start group block"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-4 shadow-luxury">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-primary">favorite</span>
                  </div>
                </div>
                <h3 className="font-garamond text-[24px] leading-[32px] font-medium text-on-surface">{p.name}</h3>
                <p className="text-on-surface-variant font-vietnam text-[14px] font-semibold mb-2">{p.subtitle}</p>
                <span className="text-primary font-bold font-vietnam">{p.price}</span>
              </Link>
            ))}
          </div>
        </RevealSection>

        {/* Limited Edition */}
        <RevealSection className="bg-surface-container-low py-16 mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="px-container-margin-mobile md:px-container-margin-desktop mb-12 text-center">
            <span className="text-primary font-vietnam text-[14px] font-semibold tracking-widest uppercase">Đặc Quyền Duy Nhất</span>
            <h2 className="font-garamond text-[32px] leading-[40px] font-medium text-on-surface mt-2">The Limited Edition</h2>
          </div>
          <div className="px-container-margin-mobile md:px-container-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-8">
            {LIMITED_PRODUCTS.map(p => (
              <div key={p.name} className="bg-surface rounded-2xl p-6 shadow-luxury transition-transform hover:-translate-y-2 duration-300">
                <div className="aspect-square rounded-xl overflow-hidden mb-6">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-garamond text-[24px] leading-[32px] font-medium text-on-surface">{p.name}</h3>
                    <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-tighter">
                      {p.badge}
                    </span>
                  </div>
                  {p.soldOut ? (
                    <span className="text-outline line-through font-bold font-vietnam">{p.price}</span>
                  ) : (
                    <span className="text-primary font-bold font-vietnam">{p.price}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Accessories Banner */}
        <RevealSection className="px-container-margin-mobile md:px-container-margin-desktop mb-section-gap-mobile md:mb-section-gap-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter h-[500px] md:h-[600px]">
            {[
              {
                name: 'LUMIÈRE',
                desc: 'Mini Chain Bag – Phiên bản da nappa',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMjqZkE1T4JHY-9fb3TC2qkqxuMLN7tgUzGhJD-krs_C8oDfD6P76NEPcl_fs0pqsnePT3ww-9Je8CMzbS4cYvyN5DA-rGBNmoxY_XmZdpWloOwspXah4s0Hn3ny0JVmq2w7o5AhP3kRbCtW6OLHsfPG1OIy9wPhnChTRxaaA7gR06kt4Cx_2ORZh0wIDrma3Lrcyp8Yu8OEXsn6S-P0fjdT-nznMU3D-9hlmKxmuD3v4tvcgeanriBa_DgTaKBj9YOUJgBWfY7k8',
              },
              {
                name: 'GRÁCE',
                desc: 'Phụ kiện đẳng cấp từ ILLUMIA',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWz_gHgYfSOpHiWYOFH02PcfRyv5ExhpDZUr5ymuoV1ZcJxFfP-tC2dkvBwNlxr7Rvv4w22OKoeqWqdW9UwUrBM7vqxa15AnvkfchmPt-FlS6OQnHlkRffUa_HmEFnO8c4oOa_0-RjhWQz3BkBEo5t6wi4j1fAe7vtnhA0EIJwWEFR1laNA15UAiOD07ax9twz71-3IcJmIrZw2UI50vn3UoTbU1nRkzZ69bAR8cwIveaYnc7YQUgzrmOuGAMyk-cuQKwgMLh4kEQ',
              },
            ].map(a => (
              <div key={a.name} className="relative rounded-2xl overflow-hidden shadow-luxury h-full group">
                <img
                  src={a.image}
                  alt={a.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-10">
                  <h3 className="text-white font-garamond text-[32px] leading-[40px] font-medium mb-2">{a.name}</h3>
                  <p className="text-white/80 font-vietnam text-body-md mb-6">{a.desc}</p>
                  <button className="bg-white text-on-surface px-6 py-3 rounded-full w-fit font-vietnam text-[14px] font-semibold hover:bg-primary-fixed transition-colors">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </RevealSection>

        {/* Featured Products Bento */}
        <RevealSection className="px-container-margin-mobile md:px-container-margin-desktop mb-section-gap-mobile">
          <h2 className="font-garamond text-[32px] leading-[40px] font-medium text-primary mb-12">Sản Phẩm Nổi Bật</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="col-span-2 row-span-2 bg-surface-container rounded-2xl overflow-hidden shadow-luxury relative group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUBmxgsWy3Nzc9JUaQUyPF6mym9J-FY3TbvvHwC5RebVVpSyL3Hq1PumOF__rSgg2fRCSP9dysBVqdQrzeYl97_eY_kCKx09h_rlSQ4tH46Ats43Hkkpjtpyr8udG_QQZPS9-mZIbkf6jyiD8Ha848Y_MzfdvWIim8p86IZaVywbskmGQuEoTZEBCJAxOPkRAQLGJwZa8IsFpIA0hfgGwzZs-VRqBtMf7cU41KjxYKUxb2Lkza5Aqm4W40ano0i49Bv-Qqqf7gHLg"
                alt="Featured collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                  Bán Chạy Nhất
                </span>
              </div>
            </div>

            {[
              {
                name: 'Móc khóa Gold Edition',
                price: '1.250.000₫',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCngQPH1dGCuus1R9UjI71uRKzi8LhMJKjj_hA7NT02IBczbM-qygW4wVKg2-xyuPvBzSWO3umTjXK0zjPdSZsfIqBSCDODweazm-Imtha5H6OXjciHc_-qMgaVDFuuFFVU0tbADObscCUEuAisk2WRQzkS6y_5H0lPEYiguZT-5ROf1w54reNEvDjV4qPtVA8JFf9dD1oJ62oykRHMWbHaRlDZPOmAysK6QXSauZm1IDN7aNbuLilND0dujIcAvgSaL5PasO5dcOI',
              },
              {
                name: 'Nến thơm ILLUMIA',
                price: '950.000₫',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDdaFq_0cn8OLlqvA-LjFm4s5Osilj7fv9HW-p2T7vOTnm8pvhdLviIF-MR0EqX4TbR93TRD6Krfyl8AWDa1nqXwbOyD2DWdciFSSxbBFEXz1GuIXK8yTUJ11Lj6D1j1GA9gkK1LXAOEZmC6ynoyJcdiTZ_ZiS_qE_Aaw8zmKN0UlxwG4LLEIaaxahK_YcTco2UKuxzUEOmlThf3EbTGK_n9270_lfUgZTeepuxT66xoRvxgeoEe-lRvK_c1IFfMAM--7Vz59sKEs',
              },
            ].map(item => (
              <div key={item.name} className="aspect-square bg-white rounded-2xl p-4 shadow-luxury flex flex-col justify-between">
                <div className="h-2/3 bg-surface-container-low rounded-xl overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="mt-2">
                  <h4 className="font-vietnam text-[12px] font-semibold truncate">{item.name}</h4>
                  <span className="text-primary text-[14px] font-bold font-vietnam">{item.price}</span>
                </div>
              </div>
            ))}

            <div className="col-span-2 bg-secondary-container/20 rounded-2xl p-8 flex items-center justify-between">
              <div className="max-w-[60%]">
                <h3 className="font-garamond text-[24px] leading-[32px] font-medium text-primary mb-2">Quà Tặng Cá Nhân Hóa</h3>
                <p className="text-on-surface-variant font-vietnam text-[14px] font-semibold">
                  Thêu tên và thông điệp riêng cho những người thân yêu nhất.
                </p>
              </div>
              <Link
                to="/search"
                className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-luxury hover:scale-105 active:scale-95 transition-all"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </RevealSection>
      </main>

      <BottomNav />

      {/* FAB */}
      <div className="fixed right-6 bottom-32 z-40 md:right-12 md:bottom-12">
        <button className="bg-primary-container text-on-primary-container w-16 h-16 rounded-full flex items-center justify-center shadow-luxury hover:scale-105 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-3xl">chat_bubble</span>
        </button>
      </div>
    </div>
  );
}
