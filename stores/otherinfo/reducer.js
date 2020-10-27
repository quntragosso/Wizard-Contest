const otherInfo = {
    text: "",
    turnPlayerText: "",
    turnendText: "",
    logs: []
};

function otherInfoReducer(state = {}, action, gameStatus = {}) {
    switch (action.type) {
        case "TEXTUPDATE":
            return {
                text: action.text,
                turnPlayerText: state.turnPlayerText,
                turnendText: state.turnendText,
                logs: state.logs
            };
        case "FIRSTPLAYERSET":
            return {
                text: state.text,
                turnPlayerText: action.name + "のターン",
                turnendText: action.text,
                logs: state.logs
            }
        case "TURNPASSED":
            return {
                text: state.text,
                turnPlayerText: gameStatus.enemyName + "のターン",
                turnendText: "",
                logs: state.logs
            };
        case "TURNRECEIVED":
            return {
                text: state.text,
                turnPlayerText: gameStatus.yourName + "のターン",
                turnendText: "ターンを終了する",
                logs: state.logs
            };
        case "LOGUPDATE":
            return {
                text: state.text,
                turnPlayerText: state.turnPlayerText,
                turnendText: state.turnendText,
                logs: [...state.logs, action.pushLog]
            };
        case "YOUWIN":
            return {
                text: state.text,
                turnPlayerText: state.turnPlayerText,
                turnendText: "あなたの勝ち！",
                logs: [...state.logs, "あなたの勝ち！"]
            };
        case "YOULOSE":
            return {
                text: state.text,
                turnPlayerText: state.turnPlayerText,
                turnendText: "対戦相手の勝ち…",
                logs: [...state.logs, "対戦相手の勝ち…"]
            };
        case "GAMEDESTROY":
            return {
                text: "",
                turnPlayerText: "",
                turnendText: "",
                logs: []
            }
        default:
            return state;
    }
}

export default otherInfoReducer;
