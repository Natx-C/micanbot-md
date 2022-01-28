
const recomended = ['Fitur populer di bot micanss tahun 2020 #play *[Judul]* misal denny caknan tak pernah cukup','Wow fitur yang sering digunakan yaitu sticker, jika anda mau mencoba silahkan ketik #sticker reply gambarnya','Fitur micanss yang tidak pernah digunakan, cobain dong yang TEXTPRO ME, ntar gulung tikar depelopernya','enaknya gini gini dirumah sambil nonton youtube tapi kuota mau habis, tenang sekarang bot micanss menyediakan download video dari youtube, silahkan ketik #ytmp4','Fitur mengubah sticker jadi gambar, yok coba sekarang, ketik #toimg lalu reply sticker yang dikirimkan di bot micanss']
let rekomendasi = recomended[Math.floor(Math.random() * recomended.length)]
const hloohe = "Timdak ada"
exports.help = this.help = (prefix) => {
	return `
*DOWNLOADER MENU*
 - ${prefix}play *Query*
 - ${prefix}play4 *Query* < maintenance
 - ${prefix}ytmp4 *Url Youtube*
 - ${prefix}ytmp3 *Url Youtube*
 - ${prefix}tiktok *Url Tiktok* < maintenance

*TRANSLATOR MENU*
 - ${prefix}codemorse
 - ${prefix}tslate < maintenance

*STALKER MENU*
 - ${prefix}igstalk

*GAME MENU*
 - ${prefix}caklontong < maintenance
 - ${prefix}tebakgambar
 - ${prefix}tod *[Truth or Dare]*

*CONVERTER MENU*
 - ${prefix}tomp3 < maintenance
 - ${prefix}toimg
 - ${prefix}sticker

*SEARCH MENU*
 - ${prefix}lirik *[Judul lagu]*
 - ${prefix}wiki *[Pencarian]*
 - ${prefix}google < maintennace
 - ${prefix}cariteman < maintennace
 
*IMAGE MENU*
 - ${prefix}pin
 - ${prefix}tourl reply/gambar

*TEXTPRO ME*
 - ${prefix}blackpink *[Title]*
 - ${prefix}glitch *[Title]|[Subtitle]*
 - ${prefix}silvermetal *[Title]*
 - ${prefix}matrix *[Title]*

*GROUPS ONLY*
 - ${prefix}hidetag
 - ${prefix}tagall
 - ${prefix}listadmin

*OWNERS ONLY*
 - >
 - $
 - ${prefix}setprefix
 - ${prefix}restart
 - ${prefix}language
 - ${prefix}setexif

${rekomendasi}`;
};
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`
}
exports.stats = this.stats = (os, speed, perf, performance, runtime) => {
	const used = process.memoryUsage();
	const cpus = os.cpus().map(cpu => { cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0); return cpu });
	const cpu = cpus.reduce((last, cpu, _, { length }) => {
		last.total += cpu.total;
		last.speed += cpu.speed / length;
		last.times.user += cpu.times.user;
		last.times.nice += cpu.times.nice;
		last.times.sys += cpu.times.sys;
		last.times.idle += cpu.times.idle;
		last.times.irq += cpu.times.irq;
		return last;
	}, { speed: 0, total: 0, times: { user: 0, nice: 0, sys: 0, idle: 0, irq: 0 } });
	let timestamp = speed();
	let latensi = speed() - timestamp;
	let perf_now = perf.now();
	return `𝗧𝗲𝗿𝗺𝘀 𝗢𝗳 𝗦𝗲𝗿𝘃𝗶𝗰𝗲

*Peraturan*
- Bot tidak akan bertanggung jawab jika pengguna melakukan ini misal "spam tagall" member akan tidak nyaman
- Dilarang memberikan akun atau data pribadi anda kepada Bot MICANSS untuk keamanan dan privasi anda
- Saran kami jangan dagang atau promosi lalu share ke bot ini
- No PORNOGRAFI & KEKERASAN (BOT DI GUNAKAN ORANG UMUM SIAPA SAJA DAPAT MELIHAT AKTIFITAS BOT)

 Cover bot: Viko dwi kurniawan
   Thanks to:
 - Rashid siregar
 - Ikhya
 - Galung
 - FXC7
 - Adiwajshing
 - ArugaZ
 
 *Donate:*
 DANA: 085730265648
`
};

exports.templateContentText = this.templateContentText = (senderName, says) => {
	return `*Hai ${senderName + ' ' + says} 💫*\nada yang bisa saya bantu? ketik #allmenu atau klik tombol command`;
};
exports.templateFooterText = this.templateFooterText = () => {
	return `𝗥𝗲𝗰𝗼𝗺𝗲𝗻𝗱𝗲𝗱\n${rekomendasi}\n\n𝗕𝗼𝗮𝗿𝗱𝗰𝗮𝘀𝘁: ${hloohe}`;
};

const fs = require("fs");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update ${__filename}`);
	delete require.cache[file];
	require(file);
});