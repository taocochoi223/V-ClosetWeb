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
                src="/favicon.jpg"
                alt="V-Closet"
                className="w-full h-full object-cover scale-[1.6] origin-center"
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
              href="/v-closet.apk"
              download="v-closet-app.apk"
              className="flex items-center gap-2 bg-stone-900 hover:bg-stone-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Tải App Ngay (APK)
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
            <div className="flex gap-3 pt-4 px-2">
              <a href="#" onClick={(e) => e.preventDefault()} className="flex-1 opacity-50 cursor-not-allowed">
                <img src="/appstore.png" alt="App Store" className="h-12 w-full object-contain" />
              </a>
              <a href="/v-closet.apk" download="v-closet-app.apk" className="flex-1">
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
