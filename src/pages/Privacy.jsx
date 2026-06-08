import React, { useEffect } from 'react';
import { Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Thông tin thu thập",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">
            Khi bạn sử dụng V-Closet, chúng tôi thu thập các thông tin sau để cung cấp dịch vụ tốt nhất:
          </p>
          <ul className="space-y-3">
            {[
              "Thông tin tài khoản: Email, Họ tên, Tên hiển thị, Mật khẩu (được mã hóa hash), Số điện thoại, Địa chỉ, Ngày sinh, Giới tính, Quốc gia, và Ảnh đại diện khi bạn đăng ký hoặc liên kết tài khoản Google (OAuth 2.0).",
              "Số đo cơ thể cá nhân: Chiều cao, cân nặng, phong cách sống, màu mắt, kiểu tóc được bạn cung cấp để cá nhân hóa việc phối đồ và gợi ý.",
              "Dữ liệu hình ảnh: Ảnh quần áo, phụ kiện tải lên tủ đồ cá nhân và ảnh người mẫu (mannequin) dùng cho việc thử đồ AI.",
              "Dữ liệu mạng xã hội & Tương tác: Lịch sử theo dõi bạn bè, các bài viết chia sẻ outfit lên cộng đồng, số lượt thích (likes), bình luận (comments), báo cáo vi phạm (reports), lịch sử nhắn tin (chat messages) và IP đăng nhập.",
              "Dữ liệu giao dịch: Lịch sử thanh toán mua gói Premium hoặc mua credit lẻ (gồm mã giao dịch, số tiền, phương thức MoMo/VNPay). Chúng tôi không lưu số thẻ hay thông tin tài khoản ngân hàng của bạn."
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
      title: "Mục đích sử dụng thông tin",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">Thông tin của bạn được sử dụng vào các mục đích sau:</p>
          <ul className="space-y-3">
            {[
              "Vận hành tính năng cốt lõi (tách nền AI Photoroom, thử đồ AI Fashn, tạo lookbook).",
              "Cá nhân hóa và đưa ra các gợi ý phối đồ thời trang dựa trên số đo cơ thể và phong cách sống của bạn.",
              "Đồng bộ tủ đồ ảo của bạn trên các thiết bị đăng nhập.",
              "Quản lý hạn mức tủ đồ, tính toán số dư credits và lịch sử đăng ký Premium.",
              "Hỗ trợ các tính năng cộng đồng: bài đăng, lượt like, comment, gửi tin nhắn chat SignalR và gửi thông báo hệ thống.",
              "Theo dõi lượt click và mua hàng qua sản phẩm tiếp thị liên kết (Affiliate) để thực hiện tính toán hoa hồng với nhãn hàng."
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
      title: "Bảo vệ & Xử lý với bên thứ ba",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Chúng tôi cam kết bảo vệ dữ liệu cá nhân của bạn thông qua các đối tác lưu trữ và API uy tín:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Lưu trữ ảnh:</strong> Hình ảnh quần áo và người mẫu được lưu trữ an toàn trên dịch vụ đám mây AWS S3 bằng các kênh truyền tải mã hóa HTTPS.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>API xử lý AI của bên thứ ba:</strong> Ảnh của bạn được gửi tạm thời thông qua kết nối bảo mật đến API Photoroom (tách nền) và Fashn AI (thử đồ ảo) để xử lý. Các dịch vụ này cam kết không giữ lại ảnh của bạn cho các mô hình AI thương mại khác.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Xử lý Thanh toán:</strong> Giao dịch được xử lý hoàn toàn qua hệ thống của MoMo hoặc VNPay. V-Closet chỉ ghi nhận kết quả trạng thái thanh toán từ các cổng này để cập nhật dịch vụ.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Cam kết không bán dữ liệu:</strong> Chúng tôi <strong className="text-[#3E2723]">không bán</strong> thông tin cá nhân hay hình ảnh thời trang của bạn cho bất kỳ bên thứ ba nào.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Quyền của người dùng & Xóa vĩnh viễn dữ liệu",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">Bạn có toàn bộ các quyền sau đối với dữ liệu của mình:</p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span>Yêu cầu truy xuất bản sao thông tin cá nhân của bạn.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span>Chỉnh sửa thông tin hồ sơ và số đo cơ thể bất kỳ lúc nào thông qua phần Cài đặt Hồ sơ.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Quyền xóa tài khoản vĩnh viễn (Deactivation):</strong> Bạn có quyền tự xóa tài khoản vĩnh viễn ngay trong ứng dụng di động. Khi bạn thực hiện, hệ thống sẽ xóa sạch toàn bộ hồ sơ người dùng, thông tin liên lạc, lịch sử giao dịch và hình ảnh đã tải lên khỏi cơ sở dữ liệu hoạt động và cloud storage AWS S3 của chúng tôi.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "Bảo mật dữ liệu & Cơ chế lưu trữ",
      content: (
        <p className="text-[#5D4A3F] leading-relaxed">
          Chúng tôi áp dụng các biện pháp kỹ thuật tiêu chuẩn quốc tế bao gồm mã hóa SSL/TLS cho dữ liệu truyền tải, phân quyền truy cập máy chủ nghiêm ngặt, mã hóa mật khẩu một chiều (Hash) để ngăn chặn truy cập trái phép. Refresh Token và Access Token đăng nhập được lưu trữ an toàn và có cơ chế tự thu hồi khi bạn chọn Đăng xuất (Logout).
        </p>
      )
    },
    {
      title: "Thông tin liên hệ",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Nếu bạn có bất kỳ câu hỏi nào về Chính Sách Bảo Mật này, hoặc muốn thực hiện quyền xóa dữ liệu của mình qua email, vui lòng liên hệ với chúng tôi qua email:
          </p>
          <div className="bg-[#FDFBF7] p-4 rounded-xl border border-[#EAE3D9] flex items-center justify-between">
            <span className="text-[#5D4A3F]">Email Trung tâm Hỗ trợ Bảo mật:</span>
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
          <span className="text-[#3E2723]">Bảo mật</span>
        </div>

        {/* Header */}
        <div className="text-left mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-sm border border-white" style={{ backgroundColor: '#fff', color: '#6D4C41' }}>
              <Shield size={32} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: '#3E2723' }}>
              Chính Sách<br />Bảo Mật
            </h1>
          </div>
          <div className="md:text-right">
            <p class="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-1">Cập nhật lần cuối</p>
            <p className="text-lg text-[#5D4A3F]">Ngày 08 tháng 06, 2026</p>
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

export default Privacy;
