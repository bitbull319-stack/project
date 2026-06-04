import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-6 md:p-12 overflow-x-hidden bg-background relative">
      {/* Ambient */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary-container/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-fixed/30 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] flex flex-col md:flex-row bg-surface-container-lowest rounded-[2rem] shadow-luxury-lg overflow-hidden min-h-[650px]">
        {/* Left brand panel */}
        <div className="hidden md:block md:w-1/2 relative overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFdOU8a3zvMiHQlk_tfnPUx8CpRbRCZtE5FO3t7XNJ8GZZt3K7p2pB9GeEApwnvsxhWRJ1KJp4dQcNL_nzSRqi-JoXlm8H-IFj623L7y_PPgOnNi3Be2pJH1awitvofpgLkeodAnA-OqpKa_00-pfmPAXdgh654R1oBYgX7fLrRRvHbVN623KOjEYy0nPyxsck6MAz6MdQs3wwtT0YCSVckmJYMKL6-ZM2y0qacK_kYA-lz2DVSatwDGWKNqIBPXK62l6EUq8bFOg"
            alt="Luxury aesthetic"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 text-white">
            <h2 className="font-garamond text-[48px] leading-[56px] font-medium mb-4 leading-tight">
              Gia nhập thế giới tinh hoa ILLUMIA.
            </h2>
            <p className="font-vietnam text-[18px] leading-[28px] text-white/80 max-w-sm">
              Nơi mỗi kỷ niệm được nâng niu bởi sự tinh xảo và sang trọng bậc nhất.
            </p>
          </div>
        </div>

        {/* Right form panel */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-surface-container-lowest">
          <div className="mb-10 text-center md:text-left">
            <span className="font-vietnam text-[14px] font-semibold text-primary tracking-[0.2em] uppercase mb-4 block">
              ILLUMIA COLLECTIVE
            </span>
            <h1 className="font-garamond text-[32px] leading-[40px] font-medium text-on-surface mb-2">
              Tạo tài khoản mới
            </h1>
            <p className="font-vietnam text-body-md text-on-surface-variant">
              Bắt đầu hành trình sưu tầm những tác phẩm nghệ thuật mềm mại.
            </p>
          </div>

          <form className="space-y-6" onSubmit={e => e.preventDefault()}>
            {[
              { id: 'fullname', label: 'Họ và tên', type: 'text', icon: 'person' },
              { id: 'email', label: 'Địa chỉ Email', type: 'email', icon: 'mail' },
              { id: 'phone', label: 'Số điện thoại', type: 'tel', icon: 'call' },
            ].map(field => (
              <div key={field.id} className="relative group">
                <label
                  className="block font-vietnam text-[14px] font-semibold text-on-surface-variant mb-2"
                  htmlFor={field.id}
                >
                  {field.label}
                </label>
                <div className="relative">
                  <input
                    id={field.id}
                    type={field.type}
                    className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 focus:ring-0 focus:border-primary font-vietnam text-body-md text-on-surface transition-all duration-300 outline-none pr-8"
                  />
                  <div className="absolute right-0 top-3 text-outline group-focus-within:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">{field.icon}</span>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-focus-within:w-full" />
              </div>
            ))}

            {/* Password */}
            <div className="relative group">
              <label className="block font-vietnam text-[14px] font-semibold text-on-surface-variant mb-2" htmlFor="reg-password">
                Mật khẩu
              </label>
              <div className="relative">
                <input
                  id="reg-password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full bg-transparent border-0 border-b-2 border-outline-variant py-3 focus:ring-0 focus:border-primary font-vietnam text-body-md text-on-surface transition-all duration-300 outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-0 top-3 text-outline hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-focus-within:w-full" />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-2">
              <input
                id="terms"
                type="checkbox"
                className="mt-1 rounded-sm border-outline text-primary focus:ring-primary w-4 h-4"
              />
              <label htmlFor="terms" className="font-vietnam text-[14px] font-semibold text-on-surface-variant leading-relaxed">
                Tôi đồng ý với các{' '}
                <a href="#" className="text-primary hover:underline transition-all">Điều khoản dịch vụ</a>
                {' '}và{' '}
                <a href="#" className="text-primary hover:underline transition-all">Chính sách bảo mật</a>
                {' '}của ILLUMIA.
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-8 bg-primary-container text-on-primary-container py-5 rounded-full font-vietnam text-[14px] font-semibold uppercase tracking-[0.15em] hover:bg-primary hover:text-on-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98]"
            >
              Đăng ký ngay
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="font-vietnam text-body-md text-on-surface-variant">
              Đã có tài khoản thành viên?{' '}
              <Link
                to="/login"
                className="inline-flex items-center ml-2 text-primary font-bold hover:translate-x-1 transition-transform duration-300"
              >
                Đăng nhập
                <span className="material-symbols-outlined align-middle ml-1 text-[18px]">arrow_forward</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-8 opacity-40 hidden lg:block">
        <p className="font-vietnam text-[14px] font-semibold text-outline transform -rotate-90 origin-left tracking-widest">
          CRAFTED FOR EXCELLENCE
        </p>
      </div>
    </div>
  );
}
