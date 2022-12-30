const fs = require('fs')

// report owner
global.report = {
        err: '*REPORT ERROR FOTUR*',
}

// Nomor Owner
global.ownerNumber = ["6285654001274@s.whatsapp.net"]
global.owner = ["6285654001274"]
global.ownerName = ["XgtibXcyb"]

global.gamewaktu = '60'
global.limitCount = '50'

global.gcount = {
	prem: '35',
	user: '15'
}

// Setting Bot
global.botName = 'GxoBot-Md'
global.sessionName = 'gxobot'


// EXIF
global.packname = 'GxoProject (beta)'
global.author = 'XgtibXcyb️'

//List Menu
global.listmenu = { 
    user_data : ["ceklimit","buylimit","topbalance"],
    group : ["group","setpp","revoke","tagall","leave","absenstart","absen","cekabsen","delabsen"],
    owner : ["mode"],
    media : ["sticker","swm","smeme","toimg"],
    random : ["alay","namaninja","ai (beta)"],
    fun : ["suit","calculator"],
    stalker: ["lirik","ytstalk","githubstalk"],
    searching : ["pinterest"],
    download : ["ytmp4","ytmp3","tiktok","zippyshare"],
    anime : ["kusonime", "otakudesu","whatanime"],
    generator : ["tourl", "tourl2", "qrgenerator","qrreader"],
    game : ["tebakgambar", "akinator"]
}

// OTHERS
global.Mode = 'Public'
global.mess = {
    admin: 'Fitur Admin dek',
    botAdmin: 'Adminin Gw dulu Tod',
    owner: 'Fitur Owner Chuy😱',
    group: 'Fitur Grup Tod🤑',
    private: 'Fitur Pc Dek🗿',
    query: 'Command harus disertai Query..',
    link: 'Command harus disertai Link/Url',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」Loading...```',
    done: 'Berhasil..',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..'
}



// Path Img/Media
global.pathImg = fs.readFileSync('./media/gxo.jpg')
global.fakeImg = fs.readFileSync('./media/gxo.jpg')
global.wem = fs.readFileSync('./credits.txt');
global.fpoll = {
            key: {
            participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast'
            },
              message: {
              pollCreationMessage: {
              name: "YouTube FebZabotz" ,
            }
          }
        }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})