import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-text tracking-tighter">
              V-Closet
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-text/80 hover:text-text font-medium transition-colors">Tính năng</a>
            <a href="#how-it-works" className="text-text/80 hover:text-text font-medium transition-colors">Cách hoạt động</a>
            <a href="#pricing" className="text-text/80 hover:text-text font-medium transition-colors">Bảng giá</a>
            <button className="bg-primary hover:bg-primaryHover text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Tải App Ngay
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-text">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#features" className="block px-3 py-2 text-text/80 hover:text-text font-medium">Tính năng</a>
            <a href="#how-it-works" className="block px-3 py-2 text-text/80 hover:text-text font-medium">Cách hoạt động</a>
            <a href="#pricing" className="block px-3 py-2 text-text/80 hover:text-text font-medium">Bảng giá</a>
            <button className="w-full bg-primary hover:bg-primaryHover text-white px-6 py-3 rounded-xl font-medium transition-colors mt-4">
              Tải App Ngay
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
