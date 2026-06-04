import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const TEDDY_IMAGE_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB15AA4IWuUA9ci3X8MTmvRKKIXw--Tqn0yFQ-CmVu-Rdqz4R68qncPeMHO6-hkhPTyhDm4mLpuBWSM9u_tieC8SDATKtSIe21uZc3PNPUXeqg3nNWYjHqUK2gh_XoxLQdHXJPnpUPjbaNqjcWZmkMUVFDa8p-zAcka9_MBXHzBzyL9jlsG32-CKs6MU06D59uV1kuWCpv6OlwCAlCGpq6ZZbjFdcFwSGIeJzCIKWjyiV5qWd2USg4xeFXTdra3wzwjtHjeha65jFA';

export default function SplashPage() {
  const navigate = useNavigate();
  const splashRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const redirectTimer = window.setTimeout(() => {
      navigate('/home');
    }, 3500);
    return () => window.clearTimeout(redirectTimer);
  }, [navigate]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (progressBarRef.current) {
        progressBarRef.current.style.width = '100%';
      }
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (!splashRef.current) return;
      const x = (window.innerWidth / 2 - e.pageX) / 50;
      const y = (window.innerHeight / 2 - e.pageY) / 50;
      splashRef.current.style.transform = `translate(${x}px, ${y}px) scale(1)`;
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-background flex items-center justify-center min-h-screen overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="texture-overlay absolute inset-0" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary-container/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center text-center px-container-margin-mobile">
        <div ref={splashRef} className="splash-scale-up mb-12">
          <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-surface-container-highest/30 rounded-full blur-3xl" />
            <div className="relative floating-softly">
              <img
                alt="ILLUMIA Luxury Plush"
                className="w-32 h-32 md:w-48 md:h-48 object-contain mix-blend-multiply opacity-90 drop-shadow-2xl"
                src={TEDDY_IMAGE_URL}
              />
            </div>
          </div>
        </div>

        <div className="splash-fade-in" style={{ animationDelay: '0.4s' }}>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-lg md:text-display-lg tracking-[0.3em] champagne-gold-text mb-4 uppercase">
            ILLUMIA
          </h1>
          <p className="font-label-md text-label-md text-on-surface-variant tracking-[0.4em] uppercase opacity-60">
            The Art of Keepsakes
          </p>
        </div>

        <div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 splash-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <div className="w-12 h-[1px] bg-outline-variant relative overflow-hidden">
            <div
              ref={progressBarRef}
              className="absolute inset-0 bg-primary w-0 transition-all duration-1000 ease-out"
            />
          </div>
          <span className="font-label-md text-label-md text-outline tracking-widest uppercase text-[10px]">
            Establishing Luxury
          </span>
        </div>
      </main>
    </div>
  );
}
