<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 5.4 Domains :: Tactile

## Thảo luận chuyên sâu

### Dữ liệu dành cho xúc giác

**Tactile** domain đại diện cho dữ liệu được thiết kế để con người cảm nhận qua chạm, áp lực, rung, lực, bề mặt, chuyển động hoặc các dạng phản hồi cơ học khác. Nó bao gồm haptics trên điện thoại, tay cầm chơi game, thiết bị rung, màn hình chữ nổi, nút vật lý, phản hồi lực và những hệ thống giúp người dùng cảm nhận thông tin bằng cơ thể.

Tactile data có thể rất đơn giản, như một lần rung ngắn khi người dùng nhấn nút. Nó cũng có thể phức tạp, như chuỗi rung nhiều lớp, mô phỏng lực, thiết bị hỗ trợ tiếp cận hoặc phản hồi vật lý trong hệ thống nhúng.

### Chạm cũng là giao tiếp

Khi một thiết bị rung để báo lỗi, nó đang giao tiếp. Khi tay cầm phản hồi lực để mô tả đường đua, nó đang giao tiếp. Khi màn hình chữ nổi nâng các chấm để người dùng đọc văn bản, nó đang giao tiếp. Những trải nghiệm này không phải là đồ họa, nhưng chúng vẫn là giao diện người dùng.

CatalystUI dùng Tactile domain để tránh giới hạn giao diện vào những thứ xuất hiện trên màn hình. Nếu dữ liệu được chuẩn bị để người dùng cảm thấy bằng xúc giác, nó thuộc Tactile domain.

### Từ Symbolic sang Tactile

Một dữ liệu Symbolic có thể được chuyển thành Tactile output. Văn bản có thể trở thành chữ nổi. Một trạng thái lỗi có thể trở thành mẫu rung. Một giá trị cường độ có thể trở thành lực phản hồi. Trong mỗi trường hợp, thông tin không mất ý nghĩa; nó chỉ được chuyển sang một kênh cảm giác khác.

Điều này đặc biệt quan trọng cho khả năng tiếp cận. Một mô hình giao diện đúng đắn cần có chỗ cho những người dùng không nhận thông tin chủ yếu qua thị giác hoặc thính giác. Tactile domain giúp CatalystUI mô tả những giao diện đó một cách tự nhiên thay vì xem chúng như ngoại lệ.

### Tương tác xúc giác

Tactile domain cũng liên quan đến input. Nút bấm vật lý, bề mặt cảm ứng, áp lực, cử chỉ, chuyển động hoặc thao tác xúc giác đều có thể tạo interaction data. Hệ thống có thể nhận một thay đổi vật lý và diễn giải nó như ý định của người dùng.

Ví dụ, một nút vật lý có thể được mô tả qua System và Window, được định tuyến qua Stack, rồi cuối cùng được xử lý bởi một Control. Dữ liệu tương tác bắt đầu từ hành động vật lý, nhưng khi hệ thống hiểu nó, nó trở thành một phần của luồng thông tin.

### Quan hệ với các domain khác

Tactile thường đi cùng Visual hoặc Auditory. Một thông báo điện thoại có thể hiển thị banner, phát âm thanh và rung cùng lúc. Nếu ba kênh này được thiết kế như một trải nghiệm hợp nhất, chúng có thể thuộc Multisensory. Nếu từng kênh được xử lý riêng, mô hình có thể mô tả chúng như nhiều domain rời rạc.

### Tại sao domain này quan trọng

Tactile domain nhắc rằng con người không chỉ là mắt nhìn màn hình. Chúng ta có cơ thể. Chúng ta chạm, nhấn, cầm, cảm thấy rung, cảm nhận lực và phản hồi qua môi trường vật lý. Một mô hình giao diện phổ quát cần mô tả được những điều đó.

## Tiếp tục học

**Tiếp theo: [Olfactory](../olfactory/)**
