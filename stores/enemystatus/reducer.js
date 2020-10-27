const market = {
    enemyHandNum: 0,
    enemyArchi: [],
    enemyDeckNum: 0,
    enemyTrashNum: 0,
    enemyVicPnt: 0,
    enemyMana: 0,
    enemyGold: 0
}

function enemyStatusReducer(state = {}, action) {
    switch (action.type) {
        case "ENEMYINFOUPDATE":
            return {
                enemyHandNum: state.enemyHandNum,
                enemyArchi: state.enemyArchi,
                enemyDeckNum: action.enemyDeckNum,
                enemyTrashNum: action.enemyTrashNum,
                enemyVicPnt: action.enemyVicPnt,
                enemyMana: action.enemyMana,
                enemyGold: action.enemyGold
            };
        case "ENEMYHANDUPDATE":
            return {
                enemyHandNum: action.newHand,
                enemyArchi: state.enemyArchi,
                enemyDeckNum: state.enemyDeckNum,
                enemyTrashNum: state.enemyTrashNum,
                enemyVicPnt: state.enemyVicPnt,
                enemyMana: state.enemyMana,
                enemyGold: state.enemyGold
            }
        case "ENEMYARCHIUPDATE":
            return {
                enemyHandNum: state.enemyHandNum,
                enemyArchi: action.newArchi,
                enemyDeckNum: state.enemyDeckNum,
                enemyTrashNum: state.enemyTrashNum,
                enemyVicPnt: state.enemyVicPnt,
                enemyMana: state.enemyMana,
                enemyGold: state.enemyGold
            }
        case "GAMEDESTROY":
            return {
                enemyHandNum: 0,
                enemyArchi: [],
                enemyDeckNum: 0,
                enemyTrashNum: 0,
                enemyVicPnt: 0,
                enemyMana: 0,
                enemyGold: 0
            }
        default:
            return state;
    }
}

export default enemyStatusReducer;