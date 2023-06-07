const chalk = require('chalk')
const fs = require('fs')


// edit thumb ada di file string/ppbot.js

global.owner = ['6283132749084'] // pakai nomor owner
global.ownernomer = "6283132749084" // pakai nomor owner
global.socialmedia = "IG: lans.xys" // ini ig buat di ownerjy
global.yutub = "YT: lansdev"// sama
global.lokasi = "Indonesia, Banten, Tanggerang"//

global.packgename = "by" 
global.author = "LansModz" 

global.title = 'SakuraMD'//Tittle reply 
global.body = 'Bot By Lansmodz' //body reply

global.welcome = false 
global.left = false


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Telah di update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
