# ShihYeTranslator (師爺翻譯機)
<img src="https://user-images.githubusercontent.com/30222789/207522406-b12b5320-d953-4366-8070-b31d99f2251b.jpg" width="410" height="460" /> <img src="https://user-images.githubusercontent.com/30222789/207523056-fc4eae4c-5191-4a19-ab55-193b3661fd0b.jpg" width="410" height="460" />

康城縣長馬邦德在上任的路上被麻匪劫了，於是到鵝城當師爺，並翻譯什麼叫做驚喜。

## QRCode
<img width="200" alt="QR Code" src="https://user-images.githubusercontent.com/30222789/207525564-9ef1b3da-2fe6-4bbb-b62e-e6bbd2c63ea6.png">



## 建置LineBot步驟
* Line Developer -> Create -> Messaging API Channel
* Basic Setting -> Line Official Account Manager 機器人個人檔案設定
* 回應設定，設定加入好友訊息，關閉自動回應訊息，打開Webhook
* Messaging API創建Channel Access Token


## GAS部署步驟
* 貼上Channel Access Token
* 右上角部署 -> 新增部署作業 -> 允許權限
* 複製Webhook連結，到Line的Messaging API頁面貼上
