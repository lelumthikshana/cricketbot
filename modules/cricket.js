const axios = require('axios');

async function cricket(url) {
    try {
        const scoredata = (await axios.get(`https://cricket-mskian-whatsbot.vercel.app/cri.php?url=${url}`)).data
        if (scoredata.success) {
            return {
                status: true,
                msg: `🆁🅰🅽🅶🅴🆁 update\n\n🏏 *${scoredata.livescore.title}*\n\n${scoredata.livescore.update}\n\n_____________________________\n\n_*ŦØŦȺŁ*_ : *${scoredata.livescore.current}*\n\n_____________________________\n\n✯ *BÀTSMÀN DÈTÀÌLS (strickers end)*\n\n» *BATSMAN* : ${scoredata.livescore.batsman}\n        -Rᴜɴs  : ${scoredata.livescore.batsmanrun}\n        -Fᴏᴜʀs : ${scoredata.livescore.fours}\n        -Sɪxᴇs : ${scoredata.livescore.sixes}\n\n» *PARTNERSHIP* : ${scoredata.livescore.partnership}\n\n» *RECENT* : ${scoredata.livescore.recentballs}\n\n» *LAST WICKET* : ${scoredata.livescore.lastwicket}\n\n» *RUN RATE* : ${scoredata.livescore.runrate}\n\n_____________________________\n\n✯ *BÓWLÈR DÈTÀÌLS*\n\n» *BOWLER* : ${scoredata.livescore.bowler}\n        -Oᴠᴇʀs : ${scoredata.livescore.bowlerover}\n        -Rᴜɴs ɢɪᴠᴇɴ : ${scoredata.livescore.bowlerruns}\n        -Wɪᴄᴋᴇᴛs : ${scoredata.livescore.bowlerwickets}
                    
                    
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
