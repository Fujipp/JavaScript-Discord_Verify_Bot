# Modal to Verify discord
+ [ วิธีตั้งค่า EMBED เบื้องต้นง่ายๆ ]
+ [ติดต่อ](https://discord.gg/vJpkGmZb5w)

### how to install and run 
 + Req: [NodeJS](https://nodejs.org/en/download)
 + Req: [VSCODE](https://code.visualstudio.com/download)
 + Req: [TOKENBOT](https://discord.com/developers/)
 
 
```js
npm install && npm i

node index.js && node .
```
 ```js 
module.exports = {
  token:
    "", // โทเคนบอท
  roleAdmin: "", //ยศแอดมิน
  guild: [""], //เซิฟเวอร์
  WhitelistRole: "", //ยศไวริส
  channelId: "", //ห้องสำหรับกดรับ
  channelId_Log: "", // ห้องสำหรับข้อมูล
  // setting ส่วนแรกคือหน้ากด
  main: {
    button_msg: "กดปุ่มเพื่อลงทะเบียนไวริส", // ข้อความปุ่ม
    button_emoji: " ", // อิโมจิเท่านั้น สามารถใช้อิโมจิพิเศษได้ ตัวอย่าง `:784488608782483477:`
    button_style: ButtonStyle.Danger, //จำเป็นต้องมี ButtonStyle อยุ่ข้างหน้าเสมอ มีทั้งหมด 4สี ได้แก่ Primary สีน้ำเงิน , Secondary = เทา , Success = เขียว ,Danger =แดง 
    title: " ", // ชื่อหัวข้อ
    iconURL: " ", // รูปไอคอน
    Description: " ", // คำอธิบาย
    colors: " ", // #a7e7ff -> [R, G, B] // 12942973
    image: " ", // รูปหลัก 
  },
  //ชื่อของหัวข้อหลังกดปุ่ม
  modals: {
    title: " "
  },
  //setting หลังกรอกข้อมูลเสร็จ
  reply_submit: {
    title: " ", // ชื่อหัวข้อ
    iconURL: " ", // รูปไอคอน
    colors: "#41ff00", // #a7e7ff -> [R, G, B] // 12942973
    Description: "**คุณได้ทำการยืนยันเป็นที่เรียบร้อย รอทาง**"
  },
  reply_admin: {
    title: " ", // ชื่อหัวข้อ
    iconURL: " ", // รูปไอคอน
  }
};
 ```
 
 
 + อัพเดทเก็บข้อมูล และ การรันใหม่ จะไมส่งข้อมูลซ้ำที่เดิมแก้ไข ERROR
 ผู้แก้ไขข้อมูล **FUJIPP**
