let box = document.getElementsByClassName('box');
let button = document.getElementsByClassName('button');
let t = document.getElementsByClassName('turn');
let s = document.getElementsByClassName('score');
let head = document.getElementById("head");
let value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let turn = 'X';
let w = false;

s1 = 0
s2 = 0
let count = 0;

s[0].innerHTML = `${s1}`
s[1].innerHTML = `${s2}`

//Checking Draw
let draw = () => {
    if (count == 9 && w==false) {
        s1 += 1
        s2 += 1
        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        t[0].style.background = `green`
        t[1].style.background = `green`

        setTimeout(() => {
                t[0].style.removeProperty('background')
                t[1].style.removeProperty('background')
        }, 4000);
    }
}

//Adding event listner to different cells
let start = () => {
    for (let i = 0; i < 9; i++) {
        box[i].addEventListener('click', () => {
            if (value[i] == 0 && w == false) {
                value[i] = turn;
                box[i].innerHTML = `${turn}`;
                count += 1
                win();
                draw();
                if (turn == 'X') {
                    turn = 'O'
                } else if (turn == 'O') {
                    turn = 'X'
                }
            }
        })
    }
}


//Wining condition
let win = () => {
    if (value[0] == value[1] && value[1] == value[2] && value[1] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`

        return 0;

    }

    if (value[3] == value[4] && value[4] == value[5] && value[4] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        return 0;

    }

    if (value[6] == value[7] && value[7] == value[8] && value[7] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        return 0;

    }

    if (value[0] == value[3] && value[3] == value[6] && value[3] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        return 0;

    }

    if (value[0] == value[4] && value[4] == value[8] && value[4] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        return 0;

    }

    if (value[4] == value[1] && value[4] == value[7] && value[4] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        return 0;

    }

    if (value[8] == value[5] && value[5] == value[2] && value[5] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        return 0;

    }

    if (value[6] == value[4] && value[4] == value[2] && value[4] != 0) {
        w = true;
        if (turn == 'X') {
            t[0].style.background = `green`
            s1 += 1
        } else {
            s2 += 1
            t[1].style.background = 'green'
        }

        setTimeout(() => {
            if (turn == 'O') {
                t[0].style.removeProperty('background')
            } else {
                t[1].style.removeProperty('background')
            }
        }, 4000);

        s[0].innerHTML = `${s1}`
        s[1].innerHTML = `${s2}`
        return 0;

    }
}

//restart button
let restart = () => {
    button[1].addEventListener('click', () => {
        value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        turn = 'X';
        w = false;
        count=0
        s1 = 0
        s2 = 0
        s[0].innerHTML = `${s1}`;
        s[1].innerHTML = `${s2}`;
        for (const i in box) {
            box[i].innerHTML = '';
        }
        start()
    })
}

let cont = () => {
    button[0].addEventListener('click', () => {
        value = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        turn = 'X';
        count=0
        w = false;
        s[0].innerHTML = `${s1}`;
        s[1].innerHTML = `${s2}`;
        for (const i in box) {
            box[i].innerHTML = '';
        }
        start()
    })
}

start()
restart()
cont()