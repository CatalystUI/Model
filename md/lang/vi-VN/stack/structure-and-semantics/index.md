<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.3 Stack :: Layer 6: Structure & Semantics

## Thảo luận chuyên sâu

### Khi dữ liệu bắt đầu có hình dạng và ý nghĩa

**Structure & Semantics** là lớp diễn giải Digital Data. Nếu Layer 7 chứa dữ liệu ở dạng máy tính có thể đọc, thì Layer 6 trả lời câu hỏi: dữ liệu này được sắp xếp như thế nào, và các phần của nó có nghĩa gì?

CatalystUI chia lớp này thành hai khái niệm liên quan: **semantic** và **structure**.

### Semantics

Một **semantic** giống như hợp đồng hoặc đặc tả. Nó mô tả quy tắc mà dữ liệu phải tuân theo: định dạng, trường, thứ tự, loại giá trị, quan hệ và kỳ vọng. Semantic không nhất thiết là một instance cụ thể của dữ liệu; nó là cách hệ thống biết dữ liệu nên được đọc ra sao.

Ví dụ, đặc tả MP3, cú pháp JSON, quy tắc Markdown hoặc schema của một file cấu hình đều có thể đóng vai trò semantic. Chúng nói cho hệ thống biết một dữ liệu hợp lệ sẽ trông như thế nào và các phần của nó nên được hiểu ra sao.

### Structures

Một **structure** là biểu diễn đã được diễn giải của một instance dữ liệu cụ thể. Nếu semantic là hợp đồng, structure là dữ liệu đã được đọc theo hợp đồng đó.

Ví dụ, một file cấu hình có thể bắt đầu như văn bản. Sau khi được diễn giải, nó có thể trở thành một structure gồm các key và value. Một tài liệu Markdown có thể trở thành cấu trúc gồm heading, paragraph, list và link. Một file nhị phân có thể trở thành header, section và value.

Trong CatalystUI, structure thường được hiểu như một snapshot ổn định của dữ liệu đã diễn giải. Nó không phải là control có thể tương tác trực tiếp, mà là cách thân thiện với chương trình để đọc ý nghĩa của dữ liệu.

### Tính bất biến

Layer 6 thường được mô tả là immutable vì nó đại diện cho cách dữ liệu được hiểu tại một thời điểm. Khi dữ liệu thay đổi, hệ thống có thể tạo structure mới hoặc cập nhật biểu diễn theo quy trình rõ ràng, nhưng bản thân mục đích của Layer 6 là giữ cách diễn giải ổn định.

Điều này giúp tách biệt Layer 6 khỏi Layer 5. Structure & Semantics không phải là nơi người dùng bấm nút, kéo thanh trượt hoặc chỉnh sửa trực tiếp. Đó là trách nhiệm của Components, Controls, & Layouts.

### Tại sao không nhảy thẳng đến component?

Có thể hấp dẫn khi đọc dữ liệu và tạo ngay component. Nhưng làm như vậy trộn lẫn việc hiểu dữ liệu với việc tạo giao diện. CatalystUI tách hai bước này ra để ý nghĩa của dữ liệu được bảo tồn trước khi nó được biến thành đối tượng tương tác.

Một tài liệu có thể được hiển thị, in, đọc thành âm thanh, chuyển đổi, tìm kiếm hoặc chỉnh sửa. Nếu hệ thống nhảy thẳng từ byte sang visual component, nó có thể làm mất các khả năng khác. Layer 6 giữ ý nghĩa của dữ liệu ở dạng có thể dùng cho nhiều mục đích.

### Tại sao lớp này quan trọng

Structure & Semantics là nơi Digital Data trở thành thông tin được hiểu. Nó không chỉ là dữ liệu đang tồn tại; nó là dữ liệu đã được diễn giải theo quy tắc. Không có lớp này, các layer thấp hơn sẽ phải đoán dữ liệu có nghĩa gì, và giao diện sẽ dễ bị khóa vào cách trình bày cụ thể quá sớm.

## Tiếp tục học

**Tiếp theo: [Layer 5: Components, Controls, & Layouts](../components-controls-and-layouts/)**
