import React from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-stone-100'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-amber-200 flex-shrink-0">
              <img
                src="/favicon.png"
                alt="V-Closet"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-black text-stone-800 tracking-tighter">
              V-Closet
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { label: 'Tính năng', href: '#features' },
              { label: 'Cách hoạt động', href: '#how-it-works' },
              { label: 'Bảng giá', href: '#pricing' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-stone-600 hover:text-stone-900 font-medium transition-colors text-sm relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-amber-500 rounded group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://play.google.com/store/apps/details?id=com.sentinels.vcloset"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'download_app', { method: 'navbar_desktop_googleplay' })}
              className="flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Tải App Ngay
            </a>
          </div>

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 p-2 rounded-xl hover:bg-stone-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-stone-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {[
              { label: 'Tính năng', href: '#features' },
              { label: 'Cách hoạt động', href: '#how-it-works' },
              { label: 'Bảng giá', href: '#pricing' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-stone-700 hover:text-stone-900 hover:bg-amber-50 font-medium rounded-xl transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 pt-4 px-2">
              <a href="#" onClick={(e) => e.preventDefault()} className="opacity-50 cursor-not-allowed flex items-center justify-center bg-stone-100 rounded-lg p-2" style={{ height: '48px' }}>
                <img src="/appstore.png" alt="App Store" className="h-9 w-full object-contain" />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.sentinels.vcloset" target="_blank" rel="noopener noreferrer" className="flex-1" onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'download_apk', { method: 'navbar_mobile_googleplay' })}>
                <img src="/chplay.png" alt="Google Play" className="h-12 w-full object-contain" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
