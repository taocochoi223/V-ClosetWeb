import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Cơ Bản (Free)',
    price: '0đ',
    period: '/tháng',
    description: 'Dành cho người dùng mới trải nghiệm ứng dụng.',
    features: [
      'Số hóa tối đa 50 món đồ',
      'Phối đồ Canvas cơ bản',
      '5 lượt dùng AI tách nền/tháng',
      'Tham gia cộng đồng thời trang'
    ],
    buttonText: 'Tải Miễn Phí',
    highlighted: false
  },
  {
    name: 'Premium',
    price: '69.000đ',
    period: '/tháng',
    description: 'Khơi nguồn sáng tạo không giới hạn với sức mạnh AI.',
    features: [
      'Số hóa tủ đồ KHÔNG GIỚI HẠN',
      'Phối đồ Canvas Premium',
      'Không giới hạn AI tách nền & Lookbook',
      'Trải nghiệm Virtual Try-on cao cấp',
      'Huy hiệu Premium trên Profile'
    ],
    buttonText: 'Nâng Cấp Ngay',
    highlighted: true
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Bảng Giá Linh Hoạt</h2>
          <p className="text-lg text-text/70">
            Nâng cấp gói Premium để mở khóa toàn bộ sức mạnh của Trợ lý AI V-Closet.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex-1 rounded-3xl p-8 border ${
                plan.highlighted 
                  ? 'bg-background border-primary shadow-2xl relative' 
                  : 'bg-background border-border shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wider">
                  PHỔ BIẾN NHẤT
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
              <p className="text-text/70 mb-6">{plan.description}</p>
              <div className="mb-8 flex items-baseline">
                <span className="text-4xl font-extrabold text-text">{plan.price}</span>
                <span className="text-lg text-text/60 ml-2">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check size={20} className="text-success mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-text/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-colors mt-auto ${
                  plan.highlighted 
                    ? 'bg-primary hover:bg-primaryHover text-white' 
                    : 'bg-card hover:bg-border text-text border border-border'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
