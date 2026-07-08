<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 4.3 Connectors :: Adapter

## Thảo luận chuyên sâu

### Từ sử dụng đến ngữ cảnh

**Adapter** connector nằm giữa **Layer 5: Components, Controls, & Layouts** và **Layer 4: Graphs & Frames**. Nó nhận các đối tượng giao diện mutable và đặt chúng vào ngữ cảnh lớn hơn để có thể được tổ chức, tìm kiếm, định tuyến, giới hạn và chuẩn bị cho phần còn lại của Stack.

Layer 5 tạo ra các component, control và layout. Nhưng các phần tử này không tự động biết toàn bộ môi trường xung quanh chúng. Chúng có thể biết chúng là gì và hành xử như thế nào, nhưng chưa chắc biết chúng thuộc view nào, liên hệ với component nào, hoặc nằm trong frame nào.

Adapter connector cung cấp bước chuyển từ phần tử riêng lẻ sang ngữ cảnh tổ chức.

### Đưa component vào graph

Một giao diện hiếm khi chỉ có một component cô lập. Component có quan hệ với nhau: một phần tử chứa phần tử khác, một control nằm trong layout, một nhóm cần được enable, disable, focus, search hoặc update cùng nhau.

Adapter connector đưa component, control và layout vào graph để chúng trở thành một phần của hệ thống lớn hơn. Graph có thể lưu component, theo dõi quan hệ, cung cấp truy vấn và quản lý chúng như một tập hợp.

Một settings component có thể hữu ích riêng lẻ. Khi được adapter đưa vào graph, nó có thể trở thành một phần của settings view đầy đủ, liên kết với section khác, được tìm kiếm theo tên hoặc được route khi người dùng thao tác.

### Layout không phải toàn bộ ngữ cảnh

Layout có thể sắp xếp component, nhưng nó không nhất thiết quản lý lifecycle, routing, focus, boundary hoặc preparation cho renderer. Những trách nhiệm đó thuộc Layer 4.

Adapter connector tôn trọng sự khác biệt này. Nó có thể đặt layout vào graph, nhưng layout không trở thành graph chỉ vì nó sắp xếp component.

### Kết nối với frame

Layer 4 cũng có frame, đại diện cho boundary hoạt động và điểm giao tiếp với các lớp thấp hơn. Adapter connector giúp component bước vào ngữ cảnh frame đó.

Component có thể có size, control có thể có behavior, layout có thể mô tả placement, nhưng frame xác định vùng và bối cảnh mà dữ liệu đang được chuẩn bị. Adapter không render; nó chuẩn bị interface có tổ chức để frame có thể giao tiếp đúng với Bridge và Renderer.

### Tái sử dụng qua adaptation

Cùng một component có thể được adapter vào nhiều ngữ cảnh khác nhau. Một document component có thể đi vào editing graph, preview graph hoặc printing graph. Một music component có thể đi vào playback graph, library graph hoặc editing graph.

Component gốc vẫn quen thuộc, nhưng quan hệ và mục đích của nó thay đổi theo graph và frame mà nó tham gia. Adapter connector làm cho sự tái sử dụng này rõ ràng mà không giả vờ mọi ngữ cảnh đều giống nhau.

### Quay lại component

Trong luồng interaction ngược, Adapter connector giúp đưa interaction đã được đặt ngữ cảnh quay lại component hoặc control phù hợp ở Layer 5. Graph có thể xác định component liên quan; frame có thể giúp hiểu boundary; Adapter đưa kết quả đó về nơi control có thể xử lý.

### Tại sao connector này quan trọng

Adapter connector ngăn mô hình nhầm lẫn dữ liệu giao diện có thể dùng với ngữ cảnh giao diện đã tổ chức. Components vẫn chịu trách nhiệm cho đối tượng mutable và interaction behavior. Graphs & Frames chịu trách nhiệm cho tổ chức, routing, boundary và preparation. Adapter xử lý chuyển động giữa hai lớp đó.

## Tiếp tục học

**Tiếp theo: [Bridge Connector](../bridges/)**
