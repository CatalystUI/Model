<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 5. Domains

## Tóm tắt theo chủ đề

Trong CatalystUI, **domain** mô tả bản chất cảm giác của dữ liệu. Nó trả lời câu hỏi: dữ liệu này đang được xử lý như biểu tượng, hình ảnh, âm thanh, xúc giác, mùi, vị, hay một trải nghiệm đa giác quan?

Bảy domain cấp cao là:

- [Symbolic](./symbolic/)
- [Visual](./visual/)
- [Auditory](./auditory/)
- [Tactile](./tactile/)
- [Olfactory](./olfactory/)
- [Gustatory](./gustatory/)
- [Multisensory](./multisensory/)

Domain không thay thế Stack. Stack mô tả dữ liệu đang ở lớp nào trong quá trình giao tiếp giữa người dùng và hệ thống. Domain mô tả dữ liệu đó thuộc loại cảm giác nào. Hai khái niệm này làm việc cùng nhau.

Ví dụ, một chuỗi văn bản có thể bắt đầu trong domain **Symbolic**. Nếu văn bản đó được vẽ lên màn hình, nó có thể đi vào domain **Visual**. Nếu văn bản đó được đọc bởi bộ chuyển văn bản thành giọng nói, nó có thể đi vào domain **Auditory**. Nếu nó được xuất ra màn hình chữ nổi, nó có thể đi vào domain **Tactile**.

Một lớp cũng có thể tồn tại trong nhiều domain cùng lúc. Điều quan trọng là phân biệt giữa **Multisensory** và nhiều domain rời rạc. Nếu nhiều giác quan được hợp nhất thành một trải nghiệm duy nhất, lớp đó có thể được xem là Multisensory. Nếu chúng được xử lý riêng biệt, lớp đó có thể được mô tả bằng nhiều domain riêng.

Top-level domain có thể được mở rộng thành sub-domain để tổ chức và lọc rõ hơn, chẳng hạn như `IniSymbolic`, `Mp3Auditory`, hoặc `PngVisual`.

## Tiếp tục học

**Tiếp theo: [Symbolic](./symbolic/)**
