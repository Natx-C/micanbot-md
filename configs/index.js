const fs = require("fs");

global.apikeys = "nmrZFVhu";
global.prefix = "#"
global.multiprefix = false;
global.nonprefix = false;
global.watermark = "viko";
global.packname = "Created By";
global.authorname = "Farhan & Viko";
global.language = true;
global.ownerNumber = ["6281515958390@s.whatsapp.net"];
global.thumbnail = fs.readFileSync("./images/thumbnail.jpg");
global.responseEN = {
  isCreators: "*only owner can access*",
  success: "*Success*",
  error: {
    request: "*Oops, Your request error '_'*",
    url: "*Invalid Input url*"
  },
  process: "```[⏳] Please wait```",
};
global.responseID = {
  isCreators: "*Hanya owner yang dapat mengakses*",
  success: "*Sukses*",
  error: {
    request: "*Ups, permintaan Anda error '_'*",
    url: "*URL Yang Anda Masukkan Tidak Valid*"
  },
  process: "```[⏳] Mohon Tunggu Permintaan Anda Diproses```",
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update ${__filename}`);
  delete require.cache[file];
  require(file);
});
