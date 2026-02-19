const fs = require("fs");

const chalk = require("chalk")

global.BOT_TOKEN = "8536328454:AAFQguUuaIyBxHXucAoVGQbcp1tAxNe7Q9I" // create bot here https://t.me/Botfather and get bot token

global.BOT_NAME = "𝙏𝙃𝙀 𝙀𝙉𝘿亗" //your bot name

global.OWNER_NAME = "https://t.me/ROYALNEXO" //your name with sign @

global.OWNER = ["https://t.me/ROYALNEXO", "https://www.youtube.com/@ITSNEXO_FF"] // Make sure the username is correct so that the special owner features can be used.

global.DEVELOPER = ["6524907172","7965740966"] //developer telegram id to operate addprem delprem and listprem

global.ppp = 'https://j.top4top.io/m_3699rila20.mp4' //your bot pp

global.pp = 'https://i.postimg.cc/FzFPmsB0/NEXO.jpg'

//approval

global.GROUP_ID = -1002542691860; // Replace with your group ID

global.CHANNEL_ID =  -1003819490065; // Replace with your channel ID

global.GROUP_LINK = "https://t.me/ROYALNEXO_B"; // Replace with your group link

global.CHANNEL_INVITE_LINK = "https://t.me/ROYALNEXO"; // Replace with your private channel invite link

global.WHATSAPP_LINK = "https://whatsapp.com/channel/0029VbC4G50LikgHH6B5pT3g"; // Replace with your group link

global.YOUTUBE_LINK = "https://www.youtube.com/@IITS-NEXO"; // Replace with your youtube link

global.INSTAGRAM_LINK = "https://www.instagram.com/amr_h_salman?igsh=MXdnem93Z3ZsZ2t6NA=="; // Replace with your ig link

global.owner = global.owner = ['201024192903','201128230143'] //owner whatsapp

const {

   english

} = require("./lib");

global.language = english

global.lang = language

let file = require.resolve(__filename)

fs.watchFile(file, () => {

fs.unwatchFile(file)

console.log(chalk.redBright(`Update ${__filename}`))

delete require.cache[file]

require(file)

})