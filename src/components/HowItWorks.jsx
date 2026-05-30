import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Chụp & Upload',
    description: 'Đăng tải hình ảnh những món đồ trong tủ quần áo thực tế của bạn lên hệ thống.'
  },
  {
    number: '02',
    title: 'AI Xử Lý',
    description: 'Hệ thống tự động tách phông nền, gắn tag thông minh (màu sắc, loại trang phục).'
  },
  {
    number: '03',
    title: 'Phối & Thử Đồ',
    description: 'Sử dụng Canvas để mix&match hoặc dùng tính năng Try-on để xem đồ lên dáng.'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Cách V-Closet Hoạt Động</h2>
              <p className="text-lg text-text/70 mb-12">
                Chỉ với vài thao tác đơn giản, toàn bộ tủ đồ của bạn sẽ được số hóa và sẵn sàng cho những ý tưởng phối đồ sáng tạo nhất.
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-card border border-border rounded-xl flex items-center justify-center font-bold text-primary text-xl shadow-sm">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                      <p className="text-text/70">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-3xl overflow-hidden bg-card border border-border shadow-2xl aspect-[4/5] flex items-center justify-center p-8"
            >
              {/* Decorative elements representing AI processing */}
              <div className="absolute inset-0 bg-gradient-to-br from-card to-background"></div>
              <div className="relative z-10 w-full max-w-sm space-y-4">
                 <div className="w-full h-40 bg-background rounded-2xl border-2 border-dashed border-border flex items-center justify-center text-text/50 font-medium">Khu vực Upload Ảnh</div>
                 <div className="w-full h-8 bg-primary/20 rounded-full animate-pulse"></div>
                 <div className="w-3/4 h-8 bg-primary/20 rounded-full animate-pulse delay-75"></div>
                 <div className="w-full h-32 bg-background rounded-2xl border border-border mt-4 flex items-center justify-center shadow-inner">
                    <span className="text-success font-semibold">Hoàn Tất Tách Nền</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
