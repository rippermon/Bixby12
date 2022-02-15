const Bixby = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Bixby.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://imgur.com/gallery/ldWY3Zm.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Bixby Mowl Created By Ziyan*
*Creator number : wa.me/919446072492?text=Hi%20ziyan%20bro.%20*

*Bot setting video : https://youtube.com/channel/UCGi-AvmiPaFczO44NkIkP9A*

*Githublink (Setup)  :    https://github.com/RIPPER-SER/_Bixby_Mowl_*

*Audio commads :   https://github.com/RIPPER-SER/_Bixby_Mowl_/tree/master/uploads*

*Sticker commads : https://github.com/RIPPER-SER/_Bixby_Mowl_/tree/master/Amalser*

*Join our support group : https://chat.whatsapp.com/DCMXCkQFxkAKIZPKb5MXnI* 

*For More Updates Subscribe The Channel ☝*
`}) 

}));
