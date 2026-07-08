<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.7 Stack :: Layer 2: Windows

## Thảo luận chuyên sâu

### View vào hệ thống

**Windows** là lớp cung cấp view, vùng chứa hoặc điểm nhận output được render. Trong giao diện đồ họa truyền thống, window là cửa sổ trên Windows, macOS, Linux hoặc môi trường tương tự. Nhưng trong CatalystUI, window không bị giới hạn ở hình ảnh.

Một window là điểm nơi renderer có thể gửi kết quả và nơi system có thể cung cấp interaction liên quan. Nó là giao diện giữa renderer và system.

### Không chỉ là cửa sổ đồ họa

Một `CommandLineWindow` có thể chỉ xử lý text. Một `AuditoryWindow` có thể đại diện cho điểm phát âm thanh. Một hệ thống nhúng không có màn hình có thể có window theo nghĩa là kênh output/interaction chuyên dụng. Một thiết bị haptic có thể cung cấp window xúc giác.

Điều quan trọng là vai trò, không phải hình dạng. Window đại diện cho vùng hoặc kênh mà renderer dùng để đưa output đến system và nhận interaction từ system.

### Quan hệ với Surface connector

Renderer không tự nhiên biết nơi đặt output của nó. Surface connector giữa Layer 3 và Layer 2 cung cấp bề mặt hoặc điểm kết nối để renderer giao tiếp với window.

Trong OpenGL, surface có thể liên quan đến context hoặc framebuffer gắn với window. Trong audio, surface có thể là output device hoặc stream target. Trong tactile, surface có thể là thiết bị hoặc kênh phản hồi.

### Window và interaction

Window cũng là nơi nhiều interaction đi vào Stack. Hệ điều hành có thể gửi sự kiện keyboard, mouse, touch, resize, focus, close hoặc input khác đến window. Window chuyển những interaction đó vào luồng xử lý để renderer, frame, graph và control có thể định tuyến hoặc xử lý.

Vì vậy, window vừa là nơi output đi xuống system, vừa là nơi interaction đi ngược lên Stack.

### Khác với System

Window không phải là toàn bộ system. System cung cấp hardware, OS services, driver, event loop, device access và các API nền tảng. Window là view hoặc endpoint cụ thể mà ứng dụng dùng trong system đó.

Sự tách biệt này giúp CatalystUI hỗ trợ nhiều nền tảng hơn. Một ứng dụng có thể có khái niệm window ổn định, trong khi Native connector xử lý chi tiết khác nhau của từng system.

### Tại sao lớp này quan trọng

Layer 2 cho renderer một nơi để đưa output và cho system một nơi để gửi interaction. Nó là điểm chuyển giữa công việc đã render và môi trường thực thi thực tế. Không có window, renderer có thể biết cách tạo output, nhưng output đó chưa có nơi để đi.

## Tiếp tục học

**Tiếp theo: [Layer 1: Systems](../systems/)**
