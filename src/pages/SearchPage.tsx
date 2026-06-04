import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

const PRODUCTS = [
  {
    id: 'aris',
    name: 'Gấu Bông Cổ Điển Aris',
    badge: 'Heritage Edition',
    badgeColor: 'text-primary',
    price: '2.450.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-VrgyGN-UMy5x-n6_HaeGm7Ent-ZDMo409Yz5HCftf7rYJ1gTuI-Vk_RSONyafLdJeIDxUmuZx9pTr3AdcyJcL-J-4GtvrFJav9qFXeVkxuCAtzhKgJxqtGrShDOSp--oIPvnWTyD3z1FG6YMda2nun-4H5VUq4nD00CRjMGt95QbOl4hIZRiYrBj5hH7GH0g5I6DXiQOjHJn4KMMR1FjOstAumEf7g6Z30idTLQsDRgMZGF8yVzUT90lH6TCldmWzhT_lzd5nDU',
    limited: false,
  },
  {
    id: 'bunny',
    name: 'Thỏ Bông Ánh Bạc',
    badge: 'Limited Series',
    badgeColor: 'text-outline',
    price: '3.800.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaJsmk51lV_5DV7jZH8ewNzqk5nHR2js3MeqQ1NT_PsgBPdSIXzbb26hb4bT954G6qV_ePknCNc7dX4t2WyHb0VOI4v3WQdqvrtdTSe_eQD-9-JAenhrIVCk40Iq2RA4bTitYUzDhyJxDSa45SKxx-iohYUNQNYRiytrrek1v3tuUYK0pHnftTvATxXZCy6rOe8N2isNofvedMbVxuKzScj2as04k37LjWdkxIIX6vDTIE5j4HcrQfoF1RE-ecqsAXfvrFh6fY2OI',
    limited: true,
  },
  {
    id: 'scarf',
    name: 'Khăn Lụa Thêu Tay',
    badge: 'Phụ kiện',
    badgeColor: 'text-outline',
    price: '850.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvBhp6JNh6qkIku-S4Aj7MrJq1lQhLSj3m-JGtejkkgQ9cUa2wAmW0ri-SfbH917m57gYq4_z4I3rAJ4tfdnySAaHLQNl8bR338JcZiw5gh-GJolvjLUvUuvr4XQU8_6H6OfmCGf_2nfmyHF0GAese_6IV9dhphHtf-IM2CEtiOtN_l0D60McmeDvHmUQ4u85OrKook-pzBfvk6wPH3n414AAYKcwXHl-LoPd0UZAZ77GYlFzNwF_vDogmZeKkMKhHle68VsAcvvE',
    limited: false,
  },
  {
    id: 'lion',
    name: 'Sư Tử Quyền Quý',
    badge: 'Heritage Edition',
    badgeColor: 'text-primary',
    price: '5.200.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzhwKHjwqUOxZhE16SPVkIurUINWKOBjxtAQ2FLAFl8ZCQtosEdjb1BYSvWLJs18XXw2aIBZUqi5YLykF_hRs8zRrkb89pe_kRHDa-3fIoKrfnWfvQuj_jvF0se9KcX11K5qNqjCg5FuBVHe0-Ej5FhggfaszHNm5ivgL-j1UT7pb8xsizzIKSLyI71M0QMNuwSfUrxFcDALqPfte8SxjdcBN2WEZx3Hfro8UPc4QIUdX9EX2NOWCpdZ4mlTHX70k9yolUcc5vNk',
    limited: false,
  },
  {
    id: 'crown',
    name: 'Bộ Vương Miện Hoàn Gia',
    badge: 'Phụ kiện',
    badgeColor: 'text-outline',
    price: '1.250.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCv3isy1mp46Q1Yorj9PocNHltbspfx5-LSql1W6i8wYu1oO5_sDO_5-I4TRq5Teij-pMi2dWtt0mMwbad7AlCrCI1FqnFzyWnbSZKPqQObmusljw5Tf8B7SKAY9QscAAuqJjcm8uaWHeqGw_w9VaFRh4fhJ38l3tZ5yrcd4K6hB4JrLfxH3yUowsV2ZdKGOnX2iqLDi1trDdPsyiaIxOEenhKzZLANFtZCgbiXrhzDA6DxT9lBIPIwG4pdOFiBKr_WxurrPL19STA',
    limited: false,
  },
  {
    id: 'lambgift',
    name: 'Hộp Quà Cừu Non Luxe',
    badge: 'Limited Series',
    badgeColor: 'text-outline',
    price: '4.500.000đ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXfJaPijSMvjmtqXylBLO0JBmqX7z98VpEALstTNXe9jrOUpGuYOtjOW8JSgsu05JyX7gdV4l3pn2Ud_xQNnWnHPI0CP1TnOKVuw_q8QlJnbcw-0YM46Xl649y2K0FBo5GY1thA1GLWNtXsGsQD9eSXmDYIC3UXqkEpO7rhaYRPUoU__6UVjoNiw-e3QNhOwPVTp0A-UQkEJedLtvGATg7_aiBnjaFAGtwSTIwg2DolUKOi_G7VGwC6Ykmbh0NLXN4FK33YFncuvQ',
    limited: true,
  },
];

