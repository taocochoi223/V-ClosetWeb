import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Mail, Heart } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#EDE8DF' }}>

      {/* Download CTA Banner */}
      <div className="relative py-16 px-4 overflow-hidden" style={{ backgroundColor: '#3E2723' }}>
        {/* Subtle warm glow */}
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(161,110,83,0.15)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(161,110,83,0.1)' }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Bắt đầu hành trình thời trang của bạn
          </h2>
          <p className="text-amber-200/70 text-lg mb-10">
            Tải V-Closet miễn phí — sẵn có trên App Store, Google Play và tải thẳng APK
          </p>

          {/* Store Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* App Store */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 text-stone-900 px-5 py-3 rounded-2xl shadow-lg transition-all duration-300 opacity-50 cursor-not-allowed"
              style={{ backgroundColor: '#FDFBF7' }}
            >
              <img src="/appstore.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
              <div className="text-left">
                <div className="text-[9px] font-medium uppercase tracking-widest leading-none mb-0.5" style={{ color: '#9E8A7A' }}>Tải về trên</div>
                <div className="text-base font-bold leading-tight" style={{ color: '#3E2723' }}>App Store</div>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 text-stone-900 px-5 py-3 rounded-2xl shadow-lg transition-all duration-300 opacity-50 cursor-not-allowed"
              style={{ backgroundColor: '#FDFBF7' }}
            >
              <img src="/chplay.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
              <div className="text-left">
                <div className="text-[9px] font-medium uppercase tracking-widest leading-none mb-0.5" style={{ color: '#9E8A7A' }}>Tải về trên</div>
                <div className="text-base font-bold leading-tight" style={{ color: '#3E2723' }}>Google Play</div>
              </div>
            </a>

            {/* Tải APK trực tiếp */}
            <a
              href="/v-closet.apk"
              download="v-closet-app.apk"
              onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'download_apk', { method: 'footer_direct' })}
              className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 text-stone-900 px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: '#FDFBF7' }}
            >
              <img src="/android.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
              <div className="text-left">
                <div className="text-[9px] font-medium uppercase tracking-widest leading-none mb-0.5" style={{ color: '#9E8A7A' }}>Tải trực tiếp</div>
                <div className="text-base font-bold leading-tight" style={{ color: '#3E2723' }}>File APK</div>
              </div>
            </a>

            {/* APKPure */}
            <a
              href="https://apkpure.com/v-closet-tr%E1%BB%A3-l%C3%BD-th%E1%BB%9Di-trang-ai/com.sentinels.vcloset"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'download_apk', { method: 'footer_apkpure' })}
              className="group inline-flex items-center justify-start w-full sm:w-[210px] gap-3 text-stone-900 px-5 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              style={{ backgroundColor: '#FDFBF7' }}
            >
              <img src="/apkpure.png" alt="" className="h-8 w-8 rounded-lg object-contain flex-shrink-0" />
              <div className="text-left">
                <div className="text-[9px] font-medium uppercase tracking-widest leading-none mb-0.5" style={{ color: '#9E8A7A' }}>Tải về trên</div>
                <div className="text-base font-bold leading-tight" style={{ color: '#3E2723' }}>APKPure</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer — cream tone */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/favicon.png" alt="V-Closet Logo" className="w-9 h-9 rounded-full object-contain" style={{ boxShadow: '0 0 0 2px #C4B49A' }} />
              <span className="text-2xl font-black tracking-tighter" style={{ color: '#3E2723' }}>V-Closet</span>
            </div>
            <p className="mb-6 leading-relaxed text-sm" style={{ color: '#7A6A5F' }}>
              Trợ lý thời trang AI và ứng dụng quản lý tủ đồ số hóa hàng đầu Việt Nam.
            </p>
            <div className="flex space-x-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61590136782776"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#DDD8CE', color: '#7A6A5F' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1877F2'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#DDD8CE'; e.currentTarget.style.color = '#7A6A5F'; }}
              >
                <FacebookIcon />
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@vcloset.t.thng.mi?_r=1&_t=ZS-972UK5IkOq0"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#DDD8CE', color: '#7A6A5F' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#010101'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#DDD8CE'; e.currentTarget.style.color = '#7A6A5F'; }}
              >
                <TikTokIcon />
              </a>
              {/* Globe */}
              <a
                href="#"
                title="Website"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#DDD8CE', color: '#7A6A5F' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#4A3B32'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#DDD8CE'; e.currentTarget.style.color = '#7A6A5F'; }}
              >
                <Globe size={16} />
              </a>
              {/* Share */}
              <a
                href="#"
                title="Chia sẻ"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ backgroundColor: '#DDD8CE', color: '#7A6A5F' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#4A3B32'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#DDD8CE'; e.currentTarget.style.color = '#7A6A5F'; }}
              >
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#3E2723' }}>Sản phẩm</h4>
            <ul className="space-y-3">
              {[
                { label: 'Tính năng', href: '/#features' },
                { label: 'Cách hoạt động', href: '/#how-it-works' },
                { label: 'Bảng giá Premium', href: '/#pricing' },
                { label: 'Cập nhật tính năng', href: '#' }
              ].map((item, i) => (
                <li key={i}>
                  {item.href.startsWith('/') ? (
                    <a href={item.href} className="text-sm transition-colors hover:underline" style={{ color: '#7A6A5F' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#4A3B32'}
                      onMouseLeave={e => e.currentTarget.style.color = '#7A6A5F'}
                    >{item.label}</a>
                  ) : (
                    <a href="javascript:void(0)" className="text-sm transition-colors hover:underline" style={{ color: '#7A6A5F' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#4A3B32'}
                      onMouseLeave={e => e.currentTarget.style.color = '#7A6A5F'}
                    >{item.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#3E2723' }}>Công ty</h4>
            <ul className="space-y-3">
              {['Về chúng tôi', 'Tuyển dụng', 'Blog', 'Liên hệ'].map((item, i) => (
                <li key={i}>
                  <a href="javascript:void(0)" className="text-sm transition-colors" style={{ color: '#7A6A5F' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#4A3B32'}
                    onMouseLeave={e => e.currentTarget.style.color = '#7A6A5F'}
                  >{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-5 text-sm uppercase tracking-wider" style={{ color: '#3E2723' }}>Hỗ trợ</h4>
            <ul className="space-y-3">
              {[
                { label: 'Trung tâm trợ giúp', to: '#' },
                { label: 'Điều khoản dịch vụ', to: '/terms' },
                { label: 'Chính sách bảo mật', to: '/privacy' }
              ].map((item, i) => (
                <li key={i}>
                  {item.to.startsWith('/') ? (
                    <Link to={item.to} className="text-sm transition-colors" style={{ color: '#7A6A5F' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#4A3B32'}
                      onMouseLeave={e => e.currentTarget.style.color = '#7A6A5F'}
                    >{item.label}</Link>
                  ) : (
                    <a href="javascript:void(0)" className="text-sm transition-colors" style={{ color: '#7A6A5F' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#4A3B32'}
                      onMouseLeave={e => e.currentTarget.style.color = '#7A6A5F'}
                    >{item.label}</a>
                  )}
                </li>
              ))}
              <li className="flex items-center text-sm" style={{ color: '#7A6A5F' }}>
                <Mail size={14} className="mr-2" style={{ color: '#8B6F5E' }} />
                support@vcloset.vn
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm gap-4" style={{ borderTop: '1px solid #C4B49A', color: '#9E8A7A' }}>
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} V-Closet. Made with
            <Heart size={12} className="text-rose-400 fill-rose-400" />
            in Vietnam.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="transition-colors" style={{ color: '#9E8A7A' }}
              onMouseEnter={e => e.currentTarget.style.color = '#4A3B32'}
              onMouseLeave={e => e.currentTarget.style.color = '#9E8A7A'}
            >Điều khoản</Link>
            <Link to="/privacy" className="transition-colors" style={{ color: '#9E8A7A' }}
              onMouseEnter={e => e.currentTarget.style.color = '#4A3B32'}
              onMouseLeave={e => e.currentTarget.style.color = '#9E8A7A'}
            >Bảo mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
