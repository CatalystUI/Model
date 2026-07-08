<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# CatalystUI Model

## Tổng quan cấp cao

CatalystUI là một mô hình giao diện người dùng được xây dựng để mô tả cách thông tin di chuyển giữa con người và hệ thống thông tin. Mục tiêu của mô hình không chỉ là giải thích cách tạo nút bấm, cửa sổ, bố cục hoặc bộ kết xuất, mà còn là đặt tên cho những bước luôn xảy ra khi dữ liệu kỹ thuật số được chuyển thành thứ con người có thể nhận biết, rồi khi hành động của con người được chuyển ngược lại thành dữ liệu kỹ thuật số.

Mô hình được chia thành ba phần chính:

- [The Stack](./stack/)
- [Connectors](./connectors/)
- [Domains](./domains/)

**Stack** mô tả các lớp mà dữ liệu đi qua. **Connectors** mô tả những điểm chuyển đổi giữa các lớp liền kề. **Domains** mô tả bản chất cảm giác của dữ liệu, chẳng hạn như biểu tượng, hình ảnh, âm thanh, xúc giác, mùi, vị hoặc đa giác quan.

CatalystUI cố gắng làm rõ một điều thường bị ẩn trong các framework giao diện: giao diện người dùng không chỉ là đồ họa. Một giao diện là cách con người và máy tính giao tiếp. Đôi khi giao tiếp đó xảy ra qua màn hình. Đôi khi nó xảy ra qua âm thanh, rung, thiết bị vật lý, dòng lệnh, hoặc bất kỳ phương tiện nào khác mà con người có thể cảm nhận và phản hồi.

## Tiếp tục học

Bạn nên bắt đầu với phần [Terminology](./terminology/) để hiểu các thuật ngữ nền tảng, sau đó đọc [Summary](./summary/) để có cái nhìn tổng thể về toàn bộ mô hình.
