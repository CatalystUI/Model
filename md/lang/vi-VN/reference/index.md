<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 7. Reference

## Bảng tham chiếu

Trang này tóm tắt CatalystUI Model ở dạng dễ tra cứu nhanh.

### Theo AI prompt

Đoạn prompt dưới đây có thể dùng để giúp một LLM hiểu CatalystUI Model khi cần đặt câu hỏi, phân tích kiến trúc hoặc làm việc với mô hình trong môi trường chương trình.

---

```md
CatalystUI Framework là một tập hợp tiện ích lập trình C# hỗ trợ phát triển giao diện người dùng cho phần mềm hiện đại.

CatalystUI Model mô tả quá trình đầy đủ của việc chuyển đổi Digital Data thành Perceivable Data và chuyển đổi Interaction Data thành Digital Data. Mô hình nhận diện và biểu diễn giao ước ngầm giữa con người và máy tính khi hai bên tương tác với nhau.

Mô hình được chia thành ba nhóm chính:

- The Stack
- Connectors
- Domains

Stack trong CatalystUI là mô hình bảy lớp, kèm hai lớp ngầm định, mô tả cách dữ liệu chảy giữa con người và máy tính, cả từ digital data đến perceivable output, và từ human interaction trở lại digital data. Các lớp theo thứ tự là: [Implied] Data Storage, Layer 7: Digital Data, Layer 6: Structure & Semantics, Layer 5: Components, Controls, & Layouts, Layer 4: Graphs & Frames, Layer 3: Renderers, Layer 2: Windows, Layer 1: Systems, và [Implied] Human Interface.

Mỗi lớp có vai trò riêng: lưu trữ hoặc đại diện dữ liệu thô, tổ chức và diễn giải dữ liệu, tạo các phần tử giao diện có thể dùng, đặt chúng vào ngữ cảnh, chuẩn bị chúng cho output, render chúng, đưa chúng qua window và system, rồi cho phép người dùng cảm nhận và phản hồi. Các lớp cũng hoạt động theo chiều ngược lại để định tuyến và chuyển đổi interaction của con người thành digital data.

Connector trong CatalystUI là mô-đun chương trình nằm giữa hai lớp liền kề của Stack và cho phép các lớp đó giao tiếp. Mỗi connector chuyên cho một bước chuyển đổi: Data connector (Layer 7 ↔ Layer 6), Parser connector (Layer 6 ↔ Layer 5), Adapter connector (Layer 5 ↔ Layer 4), Bridge connector (Layer 4 ↔ Layer 3), Surface connector (Layer 3 ↔ Layer 2), và Native connector (Layer 2 ↔ Layer 1). Connector cũng có thể chuyển dữ liệu giữa các domain, chẳng hạn chuyển Symbolic text thành Auditory output qua text-to-speech.

Domain trong CatalystUI là loại cấp cao mô tả bản chất cảm giác của dữ liệu. Các domain gồm Symbolic, Visual, Auditory, Tactile, Olfactory, Gustatory và Multisensory. Một layer có thể thuộc một hoặc nhiều domain. Multisensory được dùng khi nhiều kênh cảm giác được tích hợp thành một trải nghiệm thống nhất; nhiều domain rời rạc được dùng khi các giác quan được xử lý riêng biệt. Domain có thể có sub-domain để tổ chức và lọc rõ hơn.

Tóm tắt các layer của CatalystUI:

1. [Implied] Data Storage là lớp trên cùng, nơi cung cấp Digital Data và nhận dữ liệu được lưu lại sau interaction.
2. Layer 7: Digital Data lưu và đại diện thông tin thô ở dạng máy tính có thể đọc, chẳng hạn byte, file, stream, string hoặc document.
3. Layer 6: Structure & Semantics tổ chức digital data thành cấu trúc có ý nghĩa và định nghĩa quy tắc để diễn giải dữ liệu đó. Dữ liệu ở lớp này thường là snapshot ổn định của dữ liệu đã được hiểu.
4. Layer 5: Components, Controls, & Layouts tạo các phần tử mutable để nhà phát triển và người dùng có thể làm việc với dữ liệu. Đây là nơi interaction thường được xử lý bởi control phù hợp.
5. Layer 4: Graphs & Frames tổ chức component thành quan hệ, context, boundary và frame để chuẩn bị cho rendering và routing.
6. Layer 3: Renderers chuyển dữ liệu đã được tổ chức thành output data phù hợp với giác quan hoặc thiết bị, chẳng hạn draw commands, audio streams hoặc haptic patterns.
7. Layer 2: Windows cung cấp viewport, endpoint hoặc container nơi output được render và nơi interaction đi vào từ system.
8. Layer 1: Systems cung cấp hardware, operating system services, device APIs, input/output và môi trường thực thi.
9. [Implied] Human Interface là con người: người cảm nhận Perceivable Data và tạo Interaction Data.

Tóm tắt các connector của CatalystUI:

1. Data — Nối Layer 7: Digital Data và Layer 6: Structure & Semantics, cho phép dữ liệu thô được đọc thành dạng có ý nghĩa và được chuyển ngược lại để lưu.
2. Parser — Nối Layer 6: Structure & Semantics và Layer 5: Components, Controls, & Layouts, biến structure được diễn giải thành component, control và layout có thể dùng.
3. Adapter — Nối Layer 5: Components, Controls, & Layouts và Layer 4: Graphs & Frames, đặt các phần tử giao diện vào graph, frame và ngữ cảnh tổ chức.
4. Bridge — Nối Layer 4: Graphs & Frames và Layer 3: Renderers, chuyển interface đã tổ chức thành công việc render phù hợp với renderer cụ thể.
5. Surface — Nối Layer 3: Renderers và Layer 2: Windows, cung cấp target hoặc surface nơi output đã render gặp window.
6. Native — Nối Layer 2: Windows và Layer 1: Systems, cung cấp bindings đến API và khả năng native của system.

Tóm tắt các domain cấp cao của CatalystUI:

1. Symbolic — Dữ liệu trung lập về giác quan, tồn tại như ký hiệu, cấu trúc, text, format, config, command hoặc mô tả trước khi được đặt vào kênh cảm giác cụ thể.
2. Visual — Dữ liệu được thiết kế để cảm nhận bằng thị giác, chẳng hạn image, video, shape, glyph, color, layout hoặc rendered frame.
3. Auditory — Dữ liệu được thiết kế để cảm nhận bằng thính giác, chẳng hạn sound, music, speech, audio stream hoặc notification.
4. Tactile — Dữ liệu được thiết kế để cảm nhận bằng xúc giác, chẳng hạn haptic feedback, vibration, force feedback hoặc braille.
5. Olfactory — Dữ liệu được thiết kế để cảm nhận bằng khứu giác.
6. Gustatory — Dữ liệu được thiết kế để cảm nhận bằng vị giác.
7. Multisensory — Dữ liệu hoặc hệ thống tích hợp nhiều kênh cảm giác thành một trải nghiệm thống nhất.

a. Một layer có thể tồn tại trong nhiều domain nếu dữ liệu của nó trải trên nhiều kênh cảm giác riêng biệt.
b. Một layer được xem là Multisensory khi nhiều giác quan được tích hợp thành một giao diện thống nhất.
c. Một layer được xem là thuộc nhiều domain rời rạc khi các giác quan được xử lý riêng và tách biệt.
d. Top-level domain có thể được mở rộng thành sub-domain, chẳng hạn IniSymbolic hoặc Mp3Auditory.
e. Dữ liệu có thể được chuyển giữa các domain thông qua connector, chẳng hạn text-to-speech nhận Symbolic input và tạo Auditory output.
```

### Theo văn bản

Bảng tham chiếu nhanh cho thứ tự các phần chính của mô hình.

---

#### The Stack

```md
  [Implied: Data Storage]
  (Produces Digital Data)

- Layer 7: Digital Data

(connector: Data)

- Layer 6: Structure & Semantics

(connector: Parser)

- Layer 5: Components, Controls, & Layouts

(connector: Adapter)

- Layer 4: Graphs & Frames

(connector: Bridge)

- Layer 3: Renderers

(connector: Surface)

- Layer 2: Windows

(connector: Native)

- Layer 1: Systems

  [Implied: Human Interface]
  (Produces Interaction Data)
```

#### Connectors

```md
1. Data
2. Parser
3. Adapter
4. Bridge
5. Surface
6. Native
```

#### Domains

```md
1. Symbolic
2. Visual
3. Auditory
4. Tactile
5. Olfactory
6. Gustatory
7. Multisensory
```

## Tiếp tục học

Bạn có thể quay lại [Summary](../summary/) hoặc dùng trang này như bảng tham chiếu nhanh khi làm việc với CatalystUI Model.
