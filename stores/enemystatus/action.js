export function enemyInfoUpdate(gameId, target) {
    const URL = './php/update/info_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/info_update.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, whoseInfo: target }))
        .then((results) => {
            return {
                type: "YOURINFOUPDATE",
                enemyDeckNum: results.data.deck,
                enemyTrashNum: results.data.trash,
                enemyVicPnt: results.data.point,
                enemyMana: results.data.mana,
                enemyGold: results.data.gold,
            };
        })
        .catch((error) => {
        })
}

export function enemyHandUpdate(gameId, target) {
    const URL = './php/update/hand_update.php';
    const localURL = 'http://localhost/wizard-contest3/php/update/hand_update.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, whoseHand: target }))
        .then((results) => {
            return {
                type: "ENEMYHANDUPDATE",
                enemyHand: results.data
            };
        })
        .catch((error) => {
        })
}

export function enemyArchiUpdate(gameId, target) {
    const URL = './php/update/archi_update.php';
    const localURL = 'http://localhost/wizard-contes3/php/update/archi_update.php';
    axios
        .post(URL, require('querystring').stringify({ gameId: gameId, whoseHand: target }))
        .then((results) => {
            return {
                type: "ENEMYARCHIUPDATE",
                enemyArchi: results.data
            };
        })
        .catch((error) => {
        })
}