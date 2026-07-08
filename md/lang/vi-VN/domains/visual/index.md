<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 5.2 Domains :: Visual

## Thảo luận chuyên sâu

### Dữ liệu dành cho thị giác

**Visual** domain đại diện cho dữ liệu được thiết kế để con người cảm nhận bằng mắt. Nó bao gồm những thứ như hình ảnh, video, màu sắc, hình dạng, chữ đã được đặt vị trí, bố cục đồ họa, khung hình, texture, biểu tượng, bản vẽ, và các lệnh kết xuất cuối cùng dẫn đến hình ảnh.

Visual data không chỉ là pixel. Pixel là một dạng rất thấp của dữ liệu thị giác, nhưng domain này cũng có thể bao gồm các biểu diễn cao hơn như hình chữ nhật, glyph, đường viền, vị trí, clipping region, vector path hoặc scene graph. Điều làm cho dữ liệu thuộc Visual domain là mục đích cảm nhận của nó: nó đang được chuẩn bị, tổ chức hoặc xuất ra để được nhìn thấy.

### Từ ký hiệu đến hình ảnh

Nhiều dữ liệu Visual bắt đầu từ Symbolic data. Một đoạn Markdown không phải tự nhiên là hình ảnh. Trước tiên nó phải được diễn giải thành cấu trúc, biến thành component, sắp xếp trong frame, rồi được renderer chuyển thành đầu ra nhìn thấy được. Khi quá trình đó xảy ra, dữ liệu đi từ ý nghĩa trung lập sang biểu diễn thị giác.

Ví dụ, chữ “Save” trong tệp cấu hình có thể là Symbolic. Khi nó trở thành nhãn của một nút bấm, được chọn font, đo kích thước, đặt vị trí, rasterize hoặc vẽ lên màn hình, nó đã tham gia Visual domain.

### Không giới hạn ở GUI truyền thống

Visual domain không chỉ dành cho ứng dụng desktop hoặc mobile. Nó cũng có thể áp dụng cho trò chơi, màn hình nhúng, terminal có màu, bảng LED, kính thực tế tăng cường, bảng điều khiển, hình ảnh in, hoặc bất kỳ hệ thống nào tạo dữ liệu để nhìn.

Điểm chính là giác quan, không phải nền tảng. Nếu dữ liệu được tạo ra để người dùng nhìn thấy, nó thuộc Visual domain cho mục đích của CatalystUI.

### Quan hệ với các domain khác

Visual data thường kết hợp với domain khác. Một video có thể vừa Visual vừa Auditory nếu nó có âm thanh. Một giao diện trò chơi có thể là Multisensory khi hình ảnh, âm thanh và rung được tích hợp thành một trải nghiệm thống nhất. Một màn hình cảm ứng có thể có Visual output và Tactile interaction.

CatalystUI phân biệt những trường hợp này để mô hình không giả định rằng “giao diện” đồng nghĩa với “hình ảnh.” Visual rất phổ biến, nhưng nó chỉ là một trong nhiều domain.

### Vai trò trong Stack

Trong Stack, Visual data thường trở nên rõ ràng ở các lớp chuẩn bị đầu ra: components có thể có kích thước, màu sắc hoặc vị trí; graphs và frames có thể tổ chức chúng trong một vùng hiển thị; renderers có thể chuyển chúng thành draw commands, hình ảnh hoặc pixel; windows và systems có thể đưa kết quả ra màn hình.

Ở hướng ngược lại, tương tác thị giác như nhấp chuột vào một vị trí hoặc chọn một vùng cũng có thể được định tuyến qua cùng mô hình để quay lại component phù hợp.

### Tại sao domain này quan trọng

Visual domain cho CatalystUI một cách chính xác để nói về đồ họa mà không biến toàn bộ mô hình thành một mô hình đồ họa. Nó công nhận rằng hình ảnh là một cách mạnh mẽ để giao tiếp với người dùng, đồng thời vẫn giữ chỗ cho âm thanh, xúc giác, mùi, vị và các trải nghiệm đa giác quan.

## Tiếp tục học

**Tiếp theo: [Auditory](../auditory/)**
