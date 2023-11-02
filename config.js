const { ButtonStyle } = require('discord.js')
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
    button_emoji: "📘", // อิโมจิเท่านั้น สามารถใช้อิโมจิพิเศษได้ ตัวอย่าง `<a:784488608782483477:853402922037280780>`
    button_style: ButtonStyle.Danger, //จำเป็นต้องมี ButtonStyle อยุ่ข้างหน้าเสมอ มีทั้งหมด 4สี ได้แก่ Primary สีน้ำเงิน , Secondary = เทา , Success = เขียว ,Danger =แดง 
    title: "กรอกข้อมูลเพื่อรับ WHITELIST", // ชื่อหัวข้อ
    iconURL: "https://cdn.discordapp.com/attachments/1152852129300631612/1155927188667900034/LOGO_OceanTown_OK-01.png?ex=65526495&is=653fef95&hm=3e08a5247568dd03c538e7995960656813c07b0605ec775c5b6c6f0e1a9cc7d4&", // รูปไอคอน
    Description: "**Ocean Town \n\n กรุณากรอกข้อมูลให้ครบ \n [มิเช่นนั้น] ทางเราจะไม่รับเรื่องดังที่สมัครเข้ามา**", // คำอธิบาย
    colors: "#03a9f4", // #a7e7ff -> [R, G, B] // 12942973
    image: "https://cdn.discordapp.com/attachments/1152852129300631612/1155927245051932832/Ads_LOGO_OceanTown.png?ex=655264a3&is=653fefa3&hm=4b5b9449251324c0f272dd31706e5a702e432e89a78d18bb251c3c4a0b17ee9a&", // รูปหลัก
  },
  //ชื่อของหัวข้อหลังกดปุ่ม
  modals: {
    title: "กรอกข้อมูลรับ WHITELIST"
  },
  //setting หลังกรอกข้อมูลเสร็จ
  reply_submit: {
    title: "กรุณารอทาง Admin ตรวจสอบ", // ชื่อหัวข้อ
    iconURL: "https://cdn.discordapp.com/attachments/1152852129300631612/1155927188667900034/LOGO_OceanTown_OK-01.png?ex=65526495&is=653fef95&hm=3e08a5247568dd03c538e7995960656813c07b0605ec775c5b6c6f0e1a9cc7d4&", // รูปไอคอน
    colors: "#03a9f4", // #a7e7ff -> [R, G, B] // 12942973
    Description: "**คุณได้ทำการยืนยันเป็นที่เรียบร้อย รอทาง**"
  },
  reply_admin: {
    title: "สมาชิกที่ต้องการขอ WHITELIST", // ชื่อหัวข้อ
    iconURL: "https://cdn.discordapp.com/attachments/1152852129300631612/1155927188667900034/LOGO_OceanTown_OK-01.png?ex=65526495&is=653fef95&hm=3e08a5247568dd03c538e7995960656813c07b0605ec775c5b6c6f0e1a9cc7d4&", // รูปไอคอน
  }
};
