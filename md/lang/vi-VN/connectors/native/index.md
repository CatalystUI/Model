<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 4.6 Connectors :: Native

## Thảo luận chuyên sâu

### Từ window đến system

**Native** connector nằm giữa **Layer 2: Windows** và **Layer 1: Systems**. Nó cung cấp bindings hoặc cầu nối đến khả năng native của hệ thống: windowing API, device API, OS services, driver, event loop, filesystem, clipboard, font, input, output và những chức năng nền tảng khác.

Window cần system để tồn tại. System cung cấp thiết bị và dịch vụ thật. Native connector xử lý cách window giao tiếp với system cụ thể.

### Bindings là trọng tâm

Trong nhiều trường hợp, Native connector chủ yếu là **bindings**. Nó không cần phát minh lại hệ điều hành. Nó cần cung cấp cách gọi đúng vào API native, nhận event đúng cách, tạo window đúng cách, quản lý handle/context đúng cách, và chuyển dữ liệu giữa mô hình CatalystUI và nền tảng.

Trên Windows, bindings có thể liên quan đến Win32, DirectX, WASAPI hoặc API khác. Trên macOS, có thể liên quan đến Cocoa, Metal, CoreAudio hoặc framework native. Trên Linux, có thể liên quan đến Wayland, X11, ALSA, PipeWire hoặc các thư viện tương ứng.

### Trừu tượng mà không phủ nhận thực tế

Native connector không giả vờ rằng mọi hệ thống đều giống nhau. Mỗi system có khả năng, giới hạn, convention và bug riêng. Connector này là nơi mô hình có thể đối diện với sự khác biệt đó mà không làm ô nhiễm mọi lớp phía trên.

Các lớp trên có thể nói về window, surface, renderer và component theo cách ổn định hơn. Native connector xử lý phần “trên hệ thống này thì gọi API nào?”

### Interaction từ system

Native connector thường nhận event từ system và đưa chúng vào window. Keyboard, mouse, touch, resize, focus, close, clipboard, controller, microphone hoặc sensor đều có thể đi qua connector này.

Nó có thể cần chuyển đổi dạng event native thành interaction data mà Stack hiểu. Điều này giữ cho phần còn lại của mô hình không bị ràng buộc vào event type của một platform cụ thể.

### Output đến system

Theo hướng từ trên xuống, Native connector cũng giúp window sử dụng system để đưa output đến thiết bị. Window có thể cần tạo surface, yêu cầu context, mở audio device, cập nhật cursor, đặt title, thay đổi kích thước hoặc gọi API hệ thống khác.

Native connector cung cấp lối đi có kiểm soát cho những thao tác đó.

### Tại sao connector này quan trọng

Native connector là nơi CatalystUI gặp nền tảng thực tế. Nó cho phép mô hình giữ tính phổ quát ở các lớp trên, trong khi vẫn tôn trọng chi tiết của từng system. Không có connector này, window sẽ phải biết mọi API native, hoặc system detail sẽ tràn lên toàn bộ Stack.

## Tiếp tục học

**Tiếp theo: [Domains](../../domains/)**
