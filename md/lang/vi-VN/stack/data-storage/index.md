<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.1 Stack :: Implied Data Storage

## Thảo luận chuyên sâu

### Lớp nằm ngoài Stack trực tiếp

**Data Storage** là lớp ngầm định ở phía trên Stack. Nó đại diện cho nơi dữ liệu được lưu giữ trước khi CatalystUI xử lý dữ liệu đó như Digital Data. Lớp này có thể là filesystem, database, web API, stream, bộ nhớ, dịch vụ cloud, thiết bị lưu trữ, hoặc bất kỳ cơ chế nào có thể cung cấp dữ liệu cho hệ thống.

Nó được gọi là ngầm định vì CatalystUI Model không cần trực tiếp biểu diễn mọi chi tiết của cơ chế lưu trữ. Mô hình bắt đầu làm việc rõ ràng khi dữ liệu bước vào Layer 7: Digital Data. Tuy vậy, Data Storage vẫn quan trọng vì nó thường là nguồn sinh ra dữ liệu mà giao diện sẽ trình bày hoặc thao tác.

### Không phải mọi storage đều giống nhau

Một tệp trên ổ đĩa, một hàng trong database và một phản hồi HTTP đều có cách truy cập khác nhau. Nhưng từ góc nhìn của Stack, chúng có thể đóng cùng một vai trò: cung cấp dữ liệu để hệ thống đọc, diễn giải và đưa vào luồng giao diện.

CatalystUI không cần ép tất cả cơ chế lưu trữ thành một kiểu duy nhất. Thay vào đó, mô hình công nhận rằng việc lấy dữ liệu từ storage là một trách nhiệm nằm ở rìa Stack, thường được xử lý bởi Data connector khi dữ liệu được đưa vào Layer 7 và Layer 6.

### Tại sao lớp này ngầm định

Data Storage không phải lúc nào cũng nằm trong quyền kiểm soát của giao diện. Một ứng dụng có thể đọc file của người dùng. Một trang web có thể nhận JSON từ server. Một thiết bị nhúng có thể đọc trạng thái từ cảm biến. Một trò chơi có thể tải asset từ archive. Trong mỗi trường hợp, cơ chế lưu trữ có thể rất khác nhau.

Nếu CatalystUI cố gắng mô tả trực tiếp tất cả hệ thống lưu trữ, mô hình sẽ trở nên quá rộng và mất trọng tâm. Vì vậy, Data Storage được nhận diện nhưng không được coi là một lớp explicit của Stack.

### Quan hệ với Digital Data

Khi dữ liệu được lấy từ storage và đưa vào quá trình giao diện, nó trở thành Digital Data trong Layer 7. Một file Markdown trong ổ đĩa chưa phải là component. Một phản hồi JSON chưa phải là settings panel. Một bản ghi database chưa phải là form. Chúng cần được đọc, diễn giải và chuyển đổi.

Data Storage cung cấp vật liệu. Digital Data là biểu diễn hoạt động của vật liệu đó trong Stack.

### Tại sao lớp này quan trọng

Việc đặt Data Storage làm lớp ngầm định giúp mô hình thành thật về nguồn gốc dữ liệu mà không trộn lẫn storage với giao diện. Giao diện cần dữ liệu, nhưng cơ chế lưu dữ liệu không nhất thiết là một phần của giao diện.

Điều này giữ Stack sạch hơn: Data Storage cung cấp dữ liệu; Layer 7 đại diện cho dữ liệu kỹ thuật số đang hoạt động; các lớp tiếp theo biến dữ liệu đó thành ý nghĩa, interface object, ngữ cảnh, output và interaction.

## Tiếp tục học

**Tiếp theo: [Layer 7: Digital Data](../digital-data/)**
