const turnSwitch = {
    buySwitch: false,
    actionSwitch: "donot",
    enemyTurn: false
}

function turnSwitchReducer(state = {}, action) {
    switch (action.type) {
        case "BUYPLAYED":
            return {
                buySwitch: true,
                actionSwitch: state.actionSwitch,
                enemyTurn: state.enemyTurn
            };
        case "ACTIONPLAYED":
            return {
                buySwitch: state.buySwitch,
                actionSwitch: "played",
                enemyTurn: state.enemyTurn
            };
        case "TURNPASSED":
            return {
                buySwitch: state.buySwitch,
                actionSwitch: state.actionSwitch,
                enemyTurn: true
            };
        case "TURNRECEIVED":
            return {
                buySwitch: false,
                actionSwitch: "donot",
                enemyTurn: false
            }
        case "GAMEDESTROY":
            return {
                buySwitch: false,
                actionSwitch: "donot",
                enemyTurn: false
            }
        default:
            return state;
    }
}

export default turnSwitchReducer;