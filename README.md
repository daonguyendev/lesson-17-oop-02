# mobile-app
class: Mobile

properties:
- battery (pin) -> tối đa 100
- composingMemory (vùng nhớ soạn thảo tin nhắn)
- inboxMemory (vùng nhớ lưu tin nhắn đến)
- sentMemory (vùng nhớ lưu tin nhắn đã gửi)
- status (trạng thái bật/tắt của điện thoại)

methods:
+ isOn (kiểm tra điện thoại bật/tắt) -> true/false
+ turnOn (bật điện thoại)
+ turnOff (tắt điện thoại)
+ chargeBattery (sạc pin điện thoại)
+ composeMessage (soạn tin nhắn)
+ receiveMessage (nhận tin nhắn từ Mobile khác)
+ sendMessage (gửi tin nhắn tới Mobile khác)
+ readInboxMsg (xem tin nhắn trong hộp thư đến)
+ readSentMsg (xem tin đã gửi)
+ usePhoneFunc (sử dụng 1 chức năng -> pin giảm 1 đơn vị)
+ các chức năng không hoạt động nếu đt chưa bật