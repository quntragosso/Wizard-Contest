const userStatus = {
    userID: "",
    userName: "",
    winNum: "",
    loseNum: ""
}

function userStatusReducer(state = {}, action) {
    switch (action.type) {
        case "USERSET":
            return {
                userID: action.id,
                userName: action.name,
                winNum: action.win,
                loseNum: action.lose
            }
        case "GAMEDESTROY":
            return {
                userID: state.userID,
                userName: state.userName,
                winNum: action.win,
                loseNum: action.lose
            }
        default:
            return state;
    }
}

export default userStatusReducer;