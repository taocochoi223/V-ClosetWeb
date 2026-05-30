import React from 'react';
import { motion } from 'framer-motion';
import { Shirt, Scissors, Wand2, Users } from 'lucide-react';

const features = [
  {
    icon: <Shirt size={32} />,
    title: 'Số Hóa Tủ Đồ',
    description: 'Chụp ảnh quần áo, AI sẽ tự động tách nền và phân loại, giúp bạn quản lý từng item một cách có hệ thống.'
  },
  {
    icon: <Scissors size={32} />,
    title: 'Phối Đồ Canvas',
    description: 'Thoả sức sáng tạo ghép nối các trang phục và phụ kiện trên một bảng canvas tự do, lưu lại những set đồ ưng ý.'
  },
  {
    icon: <Wand2 size={32} />,
    title: 'Thử Đồ Ảo (Virtual Try-on)',
    description: 'Trải nghiệm tính năng ướm thử trang phục lên chính hình ảnh của bạn thông qua AI tạo sinh cao cấp.'
  },
  {
    icon: <Users size={32} />,
    title: 'Mạng Xã Hội Thời Trang',
    description: 'Chia sẻ phong cách, tương tác, bình luận, và theo dõi những fashionista khác trong cộng đồng V-Closet.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Trải Nghiệm Thời Trang Khác Biệt</h2>
          <p className="text-lg text-text/70">
            V-Closet mang đến những công cụ AI mạnh mẽ nhất để nâng tầm phong cách cá nhân của bạn mỗi ngày.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-8 rounded-3xl border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text mb-4">{feature.title}</h3>
              <p className="text-text/70 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
