const chalk = require('chalk')
const fs = require('fs')
global.sukses = `Sukses\nJangan lupa Follow yha\nInstagram : @lans.xys\nGithub : Lans-ofc\n`
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
