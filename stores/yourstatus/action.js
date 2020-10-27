export function yourInfoUpdate(gameId, target) {
    const URL = './php/update/info_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/info_update.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, whoseInfo: target }))
        .then((results) => {
            return {
                type: "YOURINFOUPDATE",
                yourDeckNum: results.data.deck,
                yourTrashNum: results.data.trash,
                yourVicPnt: results.data.point,
                yourMana: results.data.mana,
                yourGold: results.data.gold,
            };
        })
        .catch((error) => {
        })
}

export function yourHandUpdate(gameId, target) {
    const URL = './php/update/hand_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/hand_update.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, whoseHand: target }))
        .then((results) => {
            return {
                type: "YOURHANDUPDATE",
                yourHand: results.data
            };
        })
        .catch((error) => {
        })
}

export function yourArchiUpdate(gameId, target) {
    const URL = './php/update/archi_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/archi_update.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, whoseHand: target }))
        .then((results) => {
            return {
                type: "YOURARCHIUPDATE",
                yourArchi: results.data
            };
        })
        .catch((error) => {
        })
}