const axios = require('axios');

async function cricket(url) {
    try {
        const scoredata = (await axios.get(`https://cricket-mskian-whatsbot.vercel.app/cri.php?url=${url}`)).data
        if (scoredata.success) {
            return {
                status: true,
                msg: `~𝕽𝖆𝖓𝖌𝖊𝕽~\n\n🏏 *${scoredata.livescore.title}*\n\n *${scoredata.livescore.update}*\n\n_____________________________\n_*ŦØŦȺŁ*_ : *${scoredata.livescore.current}*\n\n\n_____________________________\n\n✯ *BÀTSMÀN DÈTÀÌLS (strickers end)*\n\» *𝙱𝙰𝚃𝚂𝙼𝙰𝙽* : ${scoredata.livescore.batsman}\n        -𝚁𝚞𝚗𝚜  : ${scoredata.livescore.batsmanrun}\n        -𝙵𝚘𝚞𝚛𝚜 : ${scoredata.livescore.fours}\n        -𝚂𝚒𝚡𝚎𝚜 : ${scoredata.livescore.sixes}\n\n*𝙿𝙰𝚁𝚃𝙽𝙴𝚁𝚂𝙷𝙸𝙿* : ${scoredata.livescore.partnership}\n*𝚁𝙴𝙲𝙴𝙽𝚃* : ${scoredata.livescore.recentballs}\n\n*𝙻𝙰𝚂𝚃 𝚆𝙸𝙲𝙺𝙴𝚃* : ${scoredata.livescore.lastwicket}\n\n*𝚁𝚄𝙽 𝚁𝙰𝚃𝙴* : ${scoredata.livescore.runrate}\n\n_____________________________\n\n✯ *BÓWLÈR DÈTÀÌLS*\n\n*𝙱𝙾𝚆𝙻𝙴𝚁* : ${scoredata.livescore.bowler}\n        -𝙾𝚟𝚎𝚛𝚜 : ${scoredata.livescore.bowlerover}\n        -𝚁𝚞𝚗𝚜 𝚐𝚒𝚟𝚎: ${scoredata.livescore.bowlerruns}\n        -𝚆𝚒𝚌𝚔𝚎𝚝𝚜 : ${scoredata.livescore.bowlerwickets}
                    
                    
               ☢ℂℝ𝕀ℂ ℤ𝕆ℕ𝔼☢ `,
            }
        } else {
            throw ''
        }
    } catch (err) {
        return {
            status: false,
            msg: "That's an error."
        }
    }
}

module.exports = cricket
