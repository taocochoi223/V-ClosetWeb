import React, { useEffect } from 'react';
import { Shield, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Thu thập thông tin",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">
            Khi bạn sử dụng V-Closet, chúng tôi thu thập các thông tin sau để cung cấp dịch vụ tốt nhất:
          </p>
          <ul className="space-y-3">
            {[
              "Thông tin tài khoản: Email, tên người dùng, và ảnh đại diện khi bạn đăng nhập bằng Google hoặc tạo tài khoản mới.",
              "Dữ liệu hình ảnh: Hình ảnh quần áo, trang phục và người mẫu bạn tải lên để sử dụng tính năng thử đồ AI và quản lý tủ đồ.",
              "Dữ liệu sử dụng: Lịch sử tương tác, các mục yêu thích và các outfit đã lưu."
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
      title: "Sử dụng thông tin",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">Thông tin của bạn được sử dụng vào các mục đích:</p>
          <ul className="space-y-3">
            {[
              "Vận hành các tính năng cốt lõi của V-Closet (phân loại đồ tự động, gợi ý phối đồ AI).",
              "Đồng bộ tủ đồ trên các thiết bị của bạn.",
              "Cải thiện độ chính xác của thuật toán AI thời trang.",
              "Cung cấp hỗ trợ khách hàng và thông báo về các bản cập nhật mới."
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
      title: "Bảo vệ dữ liệu hình ảnh",
      content: (
        <p className="text-[#5D4A3F] leading-relaxed">
          Chúng tôi hiểu rằng hình ảnh cá nhân là dữ liệu nhạy cảm. Quá trình xử lý ảnh bằng AI (tách nền, thử đồ) được thực hiện qua các kênh mã hóa an toàn. Chúng tôi <strong className="text-[#3E2723]">không</strong> sử dụng hình ảnh cá nhân của bạn để huấn luyện các mô hình AI thương mại khác cho bên thứ ba, và bạn có quyền xóa toàn bộ hình ảnh khỏi máy chủ bất kỳ lúc nào.
        </p>
      )
    },
    {
      title: "Chia sẻ thông tin",
      content: (
        <p className="text-[#5D4A3F] leading-relaxed">
          Chúng tôi <strong className="text-[#3E2723]">không bán</strong> dữ liệu cá nhân của bạn cho bên thứ ba. Chúng tôi chỉ chia sẻ dữ liệu với các đối tác cung cấp dịch vụ đám mây (Cloud Providers) nhằm mục đích lưu trữ và xử lý AI, tuân thủ nghiêm ngặt các tiêu chuẩn bảo mật quốc tế.
        </p>
      )
    },
    {
      title: "Quyền của người dùng",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">Bạn có toàn quyền:</p>
          <ul className="space-y-3">
            {[
              "Yêu cầu truy xuất bản sao toàn bộ dữ liệu cá nhân.",
              "Chỉnh sửa hoặc cập nhật thông tin sai lệch.",
              "Yêu cầu xóa vĩnh viễn tài khoản và toàn bộ dữ liệu (bao gồm cả ảnh) khỏi hệ thống V-Closet."
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
      title: "Liên hệ",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Nếu bạn có bất kỳ câu hỏi nào về Chính Sách Bảo Mật này, vui lòng liên hệ với chúng tôi qua email:
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

export default Privacy;
