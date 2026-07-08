<!--
Bản dịch này được tạo bởi ChatGPT và cần được một biên dịch viên con người xem xét.
Hãy xóa các dòng này trong một pull request sau khi bản dịch đã được xác minh.
-->

# 5.3 Domains :: Auditory

## Thảo luận chuyên sâu

### Dữ liệu dành cho thính giác

**Auditory** domain đại diện cho dữ liệu được thiết kế để con người cảm nhận bằng tai. Nó bao gồm âm thanh, nhạc, giọng nói, hiệu ứng âm thanh, luồng âm thanh, waveform, thông báo bằng âm thanh, đầu ra text-to-speech, và các hệ thống xử lý âm thanh khác.

Giống Visual domain không chỉ là pixel, Auditory domain không chỉ là mẫu âm thanh cuối cùng. Nó có thể bao gồm dữ liệu cấp cao hơn như một bài hát, một cue âm thanh, một kênh âm lượng, một danh sách phát, một lệnh phát, hoặc một graph âm thanh trước khi dữ liệu được chuyển thành tín hiệu mà loa có thể phát.

### Âm thanh là giao diện

Một trong những lý do CatalystUI dùng domain là để nhấn mạnh rằng giao diện người dùng không chỉ là màn hình. Âm thanh cũng có thể là giao diện. Một cảnh báo, lời đọc hướng dẫn, tiếng click phản hồi, chuông báo, lệnh giọng nói hoặc môi trường âm thanh trong trò chơi đều giúp người dùng hiểu và phản hồi hệ thống.

Nếu một người dùng có thể nhận thông tin từ hệ thống qua âm thanh, thì âm thanh đó là một phần của giao diện. Nó không phải là phần phụ chỉ vì nó không được vẽ trên màn hình.

### Từ dữ liệu đến âm thanh

Một tệp MP3 có thể bắt đầu như Digital Data. Data connector có thể đọc nó, Structure & Semantics có thể hiểu định dạng của nó, Components có thể tạo một `AudioComponent`, Graphs & Frames có thể tổ chức nó trong ngữ cảnh phát, Renderer có thể tạo luồng âm thanh, Window có thể cung cấp điểm phát, và System có thể chuyển nó tới thiết bị âm thanh.

Cùng một mô hình cũng áp dụng cho giọng nói tổng hợp. Văn bản Symbolic có thể được chuyển thành Auditory output qua connector và renderer phù hợp. Đây là ví dụ mạnh mẽ cho thấy domain không bị khóa cứng: dữ liệu có thể chuyển từ ý nghĩa biểu tượng sang âm thanh có thể nghe.

### Quan hệ với tương tác

Auditory domain không chỉ liên quan đến output. Interaction cũng có thể liên quan đến âm thanh, chẳng hạn như lệnh giọng nói, clap detection, cao độ, âm lượng, hoặc tín hiệu âm thanh được người dùng tạo ra. Khi hệ thống diễn giải hành động đó như intent, nó trở thành interaction data và có thể đi ngược lên Stack.

### Khi nào là Multisensory

Âm thanh thường đi cùng hình ảnh hoặc rung. Một video có cả hình và tiếng có thể trở thành trải nghiệm Multisensory nếu hai kênh được tích hợp như một đầu ra thống nhất. Một ứng dụng có thông báo hình ảnh riêng và âm báo riêng có thể được mô tả là có nhiều domain rời rạc nếu chúng được xử lý độc lập.

Sự phân biệt này giúp mô hình mô tả đúng cách dữ liệu được hợp nhất hay tách riêng.

### Tại sao domain này quan trọng

Auditory domain giúp CatalystUI nói rõ rằng âm thanh là một kênh giao tiếp hoàn chỉnh giữa người dùng và hệ thống. Nó có thể mang thông tin, trạng thái, cảnh báo, hướng dẫn, cảm xúc và phản hồi. Khi được đặt vào mô hình, âm thanh không còn là “thêm vào sau”; nó là một dạng dữ liệu giao diện hợp lệ.

## Tiếp tục học

**Tiếp theo: [Tactile](../tactile/)**
