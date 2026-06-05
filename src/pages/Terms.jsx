import React, { useEffect } from 'react';
import { FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Chấp nhận điều khoản",
      content: (
        <p className="text-[#5D4A3F] leading-relaxed">
          Bằng việc đăng ký, truy cập hoặc sử dụng ứng dụng và trang web V-Closet ("Dịch vụ"), bạn đồng ý bị ràng buộc bởi các Điều khoản Dịch vụ này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản, bạn không được phép sử dụng Dịch vụ của chúng tôi.
        </p>
      )
    },
    {
      title: "Sử dụng dịch vụ và Hành vi người dùng",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">Khi sử dụng V-Closet, bạn cam kết:</p>
          <ul className="space-y-3">
            {[
              "Cung cấp thông tin chính xác khi tạo tài khoản.",
              "Chịu trách nhiệm bảo mật mật khẩu và tài khoản của bạn.",
              "Không tải lên hình ảnh vi phạm bản quyền, đồi trụy, bạo lực hoặc vi phạm pháp luật hiện hành. V-Closet có quyền gỡ bỏ nội dung và khóa tài khoản vi phạm mà không cần báo trước.",
              "Không sử dụng Dịch vụ cho các mục đích thương mại khi chưa có sự cho phép bằng văn bản từ V-Closet."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
                <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-amber-600" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: "Nội dung do người dùng tạo (UGC)",
      content: (
        <p className="text-[#5D4A3F] leading-relaxed">
          Bạn giữ mọi quyền sở hữu đối với hình ảnh (quần áo, người mẫu) mà bạn tải lên. Bằng việc tải nội dung lên V-Closet, bạn cấp cho chúng tôi giấy phép toàn cầu, không độc quyền, miễn phí bản quyền để lưu trữ, sửa đổi (như tách nền, áp dụng thuật toán thử đồ) và hiển thị nội dung đó <strong className="text-[#3E2723]">chỉ nhằm mục đích cung cấp dịch vụ cho chính bạn</strong>.
        </p>
      )
    },
    {
      title: "Gói Premium và Thanh toán",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">
            V-Closet cung cấp các gói dịch vụ Premium với tính năng nâng cao (Studio AI nâng cao, lưu trữ không giới hạn).
          </p>
          <ul className="space-y-3">
            {[
              "Các khoản phí sẽ được tính qua tài khoản Apple App Store, Google Play hoặc cổng thanh toán trên Web tại thời điểm xác nhận mua hàng.",
              "Gói đăng ký sẽ tự động gia hạn trừ khi bạn hủy ít nhất 24 giờ trước khi kết thúc chu kỳ hiện tại.",
              "Bạn có thể quản lý hoặc hủy đăng ký thông qua cài đặt tài khoản của mình. Không hoàn tiền cho các chu kỳ thanh toán đã bắt đầu."
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </>
      )
    },
    {
      title: "Từ chối bảo đảm & Giới hạn trách nhiệm",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Các tính năng AI (như gợi ý phối đồ, thử đồ ảo) được cung cấp "như hiện trạng". Dù chúng tôi luôn cố gắng tối ưu thuật toán, V-Closet không đảm bảo kết quả từ AI sẽ luôn chính xác 100% hoặc phù hợp tuyệt đối với kỳ vọng thẩm mỹ cá nhân của bạn.
          </p>
          <p className="text-[#5D4A3F] leading-relaxed">
            Trong phạm vi tối đa được pháp luật cho phép, V-Closet sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại gián tiếp, ngẫu nhiên, hoặc do hậu quả nào phát sinh từ việc bạn sử dụng hoặc không thể sử dụng Dịch vụ.
          </p>
        </div>
      )
    },
    {
      title: "Thay đổi điều khoản & Liên hệ",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Chúng tôi có quyền sửa đổi các điều khoản này vào bất kỳ lúc nào. Những thay đổi quan trọng sẽ được thông báo đến người dùng qua email hoặc thông báo trực tiếp trên ứng dụng trước khi có hiệu lực.
          </p>
          <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#EAE3D9] flex items-center justify-between">
            <span className="text-[#5D4A3F]">Mọi thắc mắc liên hệ qua Email:</span>
            <a href="mailto:support@vcloset.vn" className="font-bold text-[#3E2723] hover:text-amber-700 transition-colors">
              support@vcloset.vn
            </a>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#F5F0E8] to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#9E8A7A] mb-8 font-medium">
          <Link to="/" className="hover:text-[#3E2723] transition-colors">Trang chủ</Link>
          <ChevronRight size={14} />
          <span className="text-[#3E2723]">Điều khoản</span>
        </div>

        {/* Header */}
        <div className="text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-sm border border-white" style={{ backgroundColor: '#fff', color: '#6D4C41' }}>
              <FileText size={32} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#3E2723' }}>
              Điều Khoản<br />Dịch Vụ
            </h1>
          </div>
          <div className="md:text-right">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-1">Cập nhật lần cuối</p>
            <p className="text-lg text-[#5D4A3F]">Ngày 05 tháng 06, 2026</p>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#EAE3D9] p-8 md:p-12">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="relative">
                {/* Section Title */}
                <h2 className="text-xl md:text-2xl font-bold text-[#3E2723] mb-5 flex items-center gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F5F0E8] text-[#6D4C41] flex items-center justify-center text-sm font-black border border-[#EAE3D9]">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                
                {/* Section Content */}
                <div className="pl-12">
                  {section.content}
                </div>

                {/* Divider (except last) */}
                {index < sections.length - 1 && (
                  <div className="absolute -bottom-6 left-12 right-0 h-px bg-gradient-to-r from-[#EAE3D9] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Terms;
