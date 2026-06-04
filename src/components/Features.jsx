import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Scissors, Wand2, Users } from 'lucide-react';

const features = [
  {
    icon: <Shirt size={28} />,
    emoji: '👗',
    title: 'Số Hóa Tủ Đồ',
    description: 'Chụp ảnh quần áo, AI tự động tách nền và phân loại từng item một cách thông minh.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    icon: <Scissors size={28} />,
    emoji: '🎨',
    title: 'Phối Đồ Canvas',
    description: 'Sáng tạo ghép nối trang phục & phụ kiện trên canvas tự do, lưu lại set đồ ưng ý.',
    color: 'from-rose-400 to-pink-500',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
  },
  {
    icon: <Wand2 size={28} />,
    emoji: '🪞',
    title: 'Virtual Try-on',
    description: 'Ướm thử trang phục lên chính hình ảnh của bạn qua AI tạo sinh cao cấp.',
    color: 'from-violet-400 to-purple-500',
    bg: 'bg-violet-50',
    border: 'border-violet-100',
  },
  {
    icon: <Users size={28} />,
    emoji: '👥',
    title: 'Cộng Đồng Thời Trang',
    description: 'Chia sẻ phong cách, tương tác và theo dõi fashionista khác trong V-Closet.',
    color: 'from-teal-400 to-cyan-500',
    bg: 'bg-teal-50',
    border: 'border-teal-100',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-28 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-4 tracking-wide">
            Tính Năng Nổi Bật
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-stone-800 mb-5 leading-tight">
            Trải Nghiệm Thời Trang
            <span className="bg-gradient-to-r from-amber-600 to-rose-500 bg-clip-text text-transparent"> Khác Biệt</span>
          </h2>
          <p className="text-lg text-stone-500 leading-relaxed">
            V-Closet mang đến những công cụ AI mạnh mẽ nhất để nâng tầm phong cách cá nhân của bạn mỗi ngày.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group relative ${feature.bg} border ${feature.border} rounded-3xl p-7 hover:shadow-2xl transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Glow on hover */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-stone-800 mb-3">{feature.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{feature.description}</p>

              {/* Arrow indicator */}
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-stone-400 group-hover:text-stone-600 transition-colors">
                <span>Tìm hiểu thêm</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
