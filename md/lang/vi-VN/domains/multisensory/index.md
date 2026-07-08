<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 5.7 Domains :: Multisensory

## Thảo luận chuyên sâu

### Khi nhiều giác quan trở thành một trải nghiệm

**Multisensory** domain đại diện cho dữ liệu hoặc hệ thống tích hợp nhiều kênh cảm giác thành một trải nghiệm thống nhất. Nó không chỉ có nghĩa là có nhiều loại đầu ra cùng tồn tại. Điểm quan trọng là các kênh đó được phối hợp với nhau như một phần của cùng một giao diện.

Một bộ phim có hình ảnh và âm thanh. Một trò chơi có hình ảnh, âm thanh và rung. Một hệ thống thực tế ảo có thể có hình ảnh, âm thanh, xúc giác, thậm chí mùi. Nếu các kênh này được thiết kế để hoạt động cùng nhau như một trải nghiệm duy nhất, chúng có thể được xem là Multisensory.

### Khác với nhiều domain rời rạc

Một hệ thống có thể thuộc nhiều domain mà không nhất thiết là Multisensory. Nếu một thiết bị xử lý âm thanh và rung qua hai đường riêng biệt, không hợp nhất chúng thành một trải nghiệm chung, mô hình có thể mô tả nó là Auditory & Tactile thay vì Multisensory.

Sự khác biệt nằm ở cách dữ liệu được tổ chức và trải nghiệm. Multisensory nói đến sự tích hợp. Nhiều domain rời rạc nói đến sự cùng tồn tại nhưng vẫn tách biệt.

### Ví dụ về cửa sổ và hệ thống

Một cửa sổ truyền thống trên hệ điều hành hiện đại thường có thể được xem là Multisensory vì nó có thể đóng vai trò như điểm hội tụ cho nhiều đầu ra và tương tác. Nó có thể hiển thị hình ảnh, phát âm thanh, nhận thao tác chuột, bàn phím, cảm ứng, hoặc phối hợp với các thiết bị khác.

Điều này không có nghĩa mọi cửa sổ đều tự động Multisensory trong mọi ngữ cảnh. Nếu một cửa sổ chỉ xử lý văn bản trực quan, nó có thể chủ yếu thuộc Visual hoặc Symbolic-to-Visual. Nhưng khi nó là nơi nhiều kênh cảm giác được phối hợp thành một trải nghiệm, Multisensory trở thành mô tả phù hợp.

### Vai trò của connector

Connector thường là nơi dữ liệu được chuyển giữa domain hoặc được hợp nhất để trở thành Multisensory. Một connector có thể lấy dữ liệu Symbolic và chuẩn bị nó cho Visual output. Một connector khác có thể lấy cùng dữ liệu đó và chuẩn bị cho Auditory output. Một tầng phối hợp có thể đồng bộ cả hai để người dùng thấy và nghe cùng một thông tin.

Multisensory domain giúp mô hình nói về những điểm mà dữ liệu không còn thuộc một kênh duy nhất, mà trở thành một luồng trải nghiệm phối hợp.

### Tại sao domain này quan trọng

Con người thường không trải nghiệm thế giới qua một giác quan duy nhất. Chúng ta nhìn, nghe, chạm, di chuyển, phản ứng và kết hợp tín hiệu liên tục. Nếu giao diện người dùng muốn mô tả đúng thực tế đó, mô hình cần có cách nói về những trải nghiệm hợp nhất nhiều giác quan.

Multisensory domain cung cấp cách đó. Nó cho CatalystUI khả năng mô tả các hệ thống phong phú hơn mà vẫn giữ được sự rõ ràng giữa tích hợp thật sự và nhiều kênh rời rạc.

## Tiếp tục học

**Tiếp theo: [Reference](../../reference/)**
