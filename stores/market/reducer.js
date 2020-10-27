const market = {
    marketTopArr: [{ id: 1, name: "銅貨" }, { id: 2, name: "銀貨" }, { id: 3, name: "金貨" }],
    marketBottomArr: [{ id: 4, name: "小さな魔石" }, { id: 5, name: "魔石" }, { id: 6, name: "大魔石" }]
}

function marketReducer(state = {}, action) {
    switch (action.type) {
        case "MARKETCREATE":
            return {
                marketTopArr: action.marketTop,
                marketBottomArr: action.marketBottom
            };
        case "GAMEDESTROY":
            return {
                marketTopArr: [{ id: 1, name: "銅貨" }, { id: 2, name: "銀貨" }, { id: 3, name: "金貨" }],
                marketBottomArr: [{ id: 4, name: "小さな魔石" }, { id: 5, name: "魔石" }, { id: 6, name: "大魔石" }]
            }
        default:
            return state;
    }
}

export default marketReducer;