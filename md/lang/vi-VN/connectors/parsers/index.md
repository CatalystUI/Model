<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 4.2 Connectors :: Parser

## Thảo luận chuyên sâu

### Từ ý nghĩa sang phần tử có thể dùng

**Parser** connector nằm giữa **Layer 6: Structure & Semantics** và **Layer 5: Components, Controls, & Layouts**. Nó nhận dữ liệu đã được diễn giải và tạo ra các đối tượng giao diện có thể sử dụng.

Layer 6 biết dữ liệu có nghĩa gì. Layer 5 cần component, control và layout để con người hoặc nhà phát triển có thể tương tác với dữ liệu đó. Parser connector là bước biến “được hiểu” thành “có thể dùng.”

### Không chỉ phân tích text

Từ “parser” thường làm người ta nghĩ đến việc đọc text. Trong CatalystUI, Parser rộng hơn. Nó có thể nhận bất kỳ structure nào từ Layer 6 và tạo ra component phù hợp ở Layer 5.

Một cấu trúc Markdown có thể tạo heading component, paragraph component và link control. Một cấu trúc audio file có thể tạo audio component. Một cấu trúc settings có thể tạo checkbox, text field hoặc slider. Một cấu trúc command có thể tạo control hoặc action component.

### Bảo toàn semantic

Parser connector nên giữ ý nghĩa của structure khi tạo component. Nếu semantic nói một trường là required, component có thể cần phản ánh điều đó. Nếu dữ liệu có order, layout hoặc grouping, parser nên chuyển thông tin đó sang dạng Layer 5 có thể dùng.

Parser không nên tạo component tùy tiện làm mất quan hệ với dữ liệu gốc. Component có thể mutable và thân thiện hơn, nhưng nó vẫn nên liên hệ với structure đã tạo ra nó.

### Tạo controls

Khi dữ liệu cần người dùng thao tác, Parser có thể tạo control. Ví dụ, một trường boolean trong settings có thể trở thành checkbox control. Một command có thể trở thành button control. Một vùng text có thể trở thành editor control.

Điều này không có nghĩa Parser xử lý interaction cuối cùng. Nó tạo các đối tượng có khả năng xử lý interaction. Việc interaction cụ thể được route và xử lý sẽ xảy ra trong luồng của Stack.

### Quay lại structure

Theo hướng ngược, Parser connector cũng giúp chuyển thay đổi từ component/control về structure. Nếu người dùng sửa một giá trị trong component, hệ thống cần biết thay đổi đó tương ứng với phần nào của structure ban đầu.

Parser connector giữ cầu nối đó để dữ liệu mutable ở Layer 5 có thể quay lại dạng được diễn giải ở Layer 6, rồi cuối cùng được lưu lại như Digital Data.

### Tại sao connector này quan trọng

Parser connector giữ ranh giới rõ ràng giữa việc hiểu dữ liệu và việc tạo giao diện có thể dùng. Không có nó, Layer 6 sẽ bị ép tạo component trực tiếp, hoặc Layer 5 sẽ phải tự hiểu format và semantic. Connector này đặt việc chuyển đổi ở đúng chỗ.

## Tiếp tục học

**Tiếp theo: [Adapter Connector](../adapters/)**
