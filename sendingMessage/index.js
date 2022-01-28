require("./../configs");
const {
	prepareWAMessageMedia,
	generateWAMessageFromContent,
	proto
} = require("@adiwajshing/baileys-md");
const fs = require("fs");
const {
	templateContentText,
	templateFooterText
} = require("./../helpers");
const {
	getBuffer
} = require("./../functions");

exports.sendButtonsMenu = async (from, xcoders, prefix, senderName, thumbnail, says, quotedObj) => {
	const prepareMessage = await prepareWAMessageMedia({ image: thumbnail }, { upload: xcoders.waUploadToServer });
	const templateMessage = await generateWAMessageFromContent(from, proto.Message.fromObject({
		templateMessage: {
			hydratedTemplate: {
				imageMessage: prepareMessage.imageMessage,
				hydratedContentText: templateContentText(senderName, says),
				hydratedFooterText: templateFooterText(),
				hydratedButtons: [{
					urlButton: {
						displayText: "Web Chat",
						url: "http://mican-webapi.herokuapp.com/"
					}
				}, {
					callButton: {
						displayText: "Contact",
						phoneNumber: "+62 815-1595-8390"
					}
				}, {
					quickReplyButton: {
						displayText: "𝗖𝗼𝗺𝗺𝗮𝗻𝗱",
						id: `${prefix}allmenu`
					}
				}, {
					quickReplyButton: {
						displayText: "𝗧𝗲𝗿𝗺𝘀 𝗢𝗳 𝗦𝗲𝗿𝘃𝗶𝗰𝗲",
						id: `${prefix}statistic`
					}
				}]
			}
		}
	}), { userJid: from });
	return await xcoders.relayMessage(from, templateMessage.message, { messageId: templateMessage.key.id, quoted: quotedObj });
};

exports.buttonsDownload = this.buttonsDownload = async (from, xcoders, video, audio, thumbnail , caption, x, senderNumber) => {
	button = [{ buttonId: `#audio`, buttonText: { displayText: `🎵 Audio` }, type: 1 }, { buttonId: `#video`, buttonText: { displayText: `🎥 Video` }, type: 1 }];
	return await xcoders.sendMessage(from, { location: { jpegThumbnail: await thumbnail }, caption: caption, buttons: button, footer: "Pilih Salah Satu untuk mendownload", mentions: [senderNumber] }).catch(e => { xcoders.sendMessage(from, {text: global.responseEN.error.request}, {quoted: x}) });
};

exports.butoncok = this.buttoncok = async (from, xcoders, caption, x) => {
	button = [{ buttonId: `#`, buttonText: { displayText: `cokcok` }, type: 1 }, { buttonId: `#`, buttonText: { displayText: `tescok` }, type: 1 }];
	return await xcoders.sendMessage(from, { caption: caption, buttons: button, footer: "Pilih Salah Satu " });
};

exports.sendImage = async (from, xcoders, url, caption = global.responseEN.success, x) => {
	return await xcoders.sendMessage(from, { image: { url: url }, caption: caption }, { quoted: x }).catch(e => { xcoders.sendMessage(from, {text: global.responseEN.error.request}, {quoted: x}) });
};

exports.sendAudio = async (from, xcoders, url, filename, x) => {
	return xcoders.sendMessage(from, { document: { url: url }, fileName: filename, mimetype: 'audio/mp3' }, { quoted: x}).catch(e => { xcoders.sendMessage(from, {text: global.responseEN.error.request}, {quoted: x}) });
};

exports.sendVideo = async (from, xcoders, url, caption, x) => {
	return await xcoders.sendMessage(from, { video: { url: url }, caption: caption }, { quoted: x }).catch(e => { xcoders.sendMessage(from, {text: global.responseEN.error.request}, {quoted: x}) });
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update ${__filename}`);
	delete require.cache[file];
	require(file);
});