<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 4. Connectors

## Tóm tắt theo chủ đề

**Connectors** là các mô-đun nằm giữa các lớp liền kề của Stack. Chúng không chỉ mô tả dữ liệu di chuyển như thế nào; chúng còn thực hiện việc chuyển đổi cần thiết để một lớp có thể giao tiếp với lớp kế tiếp.

Các connector của Stack là:

- [Data](./data/) — Layer 7 ↔ Layer 6
- [Parser](./parsers/) — Layer 6 ↔ Layer 5
- [Adapter](./adapters/) — Layer 5 ↔ Layer 4
- [Bridge](./bridges/) — Layer 4 ↔ Layer 3
- [Surface](./surfaces/) — Layer 3 ↔ Layer 2
- [Native](./native/) — Layer 2 ↔ Layer 1

Connector quan trọng vì mỗi lớp có trách nhiệm riêng. Digital Data không nên phải tự hiểu toàn bộ semantic. Component không nên phải tự biết cách render chính nó trên mọi hệ thống. Window không nên phải chứa mọi chi tiết của operating system. Connector cung cấp ranh giới rõ ràng để dữ liệu được chuyển đúng dạng mà không làm các lớp lẫn vào nhau.

### Connector và domain

Connector cũng có thể chuyển dữ liệu giữa các domain. Văn bản Symbolic có thể được chuẩn bị cho màn hình Visual, giọng nói Auditory hoặc chữ nổi Tactile. Một connector phù hợp giữ ý nghĩa của dữ liệu trong khi thay đổi cách dữ liệu được trình bày hoặc xử lý.

### Connector không phải lớp ngầm định

Data Storage và Human Interface là endpoints ngầm định. Connector thì khác. Connector luôn nằm giữa hai lớp explicit liền kề. Nó có thể được triển khai theo nhiều cách, nhưng vị trí của nó trong mô hình được xác định bởi hai lớp mà nó nối.

### Tại sao connector quan trọng

Không có connector, Stack sẽ chỉ là danh sách lớp. Connector là nơi dữ liệu thật sự đi qua, đổi dạng và giữ ý nghĩa. Chúng biến mô hình từ một sơ đồ thành một quy trình có thể triển khai.

## Tiếp tục học

**Tiếp theo: [Data Connector](./data/)**
