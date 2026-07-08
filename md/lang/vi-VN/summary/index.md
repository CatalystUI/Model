<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 2. Tóm tắt

## Tóm tắt theo chủ đề

CatalystUI Model mô tả quá trình đầy đủ của việc chuyển đổi [Digital Data](../terminology/#digital-data) thành [Perceivable Data](../terminology/#perceivable-data), và chuyển đổi [Interaction Data](../terminology/#interaction-data) ngược lại thành Digital Data. Mô hình cố gắng nhận diện và biểu diễn rõ ràng giao ước ngầm giữa con người và máy tính khi hai bên tương tác với nhau.

Mô hình được chia thành ba nhóm chính:

- [The Stack](../stack/)
- [Connectors](../connectors/)
- [Domains](../domains/)

### The Stack

**Stack** trong CatalystUI là một mô hình bảy lớp, kèm theo hai lớp ngầm định, mô tả cách dữ liệu chảy giữa con người và máy tính. Theo hướng từ trên xuống, dữ liệu kỹ thuật số được tổ chức, biến thành các đối tượng giao diện có thể dùng, được sắp xếp vào ngữ cảnh, được kết xuất, rồi được đưa qua hệ thống để con người có thể cảm nhận. Theo hướng ngược lại, hành động của con người được định tuyến, diễn giải, xử lý và có thể trở thành thay đổi trong dữ liệu kỹ thuật số.

Các lớp gồm:

- **[*Ngầm định*]** Data Storage
- **Layer 7**: Digital Data
- **Layer 6**: Structure & Semantics
- **Layer 5**: Components, Controls, & Layouts
- **Layer 4**: Graphs & Frames
- **Layer 3**: Renderers
- **Layer 2**: Windows
- **Layer 1**: Systems
- **[*Ngầm định*]** Human Interface

Mỗi lớp có một vai trò riêng. Lớp cao hơn liên quan đến dữ liệu và ý nghĩa; lớp thấp hơn liên quan đến việc chuẩn bị, kết xuất và phân phối đầu ra có thể cảm nhận. Khi đi ngược lên, cùng các lớp đó giúp hệ thống hiểu hành động của người dùng và biến nó thành thao tác với dữ liệu.

### Connectors

**Connector** là mô-đun chương trình nằm giữa hai lớp liền kề trong Stack. Connector cho phép các lớp giao tiếp với nhau bằng cách biến đổi dữ liệu từ dạng phù hợp với lớp này sang dạng phù hợp với lớp kia.

Các connector gồm:

- **Data** (Layer 7 ↔ Layer 6)
- **Parser** (Layer 6 ↔ Layer 5)
- **Adapter** (Layer 5 ↔ Layer 4)
- **Bridge** (Layer 4 ↔ Layer 3)
- **Surface** (Layer 3 ↔ Layer 2)
- **Native** (Layer 2 ↔ Layer 1)

Connector cũng là nơi dữ liệu có thể được chuyển giữa các domain. Ví dụ, một connector có thể nhận văn bản mang tính Symbolic và chuẩn bị nó cho Visual output, Auditory output hoặc Tactile output.

### Domains

**Domain** là loại cấp cao mô tả bản chất cảm giác của dữ liệu. CatalystUI dùng bảy domain:

- **Symbolic**
- **Visual**
- **Auditory**
- **Tactile**
- **Olfactory**
- **Gustatory**
- **Multisensory**

Một lớp có thể thuộc một hoặc nhiều domain. **Multisensory** được dùng khi nhiều kênh cảm giác được tích hợp vào một trải nghiệm thống nhất, trong khi nhiều domain rời rạc được dùng khi các kênh cảm giác được xử lý riêng biệt.

## Tiếp tục học

**Tiếp theo: [The Stack](../stack/)**
