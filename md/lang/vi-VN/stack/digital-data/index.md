<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.2 Stack :: Layer 7: Digital Data

## Thảo luận chuyên sâu

### Dữ liệu ở dạng máy tính có thể đọc

**Digital Data** là lớp explicit đầu tiên của CatalystUI Stack. Nó đại diện cho thông tin ở dạng máy tính có thể lưu, truyền hoặc xử lý, thường là bit, byte, tệp, chuỗi, luồng, tài liệu, bản ghi hoặc vùng bộ nhớ.

Ở lớp này, dữ liệu chưa được yêu cầu phải có component, control, layout hoặc cách trình bày. Nó chỉ cần là dữ liệu kỹ thuật số đang tồn tại trong luồng xử lý của hệ thống.

### Dữ liệu chưa tự giải thích chính nó

Một chuỗi byte có thể là ảnh PNG, tệp MP3, tài liệu Markdown, file cấu hình hoặc dữ liệu bị hỏng. Bản thân các byte không nói rõ con người nên hiểu chúng như thế nào nếu không có semantic và cấu trúc đi kèm.

Vì vậy, Layer 7 không chịu trách nhiệm giải thích đầy đủ ý nghĩa của dữ liệu. Nó là nơi dữ liệu được đại diện như vật liệu kỹ thuật số. Việc hiểu định dạng, quy tắc và cấu trúc của vật liệu đó thuộc Layer 6: Structure & Semantics, thông qua Data connector.

### Không phải storage

Digital Data khác với Data Storage. Data Storage là nơi dữ liệu có thể được giữ lâu dài hoặc lấy ra. Digital Data là dữ liệu khi nó đã đi vào Stack như một biểu diễn hoạt động.

Ví dụ, một file trên ổ đĩa thuộc về Data Storage. Khi ứng dụng đọc file đó thành byte hoặc chuỗi để xử lý, dữ liệu đó trở thành Digital Data trong Stack.

### Ví dụ

Một số ví dụ về Digital Data gồm:

- Nội dung byte của một file PNG.
- Chuỗi JSON nhận từ server.
- Nội dung Markdown của một tài liệu.
- Dữ liệu nhị phân của một file âm thanh.
- Kết quả truy vấn database đã được đưa vào bộ nhớ.
- Một stream nhận từ thiết bị hoặc mạng.

Các ví dụ này có thể rất khác nhau, nhưng trong Layer 7 chúng đều là dữ liệu kỹ thuật số cần được diễn giải trước khi trở thành giao diện có thể dùng.

### Vai trò trong luồng từ trên xuống

Trong luồng từ trên xuống, Layer 7 là điểm khởi đầu explicit. Dữ liệu đi từ Digital Data qua Data connector để trở thành Structure & Semantics. Từ đó, nó có thể được chuyển thành component, tổ chức, render và đưa ra người dùng.

### Vai trò trong luồng từ dưới lên

Trong luồng từ dưới lên, interaction của người dùng có thể cuối cùng tạo ra thay đổi trong Digital Data. Một người dùng sửa văn bản, thay đổi cấu hình, bấm lưu, gửi biểu mẫu hoặc điều chỉnh giá trị. Sau khi control xử lý intent, dữ liệu có thể đi ngược lên để được cấu trúc, serialize và lưu lại như Digital Data.

### Tại sao lớp này quan trọng

Layer 7 giữ cho mô hình không nhầm lẫn dữ liệu thô với ý nghĩa đã diễn giải. Dữ liệu kỹ thuật số là nền tảng, nhưng nó chưa phải là giao diện. Nó cần các lớp và connector tiếp theo để trở thành thứ con người có thể hiểu và thao tác.

## Tiếp tục học

**Tiếp theo: [Layer 6: Structure & Semantics](../structure-and-semantics/)**
