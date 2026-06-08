import React, { useEffect } from 'react';
import { FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Chấp nhận điều khoản (Sự đồng thuận mặc định)",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Bằng việc đăng ký, truy cập hoặc sử dụng ứng dụng di động và trang web V-Closet ("Dịch vụ"), bạn đồng ý bị ràng buộc bởi các Điều khoản Dịch vụ này.
          </p>
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200">
            <p className="text-amber-800 text-sm font-semibold leading-relaxed">
              ⚠️ THÔNG BÁO QUAN TRỌNG: Bằng việc tiếp tục truy cập hoặc sử dụng Dịch vụ (bao gồm cả việc tiếp tục đăng nhập sau khi có bản cập nhật mới), bạn đồng ý tuân thủ và bị ràng buộc bởi các Điều khoản cập nhật này. Nếu bạn không đồng ý với bất kỳ phần nào của điều khoản, bạn phải chấm dứt sử dụng dịch vụ và có quyền xóa tài khoản của mình.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Đăng ký tài khoản và Bảo mật",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">Khi sử dụng V-Closet, bạn cam kết và đồng ý rằng:</p>
          <ul className="space-y-3">
            {[
              "Cung cấp thông tin chính xác, trung thực khi tạo tài khoản thông qua Email (xác thực OTP) hoặc đăng nhập bằng tài khoản Google (Google Login).",
              "Tự chịu trách nhiệm bảo mật mật khẩu và thông tin đăng nhập của mình. Mọi hoạt động xảy ra dưới tài khoản của bạn sẽ do bạn chịu trách nhiệm hoàn toàn.",
              "V-Closet hỗ trợ các vai trò người dùng bao gồm: Khách hàng (Customer), Nhãn hàng (Brand), và Quản trị viên (Admin). Bạn đồng ý sử dụng đúng phạm vi quyền hạn tương ứng với vai trò của mình."
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
      title: "Quản lý Tủ đồ kỹ thuật số & Giới hạn hạn mức",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            V-Closet cung cấp tính năng tủ đồ ảo giúp bạn quản lý trang phục. Các quy định về tủ đồ bao gồm:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Hạn mức Freemium:</strong> Đối với tài khoản Miễn phí, bạn được lưu trữ tối đa <strong className="text-[#3E2723]">50 món đồ (Wardrobe Items)</strong> trong tủ đồ. Khi vượt quá hạn mức này, bạn cần xóa bớt món đồ cũ hoặc nâng cấp lên gói Premium để có không gian lưu trữ không giới hạn.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Cá nhân hóa số đo:</strong> Hệ thống cho phép bạn tùy chọn lưu thông tin số đo cơ thể (chiều cao, cân nặng, giới tính, màu mắt, kiểu tóc, phong cách sống) để cải thiện gợi ý phối đồ cá nhân.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Tính năng AI và Hệ thống Credits",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Dịch vụ tích hợp công cụ AI bao gồm Tách nền (Background Removal qua Photoroom) và Thử đồ ảo (Virtual Try-On qua Fashn AI):
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Cơ chế Credits:</strong> Mỗi lần sử dụng tính năng tách nền hoặc thử đồ AI sẽ tiêu tốn số lượng Credit tương ứng từ tài khoản của bạn (BgRemovalCredits và TryOnCredits).</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Nạp thêm & Quảng cáo:</strong> Khi hết lượt credits, bạn có thể mua các gói credit lẻ (top-up), nâng cấp gói Premium để nhận hạn mức cao hơn, hoặc xem video quảng cáo (Ad Reward) để nhận lượt miễn phí.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
              <span><strong>Từ chối bảo đảm kết quả AI:</strong> Công cụ AI được cung cấp trên cơ sở "như hiện trạng" (as-is). V-Closet không cam kết hình ảnh thử đồ, tách nền hoặc gợi ý thời trang chính xác 100% so với thực tế hoặc phù hợp tuyệt đối với kỳ vọng thẩm mỹ của bạn.</span>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Gói dịch vụ Premium và Thanh toán",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">
            V-Closet cung cấp các gói Premium (Tháng/Năm) và các gói Credits lẻ thông qua các cổng thanh toán tích hợp:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-amber-600" />
              <span><strong>Cổng thanh toán:</strong> Chúng tôi hỗ trợ giao dịch qua các cổng thanh toán trực tiếp tại Việt Nam bao gồm MoMo và VNPay.</span>
            </li>
            <li className="flex items-start gap-3 text-[#5D4A3F] leading-relaxed">
              <CheckCircle2 size={18} className="mt-1 flex-shrink-0 text-amber-600" />
              <span><strong>Chính sách không hoàn tiền:</strong> Mọi giao dịch nạp tiền mua gói dịch vụ hoặc mua lượt credits lẻ sau khi đã thực hiện thành công sẽ <strong className="text-[#3E2723]">không được hoàn trả</strong> dưới bất kỳ hình thức nào.</span>
            </li>
          </ul>
        </>
      )
    },
    {
      title: "Mạng xã hội cộng đồng & Kiểm duyệt nội dung",
      content: (
        <>
          <p className="text-[#5D4A3F] leading-relaxed mb-4">
            V-Closet tích hợp mạng xã hội thời trang cho phép chia sẻ Outfit Canvas, theo dõi (Follow), thích (Like) và bình luận (Comment):
          </p>
          <ul className="space-y-3">
            {[
              "Tiêu chuẩn hành vi: Nghiêm cấm tải lên hoặc chia sẻ nội dung vi phạm bản quyền, khiêu dâm, bạo lực, phỉ báng, quấy rối hoặc vi phạm pháp luật hiện hành.",
              "Cơ chế báo cáo (Report): Người dùng có quyền báo cáo các bài viết vi phạm tiêu chuẩn cộng đồng.",
              "Quyền kiểm duyệt của Admin: Admin có quyền ẩn hoặc xóa bài viết vi phạm, và có quyền ban/khóa tài khoản tạm thời hoặc vĩnh viễn đối với người dùng cố tình vi phạm."
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
      title: "Tiếp thị liên kết (Affiliate) & Quảng cáo từ bên thứ ba",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            V-Closet hiển thị các sản phẩm liên kết (Affiliate) và các chiến dịch tài trợ (Sponsored Campaigns) từ các Nhãn hàng (Brand):
          </p>
          <p className="text-[#5D4A3F] leading-relaxed">
            Khi bấm vào liên kết mua hàng, bạn sẽ được dẫn tới trang web của bên thứ ba. Mọi giao dịch, thanh toán, vận chuyển và bảo hành sản phẩm là quan hệ trực tiếp giữa bạn và bên thứ ba đó. V-Closet hoàn toàn miễn trừ trách nhiệm pháp lý đối với bất kỳ khiếu nại, tổn thất hay tranh chấp nào liên quan đến sản phẩm của bên thứ ba.
          </p>
        </div>
      )
    },
    {
      title: "Nội dung do người dùng tạo (UGC) và Quyền sở hữu trí tuệ",
      content: (
        <p className="text-[#5D4A3F] leading-relaxed">
          Bạn giữ toàn bộ quyền sở hữu đối với các hình ảnh trang phục hoặc người mẫu cá nhân do bạn tải lên. Bằng việc đưa nội dung lên ứng dụng, bạn cấp cho V-Closet giấy phép toàn cầu, không độc quyền, miễn phí bản quyền để lưu trữ, hiển thị, sao chép và chỉnh sửa (như tách nền, áp dụng thuật toán phối đồ AI) <strong className="text-[#3E2723]">nhằm mục đích duy nhất là cung cấp và cải thiện dịch vụ cho chính bạn</strong>.
        </p>
      )
    },
    {
      title: "Tính năng Chat trực tiếp giữa người dùng",
      content: (
        <p className="text-[#5D4A3F] leading-relaxed">
          V-Closet cung cấp kênh nhắn tin nội bộ (Chat Room, Chat Messages) để tương tác. Bạn đồng ý không sử dụng kênh chat này để gửi tin nhắn rác, quấy rối, đe dọa, gửi thông tin lừa đảo hoặc vi phạm thuần phong mỹ tục. V-Closet có quyền xử lý tài khoản dựa trên báo cáo vi phạm nội dung chat.
        </p>
      )
    },
    {
      title: "Xóa tài khoản vĩnh viễn (Deactivation) & Liên hệ",
      content: (
        <div className="space-y-4">
          <p className="text-[#5D4A3F] leading-relaxed">
            Bạn có quyền tự hủy tài khoản vĩnh viễn bất kỳ lúc nào thông qua chức năng "Xóa tài khoản" (Deactivate Account) trong ứng dụng di động. Khi bạn thực hiện yêu cầu này, hệ thống sẽ vô hiệu hóa và xóa toàn bộ thông tin tài khoản cùng các hình ảnh tủ đồ liên quan khỏi cơ sở dữ liệu hoạt động và cloud storage AWS S3 của chúng tôi.
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

export default Terms;