const CHIPS = ['Heritage', 'Limited', 'Phụ kiện'];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const filtered = PRODUCTS.filter(p => {
    const matchQuery = query === '' || p.name.toLowerCase().includes(query.toLowerCase());
    const matchChip =
      activeChip === null ||
      (activeChip === 'Heritage' && p.badge.includes('Heritage')) ||
      (activeChip === 'Limited' && p.badge.includes('Limited')) ||
      (activeChip === 'Phụ kiện' && p.badge.includes('Phụ kiện'));
    return matchQuery && matchChip;
  });

  return (
    <div className="bg-background text-on-background min-h-screen">
      <Header />

      <main className="pt-24 pb-32 px-container-margin-mobile max-w-screen-xl mx-auto">
        {/* Search bar */}
        <section className="mb-12">
          <div className="relative group transition-transform duration-300 focus-within:scale-[1.01]">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Tìm kiếm bộ sưu tập của bạn..."
              className="w-full bg-surface-container-low border-none rounded-full py-5 px-8 pr-14 focus:ring-1 focus:ring-primary/20 text-on-surface placeholder:text-outline/60 transition-all shadow-[0_10px_40px_rgba(27,28,28,0.04)] font-vietnam text-[18px] outline-none"
            />
            <div className="absolute right-5 top-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-primary">search</span>
            </div>
          </div>

          {/* Chips */}
          <div className="mt-6 flex flex-wrap gap-3 items-center">
            <span className="font-vietnam text-[14px] font-semibold text-outline uppercase tracking-wider mr-2">Gợi ý:</span>
            {CHIPS.map(chip => (
              <button
                key={chip}
                onClick={() => {
                  setActiveChip(activeChip === chip ? null : chip);
                  setQuery('');
                }}
                className={`px-5 py-2 rounded-full border font-vietnam text-[14px] font-semibold transition-all active:scale-95 ${
                  activeChip === chip
                    ? 'border-primary/20 bg-primary-fixed/20 text-primary hover:bg-primary-fixed/40'
                    : 'border-outline-variant bg-surface-container text-on-surface-variant hover:bg-secondary-container/50'
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </section>

        {/* Results */}
        <section>
          <div className="flex justify-between items-baseline mb-8">
            <h2 className="font-garamond text-[24px] leading-[32px] font-medium text-on-surface">Kết quả tìm kiếm</h2>
            <span className="font-vietnam text-[14px] font-semibold text-outline">{filtered.length} Sản phẩm</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {filtered.map(p => (
              <Link
                key={p.id}
                to={p.id === 'aris' ? '/product/oliver' : '#'}
                className="group block"
              >
                <div className="aspect-[4/5] bg-surface-container-high rounded-xl overflow-hidden mb-6 shadow-[0_10px_40px_rgba(27,28,28,0.04)] relative">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.05]"
                  />
                  {p.limited && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-primary text-on-primary font-vietnam text-[10px] font-semibold uppercase tracking-widest rounded-full">
                        Limited
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={e => e.preventDefault()}
                      className="w-10 h-10 rounded-full bg-surface/90 backdrop-blur-sm flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform"
                    >
                      <span className="material-symbols-outlined">favorite</span>
                    </button>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className={`font-vietnam text-[14px] font-semibold uppercase tracking-widest ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                  <h3 className="font-garamond text-[24px] leading-[32px] font-medium text-on-surface group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-on-surface-variant font-vietnam text-body-md">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length > 0 && (
            <div className="mt-16 flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-primary border-t-transparent animate-spin" />
              <p className="font-vietnam text-[14px] font-semibold text-outline uppercase tracking-widest">
                Đang tải thêm tinh hoa...
              </p>
            </div>
          )}
        </section>
      </main>

      <BottomNav />
    </div>
  );
}
