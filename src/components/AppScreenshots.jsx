import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const screens = [
  {
    src: '/app/screen-login.jpg',
    label: 'Đăng nhập',
    desc: 'Giao diện đơn giản, đăng nhập bằng Google chỉ 1 chạm',
  },
  {
    src: '/app/screen-home.jpg',
    label: 'Trang chủ',
    desc: 'Tổng quan tủ đồ & gợi ý phối đồ hôm nay',
  },
  {
    src: '/app/screen-wardrobe.jpg',
    label: 'Tủ đồ',
    desc: 'Quản lý từng món đồ được AI phân loại tự động',
  },
  {
    src: '/app/screen-outfits.jpg',
    label: 'Trang phục',
    desc: 'Lưu các set đồ yêu thích, riêng tư hoặc chia sẻ',
  },
  {
    src: '/app/screen-studio-ai.jpg',
    label: 'Studio AI',
    desc: 'Chọn người mẫu, chọn trang phục — AI thử đồ cho bạn',
  },
  {
    src: '/app/screen-shop.jpg',
    label: 'Cửa hàng',
    desc: 'Mua sắm trực tiếp trong app với hàng ngàn sản phẩm',
  },
];

const AppScreenshots = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % screens.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setActive((a) => (a - 1 + screens.length) % screens.length);
  const next = () => setActive((a) => (a + 1) % screens.length);

  return (
    <section className="py-28 overflow-hidden" style={{ backgroundColor: '#FDFBF7' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 text-sm font-semibold rounded-full mb-4 tracking-wide"
            style={{ backgroundColor: '#F5F0E8', color: '#6D4C41' }}
          >
            Giao Diện App
          </span>
          <h2 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ color: '#3E2723' }}>
            Đẹp từ trong ra ngoài
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#7A6A5F' }}>
            Thiết kế tinh tế, trải nghiệm mượt mà — V-Closet được xây dựng để bạn yêu thích mỗi ngày.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone showcase */}
          <div className="flex-shrink-0 relative flex items-center gap-4">
            {/* Prev button */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-x-0.5 z-10 shadow-md"
              style={{ backgroundColor: '#EDE8DF', color: '#4A3B32' }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Phone frame */}
            <div className="relative">
              {/* Glow behind phone */}
              <div
                className="absolute inset-0 rounded-[3rem] blur-3xl scale-90 opacity-30"
                style={{ backgroundColor: '#C4A882' }}
              />
              {/* Phone shell */}
              <div
                className="relative w-[240px] h-[500px] rounded-[3rem] overflow-hidden shadow-[0_30px_80px_-10px_rgba(0,0,0,0.25)]"
                style={{ border: '8px solid #2C1810', backgroundColor: '#1a1a1a' }}
              >
                {/* Notch */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 z-20 rounded-b-2xl"
                  style={{ backgroundColor: '#2C1810' }}
                />
                {/* Screen image */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={screens[active].src}
                    alt={screens[active].label}
                    className="w-full h-full object-cover object-top"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:translate-x-0.5 z-10 shadow-md"
              style={{ backgroundColor: '#EDE8DF', color: '#4A3B32' }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Right — screen list */}
          <div className="flex-1 w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              {screens.map((screen, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="group relative rounded-2xl overflow-hidden text-left transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    border: active === i ? '2px solid #6D4C41' : '2px solid transparent',
                    boxShadow: active === i ? '0 4px 20px rgba(109,76,65,0.2)' : '0 2px 8px rgba(0,0,0,0.08)',
                  }}
                >
                  <img
                    src={screen.src}
                    alt={screen.label}
                    className="w-full h-32 object-cover object-top"
                  />
                  <div
                    className="p-2.5"
                    style={{ backgroundColor: active === i ? '#F5F0E8' : '#fff' }}
                  >
                    <div className="text-xs font-bold mb-0.5" style={{ color: '#3E2723' }}>
                      {screen.label}
                    </div>
                    <div className="text-[10px] leading-relaxed" style={{ color: '#9E8A7A' }}>
                      {screen.desc}
                    </div>
                  </div>
                  {active === i && (
                    <div
                      className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ backgroundColor: '#6D4C41' }}
                    >
                      ✓
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 mt-6 justify-center lg:justify-start">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: active === i ? '24px' : '8px',
                    height: '8px',
                    backgroundColor: active === i ? '#6D4C41' : '#C4B49A',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
