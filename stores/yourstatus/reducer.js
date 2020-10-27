const market = {
    yourHand: [],
    yourArchi: [],
    yourDeckNum: 0,
    yourTrashNum: 0,
    yourVicPnt: 0,
    yourMana: 0,
    yourGold: 0
}

function yourStatusReducer(state = {}, action) {
    switch (action.type) {
        case "YOURINFOUPDATE":
            return {
                yourHand: state.yourHand,
                yourArchi: state.yourArchi,
                yourDeckNum: action.yourDeckNum,
                yourTrashNum: action.yourTrashNum,
                yourVicPnt: action.yourVicPnt,
                yourMana: action.yourMana,
                yourGold: action.yourGold
            };
        case "YOURHANDUPDATE":
            return {
                yourHand: action.newHand,
                yourArchi: state.yourArchi,
                yourDeckNum: state.yourDeckNum,
                yourTrashNum: state.yourTrashNum,
                yourVicPnt: state.yourVicPnt,
                yourMana: state.yourMana,
                yourGold: state.yourGold
            }
        case "YOURARCHIUPDATE":
            return {
                yourHand: state.yourHand,
                yourArchi: action.newArchi,
                yourDeckNum: state.yourDeckNum,
                yourTrashNum: state.yourTrashNum,
                yourVicPnt: state.yourVicPnt,
                yourMana: state.yourMana,
                yourGold: state.yourGold
            }
        case "GAMEDESTROY":
            return {
                yourHand: [],
                yourArchi: [],
                yourDeckNum: 0,
                yourTrashNum: 0,
                yourVicPnt: 0,
                yourMana: 0,
                yourGold: 0
            }
        default:
            return state;
    }
}

export default yourStatusReducer;