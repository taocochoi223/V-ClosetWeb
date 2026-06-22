import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-float-delay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      {/* Floating dots decoration */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-amber-400/40 rounded-full animate-twinkle"
          style={{
            top: `${15 + i * 13}%`,
            left: `${5 + i * 15}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/70 backdrop-blur-sm border border-amber-200 text-sm font-semibold text-amber-800 mb-8 shadow-lg"
        >
          <Sparkles size={16} className="text-amber-500" />
          <span>Trợ lý Thời trang AI #1 Việt Nam</span>
          <div className="flex items-center gap-0.5 ml-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} className="text-amber-500 fill-amber-500" />
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-stone-800 tracking-tight mb-6 leading-[1.05]"
        >
          Tủ Đồ Mơ Ước
          <br />
          <span className="bg-gradient-to-r from-amber-600 via-rose-500 to-amber-700 bg-clip-text text-transparent">
            Trong Tầm Tay
          </span>
        </motion.h1>

        {/* Sub headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Số hóa tủ quần áo, phối đồ bằng AI, thử đồ ảo trực tiếp và kết nối cộng đồng thời trang.
        </motion.p>

        {/* CTA — Store Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {/* App Store */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl transition-all duration-300 opacity-50 cursor-not-allowed"
          >
            <img src="/appstore.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
            <div className="text-left">
              <div className="text-[9px] text-stone-400 font-medium uppercase tracking-widest leading-none mb-0.5">Tải về trên</div>
              <div className="text-base font-bold leading-tight">App Store</div>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl transition-all duration-300 opacity-50 cursor-not-allowed"
          >
            <img src="/chplay.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
            <div className="text-left">
              <div className="text-[9px] text-stone-400 font-medium uppercase tracking-widest leading-none mb-0.5">Tải về trên</div>
              <div className="text-base font-bold leading-tight">Google Play</div>
            </div>
          </a>

          {/* APKPure */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 bg-stone-900 text-white px-5 py-3 rounded-2xl shadow-xl transition-all duration-300 opacity-50 cursor-not-allowed"
          >
            <img src="/apkpure.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
            <div className="text-left">
              <div className="text-[9px] text-stone-400 font-medium uppercase tracking-widest leading-none mb-0.5">Tải về trên</div>
              <div className="text-base font-bold leading-tight">APKPure</div>
            </div>
          </a>

          {/* APK Direct */}
          <a
            href="/vcloset.apk"
            download
            onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'download_apk', { method: 'hero_direct_apk' })}
            className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 bg-stone-900 hover:bg-stone-800 text-white px-5 py-3 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <img src="/android.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
            <div className="text-left">
              <div className="text-[9px] text-stone-400 font-medium uppercase tracking-widest leading-none mb-0.5">Tải về trực tiếp</div>
              <div className="text-base font-bold leading-tight">Bản APK</div>
            </div>
          </a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-6 text-sm text-stone-500 mb-20"
        >
          <div className="flex items-center gap-1.5">
            <Star size={14} className="text-amber-500 fill-amber-500" />
            <span className="font-semibold text-stone-700">4.9</span>
            <span>trên App Store</span>
          </div>
          <div className="w-px h-4 bg-stone-300" />
          <span>
            <span className="font-semibold text-stone-700">50,000+</span> người dùng
          </span>
          <div className="w-px h-4 bg-stone-300" />
          <span>
            <span className="font-semibold text-stone-700">Miễn phí</span> tải về
          </span>
        </motion.div>

        {/* App Mockup — real screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/80 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.2)] p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-rose-50 opacity-60" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-16">

              {/* Real phone screenshot */}
              <div className="flex-shrink-0 relative">
                <div
                  className="w-[200px] h-[410px] rounded-[2.8rem] overflow-hidden shadow-2xl"
                  style={{ border: '7px solid #2C1810', backgroundColor: '#1a1a1a' }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 z-10 rounded-b-2xl"
                    style={{ backgroundColor: '#2C1810' }}
                  />
                  <img
                    src="/app/screen-home.jpg"
                    alt="V-Closet App"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating labels */}
                <div className="absolute -right-6 top-10 bg-white rounded-2xl shadow-xl px-3 py-2 text-xs font-semibold text-stone-700 border border-stone-100 whitespace-nowrap animate-float">
                  ✨ AI đề xuất outfit
                </div>
                <div className="absolute -left-8 bottom-16 bg-white rounded-2xl shadow-xl px-3 py-2 text-xs font-semibold text-stone-700 border border-stone-100 whitespace-nowrap animate-float-delay">
                  👗 120 items
                </div>
              </div>

              {/* Text content right */}
              <div className="text-left flex-1">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4">
                  Trải nghiệm thời trang<br />
                  <span className="text-amber-600">thế hệ mới</span>
                </h2>
                <ul className="space-y-3 text-stone-600">
                  {[
                    '🤖 AI tách nền & phân loại trang phục',
                    '🎨 Canvas mix & match tự do',
                    '🧑‍🎤 Virtual Try-on ước đồ ảo',
                    '👥 Mạng xã hội thời trang',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm md:text-base">
                      <span className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center text-xs">{item.slice(0,2)}</span>
                      <span>{item.slice(2).trim()}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a href="#" onClick={(e) => e.preventDefault()} className="transform hover:-translate-y-1 transition-all duration-300 opacity-50 cursor-not-allowed" title="App Store (Sắp ra mắt)">
                    <img src="/appstore.png" alt="App Store" className="h-9 w-9 object-contain rounded-lg shadow-md hover:shadow-xl" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="transform hover:-translate-y-1 transition-all duration-300 opacity-50 cursor-not-allowed" title="Google Play (Sắp ra mắt)">
                    <img src="/chplay.png" alt="Google Play" className="h-9 w-9 object-contain rounded-lg shadow-md hover:shadow-xl" />
                  </a>
                  <a href="#" onClick={(e) => e.preventDefault()} className="transform hover:-translate-y-1 transition-all duration-300 opacity-50 cursor-not-allowed" title="APKPure (Tạm thời gián đoạn)">
                    <img src="/apkpure.png" alt="APKPure" className="h-9 w-9 object-contain rounded-lg shadow-md hover:shadow-xl" />
                  </a>
                  <a href="/vcloset.apk" download className="transform hover:-translate-y-1 transition-all duration-300" onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'download_apk', { method: 'hero_small_direct_apk' })} title="Tải APK trực tiếp">
                    <img src="/android.png" alt="Tải APK" className="h-9 w-9 object-contain rounded-lg shadow-md hover:shadow-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 flex justify-center"
        >
          <a href="#features" className="flex flex-col items-center gap-2 text-stone-400 hover:text-stone-600 transition-colors group">
            <span className="text-xs font-medium tracking-widest uppercase">Khám phá</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
