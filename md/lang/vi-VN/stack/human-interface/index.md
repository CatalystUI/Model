<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.9 Stack :: Implied Human Interface

## Thảo luận chuyên sâu

### Bạn, người dùng cuối

**Human Interface** là lớp ngầm định ở phía dưới Stack. Nó đại diện cho con người đang cảm nhận output của hệ thống và tạo interaction để phản hồi. CatalystUI không trực tiếp triển khai hoặc điều khiển lớp này, nhưng toàn bộ mô hình tồn tại vì lớp này.

Giao diện không có nhiều ý nghĩa nếu không có người dùng để nhận thông tin, hiểu nó, và hành động dựa trên nó.

### Tại sao lớp này ngầm định

CatalystUI có thể mô tả dữ liệu, component, renderer, window và system. Nó có thể mô tả cách interaction đi qua Stack. Nhưng nó không thể trực tiếp biểu diễn toàn bộ con người: nhận thức, cảm xúc, khả năng sinh học, bối cảnh, kinh nghiệm, nhu cầu, giới hạn và ý định.

Vì vậy, Human Interface được nhận diện là điểm đầu và điểm cuối của chu kỳ, nhưng không phải layer explicit mà framework triển khai.

### Người dùng cảm nhận output

Khi output đi xuống Stack, system cuối cùng tạo ra dữ liệu con người có thể cảm nhận. Người dùng nhìn, nghe, chạm, ngửi, nếm hoặc kết hợp nhiều giác quan để hiểu điều gì đang xảy ra.

Đây là nơi Digital Data đã trở thành Perceivable Data. Một file, value hoặc cấu trúc ban đầu đã được chuyển qua nhiều lớp để trở thành thứ có ý nghĩa đối với người dùng.

### Người dùng tạo interaction

Khi người dùng phản hồi, họ tạo interaction. Họ nhấn nút, gõ chữ, chạm màn hình, nói, di chuyển, chọn, kéo, hoặc thực hiện một hành động vật lý khác. System nhận hành động đó và chuyển nó thành dữ liệu mà Stack có thể định tuyến.

Đây là chiều ngược lại của giao tiếp: người dùng gửi ý định vào hệ thống.

### Một chút thực tế vui vẻ

Chúng ta hy vọng người dùng cuối là con người. Stack được thiết kế cho con người. Nó có thể không hoạt động tuyệt vời cho chó. Hoặc mèo.

Thật ra, bạn có lẽ nên bảo vệ bàn phím khỏi mèo. Tốt nhất là đừng trao cho chúng quá nhiều quyền lực. Chuyện đó sẽ đi vào đầu chúng, và rồi chúng ta sẽ không còn ngăn được nữa.

Bạn có thể thử, tất nhiên. Chúc may mắn.

Tôi thì xin tuyên bố: vạn tuế các lãnh chúa mèo mới của chúng ta.

### Tại sao lớp này quan trọng

Human Interface nhắc rằng mục đích của toàn bộ mô hình là giao tiếp. Dữ liệu không chỉ được xử lý vì chính nó. Nó được chuyển thành trải nghiệm để con người có thể hiểu, rồi con người phản hồi bằng hành động để hệ thống có thể tiếp tục chu kỳ.

## Tiếp tục học

**Tiếp theo: [Interactions](../../interactions/)**
