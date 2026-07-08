<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 3.5 Stack :: Layer 4: Graphs & Frames

## Thảo luận chuyên sâu

### Nơi các phần tử có được ngữ cảnh

**Graphs & Frames** là lớp tổ chức các component, control và layout thành một ngữ cảnh lớn hơn. Nếu Layer 5 tạo ra các phần tử có thể dùng, thì Layer 4 quyết định chúng liên hệ với nhau như thế nào, nằm trong vùng nào, được tìm kiếm ra sao, được định tuyến ra sao và được chuẩn bị thế nào cho renderer.

Layer này gồm hai ý tưởng chính: **graphs** và **frames**.

### Graphs

**Graph** lưu trữ, truy vấn và tổ chức các component. Nó có thể theo dõi quan hệ cha-con, thứ tự, trạng thái, focus, nhóm, dependency hoặc các cách liên kết khác giữa các phần tử.

Trong giao diện đồ họa, graph có thể giống component tree hoặc scene graph. Trong âm thanh, graph có thể tổ chức các nguồn âm thanh, kênh, bus và hiệu ứng. Trong một hệ thống tài liệu, graph có thể tổ chức các phần, đoạn, liên kết hoặc node nội dung.

Điểm quan trọng là graph không chỉ sắp xếp vị trí như layout. Graph cung cấp ngữ cảnh tổ chức rộng hơn cho toàn bộ tập hợp component.

### Frames

**Frame** đại diện cho vùng hoạt động và điểm giao tiếp giữa graph đã tổ chức và các lớp thấp hơn của Stack. Frame quan tâm đến boundary, kích thước, vùng có hiệu lực, trạng thái hiện hành, và thông tin cần chuẩn bị trước khi dữ liệu được chuyển xuống renderer.

Trong giao diện visual, frame có thể liên quan đến vùng bên trong window, kích thước viewport, clipping, layout result và thông tin cần render. Trong domain khác, frame có thể là vùng hoặc ngữ cảnh nơi dữ liệu output được chuẩn bị.

### Layout không phải graph

Layout sắp xếp component theo một trật tự cụ thể. Graph tổ chức các component trong một hệ thống quan hệ rộng hơn. Một vertical layout có thể biết các control nên xếp từ trên xuống dưới, nhưng nó không nhất thiết biết mọi component đang hoạt động, route interaction, quản lý focus toàn cục hoặc chuẩn bị boundary cho renderer.

CatalystUI tách hai điều này để layout có thể đơn giản, còn graph và frame xử lý ngữ cảnh lớn hơn.

### Vai trò trong output

Trong luồng từ trên xuống, Layer 4 nhận component từ Layer 5 thông qua Adapter connector. Nó tổ chức chúng, tính hoặc lưu quan hệ, chuẩn bị frame, rồi chuyển dữ liệu đã sẵn sàng hơn cho Bridge connector để renderer có thể làm việc.

Layer 4 không phải là renderer. Nó chuẩn bị dữ liệu cho renderer. Nó biết “cảnh” hoặc “ngữ cảnh” có gì và giới hạn ở đâu, nhưng việc tạo output cảm giác thuộc Layer 3.

### Vai trò trong interaction

Trong luồng từ dưới lên, Layer 4 rất quan trọng cho routing. Một interaction có thể chỉ nói rằng con trỏ ở vị trí nào đó, phím nào đó được nhấn, hoặc lệnh nào đó được kích hoạt. Graph và frame giúp xác định component nào liên quan trong ngữ cảnh hiện tại.

Sau khi xác định, interaction có thể được đưa ngược lên Layer 5 để control xử lý.

### Tại sao lớp này quan trọng

Layer 4 giữ cho giao diện không chỉ là một đống component rời rạc. Nó đưa chúng vào quan hệ, boundary và ngữ cảnh sống. Không có lớp này, component phải tự quản lý toàn bộ hệ thống xung quanh chúng, hoặc renderer phải hiểu quá nhiều về logic giao diện.

Graphs & Frames là nơi giao diện trở thành một tổ chức thống nhất được chuẩn bị để chuyển xuống renderer và quay ngược interaction lên control phù hợp.

## Tiếp tục học

**Tiếp theo: [Layer 3: Renderers](../renderers/)**
