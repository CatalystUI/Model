<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 4.1 Connectors :: Data

## Thảo luận chuyên sâu

### Từ dữ liệu kỹ thuật số đến ý nghĩa được diễn giải

**Data** connector nằm giữa **Layer 7: Digital Data** và **Layer 6: Structure & Semantics**. Nó chịu trách nhiệm đưa dữ liệu máy tính có thể đọc được vào dạng mà semantic và structure có thể hiểu.

Digital Data có thể là byte, text, file content, stream hoặc phản hồi từ hệ thống khác. Nhưng trước khi phần còn lại của Stack dùng được dữ liệu đó, hệ thống cần biết nó thuộc định dạng nào, nên đọc theo quy tắc nào, và các phần của nó có ý nghĩa gì.

Data connector thực hiện bước chuyển đầu tiên đó.

### Đưa dữ liệu vào Structure & Semantics

Một JSON settings file có thể bắt đầu như encoded text. Data connector đọc text, nhận diện JSON, kiểm tra cấu trúc cơ bản, rồi tạo dữ liệu có thể được Layer 6 diễn giải. Một CSV file có thể trở thành rows và fields. Một binary file có thể trở thành headers và sections. Một database result có thể trở thành records.

Công việc cụ thể tùy loại dữ liệu, nhưng trách nhiệm vẫn giống nhau: chuyển Digital Data thành thông tin có thể được hiểu qua Structure & Semantics.

### Bảo toàn ý nghĩa

Data connector phải bảo toàn ý nghĩa khi dữ liệu di chuyển. Điều này không có nghĩa mọi byte phải giữ nguyên hình thức ở mọi biểu diễn. Nó có nghĩa là mối quan hệ giữa dữ liệu gốc và structure được tạo ra phải trung thực.

Nếu file chứa title, structure nên giữ title đó. Nếu record có identifier, identifier đó nên vẫn liên hệ với record đúng. Nếu format định nghĩa thứ tự, nhóm hoặc giá trị bắt buộc, connector nên tôn trọng các kỳ vọng đó.

### Quay lại Digital Data

Vì Stack có thể đảo chiều, Data connector cũng hoạt động theo hướng ngược. Khi interaction làm thay đổi thông tin, structure có thể cần được chuyển lại thành Digital Data để lưu, truyền hoặc xử lý tiếp.

Một settings structure có thể trở thành JSON text. Một bảng giá trị có thể trở thành CSV. Một document structure có thể trở thành byte của file. Một record có thể trở thành database update.

Nếu Data connector chỉ đọc được nhưng không ghi lại được, giao diện có thể hiển thị dữ liệu nhưng không hoàn thành chu kỳ thay đổi bền vững.

### Validation và failure

Data connector thường là nơi đầu tiên phát hiện lỗi có ý nghĩa. Dữ liệu có thể thiếu, malformed, không hoàn chỉnh, không được hỗ trợ, lỗi thời hoặc không phù hợp với semantic mong đợi.

Connector nên làm rõ kết quả của quá trình chuyển đổi. Nó có thể áp dụng default, bỏ qua extension không hỗ trợ, tạo partial structure hoặc báo lỗi rõ ràng. Các lớp còn lại không nên bị buộc phải đoán dữ liệu có được hiểu đúng hay không.

### Tại sao connector này quan trọng

Data connector ngăn mô hình giả định rằng dữ liệu kỹ thuật số tự động có ý nghĩa chỉ vì nó có sẵn. Layer 7 giữ biểu diễn kỹ thuật số. Layer 6 giữ ý nghĩa được diễn giải. Data connector xử lý bước chuyển giữa hai điều đó.

## Tiếp tục học

**Tiếp theo: [Parser Connector](../parsers/)**
