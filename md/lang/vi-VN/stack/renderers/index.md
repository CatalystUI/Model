<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.6 Stack :: Layer 3: Renderers

## Thảo luận chuyên sâu

### Chuyển dữ liệu thành output có thể tạo ra

**Renderers** là lớp chuyển dữ liệu đã được tổ chức thành dạng mà hệ thống có thể dùng để tạo output cảm giác. Trong giao diện visual, renderer có thể tạo draw commands, glyphs, textures, shapes hoặc pixels. Trong auditory domain, renderer có thể tạo waveform hoặc audio stream. Trong tactile domain, renderer có thể tạo mẫu rung hoặc phản hồi lực.

Rendering không chỉ dành cho đồ họa. Trong CatalystUI, render nghĩa là biến dữ liệu giao diện thành dữ liệu có thể được hệ thống đưa ra cho giác quan của người dùng.

### Renderer không phải component

Component mô tả phần tử giao diện có thể dùng. Renderer mô tả cách sản xuất output từ dữ liệu đã chuẩn bị. Một button component có thể có nhãn, trạng thái và hành vi. Renderer có thể chuyển button đó thành hình chữ nhật, chữ, màu, hiệu ứng hoặc âm thanh phản hồi tùy domain.

Sự tách biệt này giúp component không bị khóa vào một engine cụ thể. Cùng một component có thể được render bằng OpenGL, Vulkan, Metal, canvas, text terminal, audio engine hoặc hệ thống khác nếu connector và renderer phù hợp tồn tại.

### Renderer nhận dữ liệu đã được chuẩn bị

Renderer không nên bị buộc phải hiểu toàn bộ cấu trúc ứng dụng. Layer 4 chuẩn bị graph và frame, Bridge connector chuyển dữ liệu phù hợp cho renderer, rồi renderer tập trung vào việc tạo output.

Trong visual UI, renderer có thể nhận thông tin về vị trí, kích thước, clipping, text, màu và texture. Trong audio UI, renderer có thể nhận thông tin về source, volume, timing và mixing. Trong tactile UI, renderer có thể nhận cường độ, thời lượng và mẫu phản hồi.

### Vai trò trong interaction

Renderer cũng có thể tham gia luồng interaction ngược. Một số interaction cần được diễn giải theo ngữ cảnh render. Ví dụ, vị trí con trỏ có thể cần chuyển đổi theo DPI, scale, viewport hoặc transform. Một keybind renderer có thể nhận key press và nhận diện nó như lệnh cụ thể. Một audio renderer có thể liên quan đến timing hoặc vùng phát.

Renderer không nhất thiết xử lý intent cuối cùng, nhưng nó có thể chuyển interaction sang dạng mà Graphs & Frames và Components hiểu rõ hơn.

### Renderer và domain

Mỗi renderer thường gắn với một hoặc nhiều domain. Visual renderer tạo visual output. Audio renderer tạo auditory output. Haptic renderer tạo tactile output. Một renderer đa giác quan có thể phối hợp nhiều output nếu nó thật sự tích hợp chúng.

CatalystUI giữ khái niệm renderer rộng để không rơi vào giả định rằng render luôn có nghĩa là “vẽ lên màn hình.”

### Tại sao lớp này quan trọng

Layer 3 là nơi dữ liệu chuẩn bị trở thành output thực tế. Nó tạo cầu nối giữa giao diện đã tổ chức và hệ thống có thể trình bày output. Nếu không có renderer, component và graph vẫn chỉ là cấu trúc chương trình; người dùng chưa có gì để cảm nhận.

## Tiếp tục học

**Tiếp theo: [Layer 2: Windows](../windows/)**
