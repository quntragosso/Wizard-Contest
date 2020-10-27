const gameStatus = {
    yourName: "",
    you: "",
    enemyName: "",
    enemy: "",
    gameID: "",
    nowTurnPlayer: ""
}

function gameStatusReducer(state = {}, action) {
    // console.log(action);
    switch (action.type) {
        case "USERSET":
            return {
                yourName: action.name,
                you: state.you,
                enemyName: state.enemyName,
                enemy: state.enemy,
                gameID: state.gameId,
                nowTurnPlayer: state.nowTurnPlayer
            }
        case "YOUAREHOST":
            return {
                yourName: state.yourName,
                you: "host",
                enemyName: state.enemyName,
                enemy: "guest",
                gameID: action.gameId,
                nowTurnPlayer: action.nowTurnPlayer
            };
        case "YOUAREGUEST":
            return {
                yourName: state.yourName,
                you: "guest",
                enemyName: state.enemyName,
                enemy: "host",
                gameID: action.gameId,
                nowTurnPlayer: action.nowTurnPlayer
            };
        case "HOSTUPDATE":
            return {
                yourName: state.yourName,
                you: state.you,
                enemyName: action.hostname,
                enemy: state.enemy,
                gameID: state.gameID,
                nowTurnPlayer: state.nowTurnPlayer
            };
        case "GUESTUPDATE":
            return {
                yourName: state.yourName,
                you: state.you,
                enemyName: action.guestname,
                enemy: state.enemy,
                gameID: state.gameID,
                nowTurnPlayer: state.nowTurnPlayer
            };
        case "TURNPASSED":
            return {
                yourName: state.yourName,
                you: state.you,
                enemyName: state.enemyName,
                enemy: state.enemy,
                gameID: state.gameID,
                nowTurnPlayer: state.enemy
            };
        case "TURNRECEIVED":
            return {
                yourName: state.yourName,
                you: state.you,
                enemyName: state.enemyName,
                enemy: state.enemy,
                gameID: state.gameID,
                nowTurnPlayer: state.you
            }
        case "GAMEDESTROY":
            return {
                yourName: state.yourName,
                you: "",
                enemyName: "",
                enemy: "",
                gameID: "",
                nowTurnPlayer: ""
            }
        default:
            return state;
    }
}

export default gameStatusReducer;