const chalk = require('chalk')
const fs = require('fs')
global.author = `Bot Multi Device\nDi buat oleh Lansmodz` //ini untuk wm stiker ya kawan
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
