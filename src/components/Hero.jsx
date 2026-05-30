import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-text mb-8"
          >
            <Sparkles size={16} className="text-primary" />
            <span>Trợ lý Thời trang AI & Quản lý tủ đồ thông minh</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-text tracking-tight mb-8 leading-tight"
          >
            Tủ Đồ Mơ Ước <br className="hidden md:block" />
            <span className="text-primary">Trong Tầm Tay Bạn</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Số hóa tủ quần áo, phối đồ bằng AI, thử đồ ảo trực tiếp trên cơ thể bạn và kết nối với cộng đồng đam mê thời trang ngay trên V-Closet.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="flex items-center justify-center gap-3 bg-text hover:bg-black text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download size={24} />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Tải về trên</div>
                <div className="text-lg leading-tight">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-3 bg-primary hover:bg-primaryHover text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              <Download size={24} />
              <div className="text-left">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Tải về trên</div>
                <div className="text-lg leading-tight">Google Play</div>
              </div>
            </button>
          </motion.div>
        </div>

        {/* Mockup Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="aspect-[16/9] bg-card rounded-3xl border border-border shadow-2xl overflow-hidden flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
            {/* Giả lập mockup điện thoại hiển thị app */}
            <div className="w-[300px] h-[600px] bg-background rounded-[3rem] border-[8px] border-text shadow-2xl relative overflow-hidden transform translate-y-10">
              <div className="absolute top-0 w-full h-6 bg-text rounded-b-xl flex justify-center">
                 <div className="w-1/3 h-4 bg-black rounded-b-xl"></div>
              </div>
              <div className="p-4 pt-12 h-full bg-background flex flex-col gap-4">
                 {/* App UI mockup */}
                 <div className="w-full h-32 bg-card rounded-xl border border-border flex items-center justify-center text-text/40">AI Lookbook</div>
                 <div className="flex gap-2">
                    <div className="w-1/2 h-40 bg-card rounded-xl border border-border"></div>
                    <div className="w-1/2 h-40 bg-card rounded-xl border border-border"></div>
                 </div>
                 <div className="w-full h-12 bg-primary/20 text-primary font-medium rounded-xl flex items-center justify-center">Virtual Try-on</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
