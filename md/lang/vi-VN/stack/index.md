<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3. The Stack

## Tóm tắt theo chủ đề

**Stack** là phần của CatalystUI Model mô tả các lớp mà dữ liệu đi qua khi người dùng và hệ thống thông tin giao tiếp với nhau. Stack có bảy lớp rõ ràng và hai lớp ngầm định:

- [Implied: Data Storage](./data-storage/)
- [Layer 7: Digital Data](./digital-data/)
- [Layer 6: Structure & Semantics](./structure-and-semantics/)
- [Layer 5: Components, Controls, & Layouts](./components-controls-and-layouts/)
- [Layer 4: Graphs & Frames](./graphs-and-frames/)
- [Layer 3: Renderers](./renderers/)
- [Layer 2: Windows](./windows/)
- [Layer 1: Systems](./systems/)
- [Implied: Human Interface](./human-interface/)

Stack có thể được đọc theo hai hướng. Theo hướng từ trên xuống, dữ liệu kỹ thuật số được chuyển thành dữ liệu con người có thể cảm nhận. Theo hướng từ dưới lên, hành động của người dùng được chuyển thành dữ liệu kỹ thuật số hoặc thay đổi trong dữ liệu kỹ thuật số.

### Dữ liệu đi từ trên xuống

Khi dữ liệu được lưu trong máy tính, con người thường không thể hiểu nó trực tiếp. Một tệp, một luồng byte, một bản ghi cơ sở dữ liệu hoặc một tài liệu đều cần được đưa qua các bước diễn giải và chuẩn bị trước khi trở thành thứ người dùng có thể cảm nhận.

Layer 7 đại diện cho dữ liệu kỹ thuật số đang hoạt động. Layer 6 diễn giải cấu trúc và semantic của dữ liệu đó. Layer 5 biến thông tin được diễn giải thành component, control và layout có thể sử dụng. Layer 4 tổ chức các đối tượng đó thành graph và frame. Layer 3 render chúng thành dạng output. Layer 2 cung cấp window hoặc điểm nhìn. Layer 1 dùng hệ thống và thiết bị để đưa output đến người dùng.

### Dữ liệu đi từ dưới lên

Khi người dùng hành động, hệ thống nhận interaction data. Một lần nhấn phím, chạm màn hình, nói lệnh, kéo chuột hoặc nhấn nút vật lý bắt đầu ở phía dưới Stack. System nhận tín hiệu, Window chuyển nó vào ngữ cảnh phù hợp, Renderer và Frame có thể hỗ trợ định tuyến, Graph xác định component liên quan, và Control ở Layer 5 xử lý intent.

Nếu interaction thay đổi dữ liệu, thay đổi đó có thể đi tiếp lên Layer 6 và Layer 7 để được diễn giải, lưu, truyền hoặc dùng lại.

### Tại sao Stack quan trọng

Stack giúp đặt tên cho những bước thường bị trộn lẫn trong các framework. Một component không phải là renderer. Một layout không phải là toàn bộ graph. Một window không phải là system. Dữ liệu có cấu trúc không tự động trở thành control. Mỗi lớp có nhiệm vụ riêng, và connector giữa các lớp giúp dữ liệu chuyển dạng một cách rõ ràng.

Mục tiêu không phải là làm mọi thứ phức tạp hơn. Mục tiêu là làm rõ những gì vốn đã xảy ra, để nhà phát triển có thể thiết kế giao diện nhất quán hơn, linh hoạt hơn và ít bị ràng buộc bởi giả định của một nền tảng cụ thể.

## Tiếp tục học

**Tiếp theo: [Implied: Data Storage](./data-storage/)**
