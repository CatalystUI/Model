<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 4.5 Connectors :: Surface

## Thảo luận chuyên sâu

### Từ renderer đến window

**Surface** connector nằm giữa **Layer 3: Renderers** và **Layer 2: Windows**. Nó cung cấp điểm mà renderer dùng để đưa output của mình vào window hoặc endpoint tương ứng.

Renderer có thể biết cách vẽ, phát hoặc tạo dữ liệu output, nhưng nó cần một nơi để đặt kết quả đó. Window cung cấp view hoặc target trong system. Surface connector nối hai phần này.

### Surface trong visual rendering

Trong visual UI, Surface có thể là framebuffer, swapchain, canvas, drawing context, texture target hoặc API surface được window cung cấp. OpenGL cần context và surface để draw. Vulkan cần swapchain. Canvas cần drawing target. Renderer không chỉ “vẽ vào hư không”; nó vẽ vào một surface.

Surface connector mô tả ranh giới đó trong Stack.

### Surface ngoài visual domain

Surface không chỉ dành cho đồ họa. Trong audio, surface có thể là output stream, device endpoint hoặc buffer chain nơi audio renderer gửi dữ liệu. Trong tactile, surface có thể là kênh thiết bị nơi haptic renderer gửi pattern. Trong system khác, surface là điểm giao giữa dữ liệu render và window tương ứng.

Điều quan trọng là vai trò: Surface là nơi output đã render gặp window.

### Đồng bộ và lifetime

Surface thường liên quan đến lifetime và trạng thái của window. Nếu window resize, surface có thể cần cập nhật. Nếu device bị mất, surface có thể cần tạo lại. Nếu window đóng, renderer không thể tiếp tục gửi output vào surface cũ.

Vì vậy, Surface connector không chỉ là đường ống đơn giản. Nó có thể cần quản lý context, kích thước, khả năng, trạng thái sẵn sàng, buffering và cách đồng bộ giữa renderer và window.

### Interaction đi ngược

Surface cũng có thể ảnh hưởng đến interaction. Một interaction trong window có thể cần được chuyển đổi dựa trên kích thước surface, scale factor, DPI hoặc mapping giữa window coordinates và renderer coordinates. Surface connector có thể cung cấp thông tin cần thiết để giữ interaction đúng với output mà người dùng thấy hoặc nghe.

### Tại sao connector này quan trọng

Surface connector giữ renderer tách khỏi chi tiết window mà vẫn cho renderer một target thực tế. Layer 3 sản xuất output. Layer 2 cung cấp view hoặc endpoint. Surface là nơi hai lớp gặp nhau.

## Tiếp tục học

**Tiếp theo: [Native Connector](../native/)**
