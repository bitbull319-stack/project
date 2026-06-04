import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlWCDtLFAf9IkGu4Xas2sjANtgBJaKWZOPZQOBvz-zs3zxI1UoWbBpXxZ4t4tSnf7lzCw0apCxydjbifxcG6uZ0u9m25GxyGhpU_U0LLDUSLCVncfn0V4JudcloZYy-lgDrtq2R951l_hgCVFunikvb1ZSXIDYXzZvluIBata9DpOFW67gZRG-FQLShAeL2roipK-qCs5Pq6RyeN0-EkfyR9MC6cSRHpSP_F_cki4ODCYbiHnqn4as70Gm9CvheQDhl3niTf-FI-I"
          alt=""
          className="w-full h-full object-cover opacity-30 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background to-background" />
      </div>

      <main className="relative z-10 w-full max-w-[480px] px-container-margin-mobile md:px-0 flex flex-col items-center">
        <header className="mb-12 text-center">
          <h1 className="font-garamond text-[28px] md:text-[32px] tracking-[0.3em] text-primary mb-2 font-medium">ILLUMIA</h1>
          <p className="font-vietnam text-body-md text-on-surface-variant opacity-80 italic">
            Đánh thức sự sang trọng trong từng điểm chạm
          </p>
        </header>

        <div className="w-full bg-surface-container-lowest/60 luxury-blur p-8 md:p-12 rounded-xl shadow-luxury-lg flex flex-col gap-8">
          <div className="text-center">
            <h2 className="font-garamond text-[24px] leading-[32px] font-medium text-on-surface mb-2">Chào mừng trở lại</h2>
            <p className="font-vietnam text-body-md text-on-surface-variant">Vui lòng đăng nhập vào tài khoản của bạn</p>
          </div>

          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            {/* Email */}
            <div className="relative group">
              <label className="block font-vietnam text-[14px] font-semibold text-on-surface-variant mb-2 ml-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="example@illumia.com"
                className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-1 focus:ring-0 focus:border-primary font-vietnam text-body-md placeholder:text-outline-variant/50 transition-all duration-300 outline-none"
              />
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-focus-within:w-full" />
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="flex justify-between items-center mb-2">
                <label className="font-vietnam text-[14px] font-semibold text-on-surface-variant ml-1" htmlFor="password">
                  Mật khẩu
                </label>
                <a href="#" className="font-vietnam text-[14px] font-semibold text-primary hover:opacity-70 transition-opacity">
                  Quên mật khẩu?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-1 focus:ring-0 focus:border-primary font-vietnam text-body-md placeholder:text-outline-variant/50 transition-all duration-300 outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-focus-within:w-full" />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-primary-container text-on-primary-container font-vietnam text-[14px] font-semibold py-4 rounded-lg tracking-widest hover:opacity-90 active:scale-[0.98] transition-all duration-300 uppercase"
              >
                Đăng nhập
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="relative flex items-center py-2">
            <div className="flex-grow border-t border-outline-variant/30" />
            <span className="flex-shrink mx-4 font-vietnam text-[14px] font-semibold text-outline-variant uppercase tracking-tighter">Hoặc</span>
            <div className="flex-grow border-t border-outline-variant/30" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 border border-outline-variant py-3 rounded-lg hover:bg-surface-container-low transition-colors group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuASFHhheg8T4DDintwVNTqMFRHun7QFh1x1kq0-qbgGRAwVqzbdGCBoqiAOMUiNTksQCuxSMj8adfj9npd7foqF9lHPxPUVDwcIYC3E58__yhm678DskfpUzOS5ioJW3JUgF1f6-37JBizKJVY6KdbNTl49xmu5GzbQFmQV3nXZt6SQsk43C5nDBTpKUsDhyNUBoC0QW6ATDy2AzFKnMyhhfWasubM89DHArc0-X0P8jUS3ByU4LoOl6HtB6-aULE9YtLFJF75Kj7c"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="font-vietnam text-[14px] font-semibold text-on-surface-variant">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-outline-variant py-3 rounded-lg hover:bg-surface-container-low transition-colors group">
              <span className="material-symbols-outlined text-[22px] text-on-surface-variant">groups</span>
              <span className="font-vietnam text-[14px] font-semibold text-on-surface-variant">Facebook</span>
            </button>
          </div>
        </div>

        <footer className="mt-8 text-center">
          <p className="font-vietnam text-body-md text-on-surface-variant">
            Chưa có tài khoản?{' '}
            <Link to="/register" className="text-primary font-vietnam text-[14px] font-semibold ml-1 hover:underline underline-offset-4 decoration-1">
              Đăng ký ngay
            </Link>
          </p>
        </footer>
      </main>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 opacity-40">
        {['Privacy', 'Terms', 'Contact'].map(t => (
          <span key={t} className="font-vietnam text-[10px] tracking-widest uppercase">{t}</span>
        ))}
      </div>
    </div>
  );
}
