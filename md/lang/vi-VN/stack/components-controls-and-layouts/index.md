<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.4 Stack :: Layer 5: Components, Controls, & Layouts

## Thảo luận chuyên sâu

### Nơi thông tin trở nên có thể sử dụng

**Components, Controls, & Layouts** là lớp biến dữ liệu đã được diễn giải thành các đối tượng giao diện mà nhà phát triển và hệ thống có thể làm việc trực tiếp. Nếu Layer 6 nói “dữ liệu này có nghĩa gì,” Layer 5 nói “chúng ta có thể dùng nó như thế nào trong giao diện?”

Lớp này là mutable. Các đối tượng ở đây có thể thay đổi trạng thái, phản hồi interaction, cập nhật giá trị, di chuyển, bật/tắt, lấy focus, hoặc thông báo thay đổi cho phần còn lại của Stack.

### Components

**Component** là một phần tử giao diện có thể đại diện cho một phần dữ liệu hoặc hành vi. Component có thể có thuộc tính như kích thước, vị trí, màu sắc, trạng thái, nhãn, giá trị hoặc nội dung. Nó cũng có thể có phương thức như `Play()`, `Pause()`, `Open()`, `Close()`, `SetValue()` hoặc những thao tác khác tùy domain.

Component không nhất thiết là visual. Một `AudioComponent`, `HapticComponent`, `DocumentComponent` hoặc `SensorComponent` vẫn có thể là component nếu nó cung cấp biểu diễn mutable, có thể dùng được của dữ liệu giao diện.

### Controls

**Control** là component trực tiếp xử lý interaction. Nút bấm, textbox, slider, menu item, phím vật lý, lệnh giọng nói hoặc bất kỳ phần tử nào phản hồi intent của người dùng đều có thể được mô tả là control.

Control là nơi interaction thường đạt đến điểm xử lý thực sự. Các lớp thấp hơn có thể nhận, định tuyến và diễn giải interaction, nhưng control là nơi quyết định hành động giao diện nào sẽ xảy ra: cập nhật giá trị, gửi lệnh, mở view, lưu dữ liệu hoặc thực hiện no-op.

### Layouts

**Layout** là component tổ chức component khác theo một trật tự nào đó. Trong giao diện đồ họa, layout có thể là vertical stack, horizontal stack, grid hoặc flow layout. Trong âm thanh, layout có thể tổ chức nhóm hiệu ứng hoặc kênh. Trong hệ thống khác, layout có thể mô tả thứ tự xử lý hoặc cách nhóm các đối tượng.

Layout không phải là toàn bộ ngữ cảnh của giao diện. Nó chỉ mô tả cách sắp xếp một nhóm phần tử. Graphs & Frames ở Layer 4 chịu trách nhiệm về tổ chức rộng hơn, routing, boundary và chuẩn bị cho rendering.

### Khác với Structure & Semantics

Layer 6 ổn định và diễn giải dữ liệu. Layer 5 mutable và có thể tương tác. Đây là một ranh giới quan trọng.

Một structure có thể nói rằng tài liệu có tiêu đề. Một component có thể đại diện tiêu đề đó trong giao diện. Một control có thể cho phép người dùng chỉnh sửa tiêu đề. Một layout có thể đặt tiêu đề đó trên các phần khác. Những khái niệm này liên quan, nhưng không giống nhau.

### Vai trò trong luồng interaction

Layer 5 là điểm trung tâm của interaction. Khi người dùng hành động, interaction được định tuyến qua các lớp thấp hơn để tìm control hoặc component liên quan. Sau đó Layer 5 xử lý intent. Nếu interaction thay đổi dữ liệu, thay đổi có thể đi lên Layer 6 và Layer 7 để được lưu hoặc tái diễn giải.

### Tại sao lớp này quan trọng

Layer 5 giữ giao diện ở dạng con người và nhà phát triển có thể làm việc. Nó không còn chỉ là dữ liệu đã diễn giải, nhưng cũng chưa phải là draw command hoặc output cảm giác cuối cùng. Đây là nơi giao diện trở thành tập hợp các đối tượng có thể dùng, có thể thay đổi và có thể phản hồi.

## Tiếp tục học

**Tiếp theo: [Layer 4: Graphs & Frames](../graphs-and-frames/)**
