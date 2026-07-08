<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 5.1 Domains :: Symbolic

## Thảo luận chuyên sâu

### Trước khi dữ liệu trở thành cảm giác

**Symbolic** domain đại diện cho dữ liệu chưa bị ràng buộc vào một kênh cảm giác cụ thể. Đây là nơi thông tin tồn tại như ký hiệu, cấu trúc, mã, quy tắc hoặc biểu diễn trừu tượng trước khi nó được chuyển thành thứ con người có thể thấy, nghe, chạm, ngửi hoặc nếm.

Một chuỗi văn bản là ví dụ dễ hiểu. Khi văn bản còn là ký tự trong tệp, nó chưa nhất thiết là hình ảnh trên màn hình hoặc âm thanh từ loa. Nó có thể được hiển thị, đọc thành giọng nói, in ra giấy, gửi qua mạng, phân tích bởi chương trình, hoặc chuyển thành nhiều dạng khác. Trước khi quyết định đó xảy ra, văn bản hoạt động như dữ liệu Symbolic.

Điều này cũng đúng với các định dạng như JSON, XML, INI, Markdown, HTML, cấu hình, lệnh, mã nguồn, đường dẫn, tên, khóa, giá trị, định danh và nhiều loại dữ liệu khác. Chúng có ý nghĩa, nhưng ý nghĩa đó chưa phải là một trải nghiệm cảm giác cụ thể.

### Không phải là “vô nghĩa”

Symbolic không có nghĩa là dữ liệu vô nghĩa. Ngược lại, dữ liệu Symbolic thường chứa rất nhiều ý nghĩa. Điều khác biệt là ý nghĩa đó được mang bằng quy ước, cú pháp, tên gọi, quan hệ và cấu trúc hơn là bằng một đầu ra cảm giác đã hoàn tất.

Ví dụ, dòng `width = 600` có thể mô tả chiều rộng của cửa sổ, kích thước hình ảnh, thuộc tính bố cục hoặc một giá trị cấu hình khác. Con số không tự giải thích toàn bộ điều đó. Ý nghĩa đến từ cấu trúc xung quanh nó và semantic đang diễn giải nó.

Trong CatalystUI, Symbolic domain giúp giữ rõ ranh giới này. Dữ liệu có thể có ý nghĩa trước khi nó được vẽ, phát âm, rung hoặc trình bày. Việc nhận ra giai đoạn đó giúp mô hình tránh giả định rằng mọi giao diện đều bắt đầu bằng hình ảnh.

### Chuyển sang domain khác

Dữ liệu Symbolic thường được chuyển sang domain khác thông qua connector. Văn bản có thể trở thành Visual khi được đo glyph và vẽ lên màn hình. Cùng văn bản đó có thể trở thành Auditory khi được đưa vào bộ tổng hợp giọng nói. Nó có thể trở thành Tactile khi được biểu diễn qua thiết bị chữ nổi hoặc phản hồi rung.

Điều quan trọng là cùng một dữ liệu nguồn có thể đi đến nhiều đầu ra khác nhau. Nếu mô hình gắn văn bản trực tiếp với màn hình, nó sẽ làm mất khả năng giải thích các đầu ra khác. Symbolic domain giữ dữ liệu ở trạng thái trung lập cho đến khi có quá trình chuyển đổi cụ thể.

### Vai trò trong Stack

Symbolic data thường xuất hiện ở các lớp cao hơn của Stack, đặc biệt khi hệ thống đang lưu trữ, diễn giải hoặc tổ chức thông tin. Digital Data có thể chứa biểu diễn nhị phân của tài liệu Markdown. Structure & Semantics có thể hiểu nó như tiêu đề, đoạn văn, danh sách và liên kết. Components có thể biến các phần đó thành đối tượng giao diện có thể dùng.

Khi dữ liệu tiến xuống các lớp thấp hơn, nó có thể đi vào domain cảm giác cụ thể hơn. Tuy nhiên, Symbolic vẫn rất quan trọng vì nó thường là nơi ý nghĩa ban đầu được bảo tồn.

### Tại sao domain này quan trọng

Symbolic domain giúp CatalystUI mô tả những thứ chưa phải là đầu ra cảm giác nhưng vẫn có ý nghĩa giao diện. Nó cho phép mô hình nói về tài liệu, lệnh, cấu hình, cấu trúc, mã và dữ liệu định nghĩa mà không ép tất cả chúng thành hình ảnh hoặc âm thanh quá sớm.

Nói ngắn gọn: Symbolic là nơi thông tin còn là ý nghĩa có thể được chuyển hướng. Nó chưa phải là thứ người dùng nhất thiết cảm nhận trực tiếp, nhưng nó là nguồn để nhiều dạng cảm nhận khác có thể được tạo ra.

## Tiếp tục học

**Tiếp theo: [Visual](../visual/)**
