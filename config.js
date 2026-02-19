global.ownernomer = "201032935369"
global.dev = ["201128230143","201024192903"]
global.ownername = "ENDTEAM"
global.ytname = "◥꧁𝓑𝓾𝓶𝓫𝓵𝓮𝓫𝓮𝓮⃝𝓮⃕亗"
global.socialm = "GitHub: ITSNEXO_FF"
global.location = "Egypt, Beheira, Badr"

global.ownernumber = '201024192903'  //creator number
global.ownername = 'ENDTEAM' //owner name
global.botname = '◥꧁𝙏𝙃𝙀 𝙀𝙉𝘿亗' //name of the bot

//sticker details
global.packname = '\n\n\n\n\n\n\nSticker By'
global.author = 'ENDTEAM ⚉\n\nContact: 201024192903'

//console view/theme
global.themeemoji = '🪀'
global.wm = "ENDTEAM."

//theme link
global.link = 'https://whatsapp.com/channel/0029VbC4G50LikgHH6B5pT3g'
global.idch = '120363423479041906@newsletter'

global.baileysDB = 'baileysDB.json'
global.botDb = 'database.json'

//prefix
global.prefa = ['','!','.',',','🐤','🗿'] 

global.limitawal = {
    premium: "Infinity",
    free: 20
}

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'v1'

// Global Respon
global.mess = {
    success: 'Done✓',
    admin: `\`[ # ]\` This Command Can Only Be Used By Group Admins !`,
    botAdmin: `\`[ # ]\` This Command Can Only Be Used When Bot Becomes Group Admin !`,
    OnlyOwner: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nTelegram: @ITSNEXO_FF\nWhatsApp: +201024192903`,
    OnlyGrup: `\`[ # ]\` This Command Can Only Be Used In Group Chat !`,
    private: `\`[ # ]\` This Command Can Only Be Used In Private Chat !`,
    wait: `\`[ # ]\` Wait Wait a minute`,
    notregist: `\`[ # ]\` You are not registered in the Bot Database. Please register first.`,
    premium: `\`[ # ]\` This Command Can Only Be Used By Premium User ! \n\nWant Premium? Chat Developer.\nYouTube: @ITSNEXO_FF\nTelegram: @ITSNEXO_FF\nWhatsApp: +201024192903`,
}

module.exports = {

    banner: [

        "201128230143@s.whatsapp.net",

        "201024192903@s.whatsapp.net"

    ]

};

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})