import React from 'react';
import { Globe, MessageCircle, Share2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-text tracking-tighter block mb-6">
              V-Closet
            </span>
            <p className="text-text/70 mb-6 leading-relaxed">
              Trợ lý thời trang AI và ứng dụng quản lý tủ đồ số hóa hàng đầu giúp bạn định hình phong cách cá nhân.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text hover:bg-primary hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text hover:bg-primary hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-text hover:bg-primary hover:text-white transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-text mb-6">Sản phẩm</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-text/70 hover:text-primary transition-colors">Tính năng</a></li>
              <li><a href="#how-it-works" className="text-text/70 hover:text-primary transition-colors">Cách hoạt động</a></li>
              <li><a href="#pricing" className="text-text/70 hover:text-primary transition-colors">Bảng giá Premium</a></li>
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Cập nhật tính năng</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-text mb-6">Công ty</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Tuyển dụng</a></li>
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Liên hệ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-text mb-6">Hỗ trợ</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Trung tâm trợ giúp</a></li>
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="#" className="text-text/70 hover:text-primary transition-colors">Chính sách bảo mật</a></li>
              <li className="flex items-center text-text/70">
                <Mail size={16} className="mr-2" />
                support@vcloset.vn
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-text/60 text-sm">
          <p>&copy; {new Date().getFullYear()} V-Closet. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
