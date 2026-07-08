<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.8 Stack :: Layer 1: Systems

## Thảo luận chuyên sâu

### Nền tảng thực thi

**Systems** là lớp đại diện cho hệ thống thông tin nền tảng: hệ điều hành, phần cứng, driver, runtime, device services, event loop, API native và những khả năng thực thi khác mà giao diện cần để hoạt động.

Trong trường hợp quen thuộc, system có thể là Windows, macOS, Linux, Android, iOS hoặc trình duyệt. Trong trường hợp chuyên dụng, system có thể là firmware, thiết bị nhúng, máy chơi game, kiosk, controller công nghiệp hoặc hệ thống tùy chỉnh.

### System cung cấp khả năng

System là nơi thiết bị thật và dịch vụ nền tảng tồn tại. Nó có thể cung cấp màn hình, loa, bàn phím, chuột, cảm ứng, file access, networking, clipboard, font, timer, thread, memory, permission, sensor và nhiều khả năng khác.

CatalystUI không cần mô tả từng API của từng system trong Stack. Thay vào đó, nó đặt system vào Layer 1 và dùng Native connector để nối Windows với khả năng native cần thiết.

### Không phải mọi system đều giống nhau

Mỗi system có quy tắc và giới hạn riêng. Một hệ điều hành desktop khác mobile. Trình duyệt khác ứng dụng native. Thiết bị nhúng khác máy tính cá nhân. Nếu framework trộn logic giao diện với chi tiết system quá sớm, nó dễ bị khóa vào một nền tảng.

Layer 1 giúp công nhận sự khác biệt đó mà vẫn giữ mô hình chung. Các lớp phía trên có thể mô tả giao diện theo nguyên tắc, còn Native connector xử lý cách giao tiếp với system cụ thể.

### Nguồn interaction

Trong luồng từ dưới lên, system thường là nơi interaction bắt đầu về mặt kỹ thuật. Người dùng nhấn phím, di chuyển chuột, chạm màn hình, nói vào microphone hoặc tác động vào thiết bị. System nhận tín hiệu qua hardware và driver, rồi chuyển nó vào window hoặc endpoint phù hợp.

Từ đó interaction đi lên Stack để được định tuyến và xử lý.

### Đích của output

Trong luồng từ trên xuống, system là nơi output được đưa ra thiết bị thật. Renderer tạo dữ liệu output, window cung cấp điểm giao, và system chuyển kết quả đến display, speaker, actuator hoặc thiết bị khác.

Điều người dùng cảm nhận cuối cùng phụ thuộc vào system và thiết bị mà system điều khiển.

### Tại sao lớp này quan trọng

Layer 1 giữ mô hình gắn với thực tế. Giao diện không chỉ là cấu trúc trừu tượng; cuối cùng nó phải chạy ở đâu đó, nhận input từ thiết bị thật và tạo output qua thiết bị thật. Systems là nơi CatalystUI chạm vào nền tảng thực thi đó.

## Tiếp tục học

**Tiếp theo: [Implied: Human Interface](../human-interface/)**
