export default <style>{`
* {
    margin: 0;
    padding: 0;
}

.wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

#box_box {
    width: 100%;
    height: 100vh;
    display: flex;
    font-size: 14px;
}

#link_box {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

a {
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
    text-decoration: none;
    color: #000
}

a:hover {
    background-color: #ccc
}

#main_box {
    width: 80%;
    height: 100%;
    order: 2;
    display: flex;
    justify-content: start;
    align-items: center;
}

#left_area {
    width: 70%;
    height: 100%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#your_hand {
    width: 100%;
    height: 100px;
    order: 5;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

#your_field {
    width: 100%;
    height: 20%;
    order: 4;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#enemy_hand {
    width: 100%;
    height: 100px;
    order: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

#enemy_field {
    width: 100%;
    height: 20%;
    order: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#market {
    width: 100%;
    height: 40%;
    order: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#market_top {
    width: 100%;
    height: 100px;
    order: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

#market_bottom {
    width: 100%;
    height: 100px;
    order: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mains {
    box-sizing: border-box;
}

#right_area {
    width: 30%;
    height: 100%;
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

#your_info {
    width: 95%;
    height: 40%;
    order: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box
}

#enemy_info {
    width: 95%;
    height: 40%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box
}

#turnend_box, #leave_box {
    width: 95%;
    height: 10%;
    order: 2;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.decks {
    width: 100px;
    height: 120px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: bold;
}

#info {
    width: 100%;
    height: 35%;
    order: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}


#your_victory_point {
    background-color: magenta;
}

#your_mana {
    background-color: cyan
}

#your_gold {
    background-color: yellow
}

#enemy_victory_point {
    background-color: magenta
}

#enemy_mana {
    background-color: cyan
}

#enemy_gold {
    background-color: yellow
}

.info_text {
    width: 95%;
    height: 20px;
    font-size: 20px;
    font-weight: bold;
}

.cards {
    width: 60px;
    height: 80px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
}

.cards:hover {
    background-color: #ccc;
}

#sub_box {
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
}

#turn_box {
    width: 100%;
    height: 8%;
    order: 1;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3px;
}

#cardtext_box {
    width: 100%;
    height: 40%;
    order: 2;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    margin-bottom: 3px;
    white-space: pre-wrap;
}

#log_box {
    width: 100%;
    height: 50%;
    order: 3;
    padding: 10px;
    border-radius: 5px;
    border: solid 1px #000;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    white-space: pre-wrap;
    overflow: scroll;
}

#turnend_box:hover {
    background-color: #ccc;
}

.big_text {
    font-size: 16px;
    font-weight: bold;
}

.btn {
    cursor: pointer;
}

.btn: hover {
    background-color: #ccc;
}

.untouchable {
    cursor: not-allowed;
    pointer-events: none;
}

#imput_button:hover {
    background-color: #ccc;
}

`}</style>




