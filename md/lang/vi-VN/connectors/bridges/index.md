<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 4.4 Connectors :: Bridge

## Thảo luận chuyên sâu

### Từ ngữ cảnh đến công việc render

**Bridge** connector nằm giữa **Layer 4: Graphs & Frames** và **Layer 3: Renderers**. Nó nhận interface đã được tổ chức trong graph/frame và chuyển nó thành dữ liệu mà renderer cụ thể có thể sản xuất.

Layer 4 biết interface gồm những gì, các phần tử liên hệ ra sao, và frame đang giới hạn dữ liệu trong vùng nào. Layer 3 cần dữ liệu theo dạng phù hợp với renderer: draw commands, audio instructions, haptic patterns, glyph runs, textures, buffers hoặc cấu trúc render khác.

Bridge connector xử lý bước chuyển đó.

### Bridge không phải renderer

Bridge chuẩn bị dữ liệu cho renderer, nhưng nó không tự render. Nó không phải là nơi cuối cùng tạo output cảm giác. Thay vào đó, nó dịch ngữ cảnh của Layer 4 sang ngôn ngữ mà renderer có thể hiểu.

Trong visual UI, Bridge có thể biến component đã tổ chức thành rectangle, path, texture reference, glyph run hoặc command list. Trong audio, nó có thể biến graph âm thanh thành nguồn, kênh, volume và timing. Trong tactile, nó có thể biến state thành pattern và intensity.

### Bảo toàn ngữ cảnh

Bridge connector phải bảo toàn thông tin ngữ cảnh quan trọng. Nếu frame có boundary, renderer cần biết. Nếu graph có order hoặc layering, renderer cần dữ liệu tương ứng. Nếu component bị disabled, hidden, clipped, focused hoặc selected, bridge cần truyền thông tin phù hợp để output phản ánh đúng trạng thái.

Nói cách khác, Bridge không chỉ ném component cho renderer. Nó chuẩn bị một biểu diễn render có tổ chức, dựa trên ngữ cảnh mà Layer 4 đã thiết lập.

### Trừu tượng hóa renderer cụ thể

Một lợi ích lớn của Bridge là nó cho phép cùng graph/frame được kết nối với nhiều renderer khác nhau. Một visual interface có thể được bridge sang OpenGL, Vulkan, Metal, Direct2D hoặc một text renderer. Một cấu trúc audio có thể được bridge sang các audio engine khác nhau.

Điều này không có nghĩa mọi renderer đều có thể thay thế hoàn hảo. Mỗi renderer có khả năng và giới hạn riêng. Nhưng Bridge cho mô hình một nơi rõ ràng để xử lý sự khác biệt đó mà không buộc Layer 4 hoặc Layer 5 biết chi tiết của từng renderer.

### Interaction đi ngược

Trong hướng ngược, Bridge có thể giúp dịch interaction từ renderer context quay lại graph/frame. Ví dụ, renderer có thể biết transform, scale, viewport, hit-test data hoặc thông tin vị trí cần thiết để Layer 4 định tuyến interaction đúng.

Bridge giữ cho dữ liệu interaction không mất ý nghĩa khi đi qua ranh giới giữa renderer và ngữ cảnh giao diện.

### Tại sao connector này quan trọng

Bridge connector giữ Graphs & Frames tách khỏi Renderers. Layer 4 tổ chức giao diện; Layer 3 sản xuất output. Bridge là nơi dữ liệu đã tổ chức được chuyển thành công việc render. Không có nó, graph sẽ phải biết quá nhiều về renderer, hoặc renderer sẽ phải hiểu quá nhiều về logic giao diện.

## Tiếp tục học

**Tiếp theo: [Surface Connector](../surfaces/)**
