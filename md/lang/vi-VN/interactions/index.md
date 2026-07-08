<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 6. Interactions

## Tóm tắt theo chủ đề

**Interaction** là hành động của người dùng được hệ thống nhận và diễn giải như dữ liệu. Người dùng có thể nhấn phím, chạm màn hình, di chuyển chuột, nói lệnh, nhấn nút vật lý, xoay núm, kéo cần điều khiển, hoặc thực hiện một thao tác khác. Khi hệ thống nhận hành động đó và đưa nó vào luồng xử lý, nó trở thành **Interaction Data**.

Interactions là nửa còn lại của cuộc giao tiếp giữa con người và hệ thống. Output đi từ Digital Data xuống Perceivable Data. Interaction đi từ hành động của con người lên Digital Data hoặc thay đổi trong dữ liệu.

### Interaction không phải lúc nào cũng là click

Trong nhiều UI framework, interaction thường được nghĩ như mouse click hoặc touch event. CatalystUI rộng hơn. Một interaction có thể là âm thanh người dùng tạo ra, cử chỉ, input từ thiết bị hỗ trợ, nút phần cứng, tín hiệu haptic, lựa chọn trong terminal, hoặc thao tác trong hệ thống chuyên dụng.

Điểm chung không phải là loại thiết bị. Điểm chung là intent của người dùng được hệ thống nhận như thông tin.

### Luồng đi lên Stack

Interaction thường bắt đầu ở **Layer 1: Systems** vì system nhận tín hiệu từ hardware hoặc môi trường native. Sau đó nó được chuyển đến **Layer 2: Windows**, nơi nó có ngữ cảnh endpoint. **Layer 3: Renderers** và **Layer 4: Graphs & Frames** có thể giúp chuyển đổi, định tuyến hoặc diễn giải interaction. Cuối cùng, **Layer 5: Components, Controls, & Layouts** là nơi control liên quan xử lý intent.

Nếu interaction làm thay đổi dữ liệu, thay đổi có thể tiếp tục đi lên **Layer 6: Structure & Semantics** và **Layer 7: Digital Data**.

### Routing

Interaction hiếm khi tự biết control nào nên xử lý nó. Một mouse click có vị trí. Một key press có phím. Một voice command có âm thanh hoặc văn bản được nhận diện. Stack cần xác định hành động đó có nghĩa gì trong ngữ cảnh hiện tại.

Graph có thể xác định component nào ở vị trí đó. Frame có thể biết boundary. Renderer có thể chuyển tọa độ hoặc scale. Control cuối cùng xử lý action. Routing là lý do các lớp giữa system và component quan trọng.

### No-op cũng là kết quả hợp lệ

Không phải interaction nào cũng thay đổi dữ liệu. Người dùng có thể click vào vùng trống, nhấn phím không có binding, hoặc thực hiện hành động bị disabled. Trong trường hợp đó, hệ thống có thể tạo no-op. Đây vẫn là một kết quả có ý nghĩa: interaction đã được nhận và không cần thay đổi nào được thực hiện.

### Tại sao interactions quan trọng

CatalystUI không chỉ mô tả cách hệ thống nói với người dùng. Nó cũng mô tả cách người dùng nói lại với hệ thống. Interactions hoàn thành chu kỳ giao tiếp. Không có chúng, giao diện chỉ là output. Với chúng, giao diện trở thành cuộc đối thoại giữa intent của con người và dữ liệu của hệ thống.

## Tiếp tục học

**Tiếp theo: [Reference](../reference/)**
