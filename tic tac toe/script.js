
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third")
let fourth = document.querySelector(".fourth")
let fifth = document.querySelector(".fifth")
let sixth = document.querySelector(".sixth")
let seventh = document.querySelector(".seventh")
let eighth = document.querySelector(".eighth")
let ninth = document.querySelector(".ninth")

//a 2d array for numbers (mapNumbers)
let row1N = [], row2N = [], row3N = [];
row1N.length = 3;
row2N.length = 3;
row3N.length = 3;
let mapNumbers = [];
mapNumbers.length = 3;
mapNumbers[0] = row1N;
mapNumbers[1] = row2N;
mapNumbers[2] = row3N;


let table = document.querySelector(".table");
let question = document.querySelector(".question");
let yes = document.querySelector(".yes");
let no = document.querySelector(".no");
let yourTurn;
let finish = document.querySelector(".finish");
let finishStatus = document.querySelector(".finish p");
let again = document.querySelector(".again");
let exit = document.querySelector(".exit");

yes.addEventListener("click", function () {
    meghdarDehi();
    yourTurn = true;
    question.className += " hidden"
    setTimeout(function () {question.style.display = "none";}, 1000)
    table.style.display = "flex"
})
no.addEventListener("click", function () {
    meghdarDehi();
    SystemPlay();
    question.className += " hidden"
    setTimeout(function () {question.style.display = "none";}, 1000)
    table.style.display = "flex";
})
let isTie = true, x = false;
let completeElements = 0;

first.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(0, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
second.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(1, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
third.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(2, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
fourth.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(3, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
fifth.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(4, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
sixth.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(5, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
seventh.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(6, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
eighth.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(7, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})
ninth.addEventListener("click", function (ev) {
    if(yourTurn) {
        myTurn(8, ev.target);
        if(x)
            systemTurn();
    }else {
        systemTurn();
    }
})

again.addEventListener("click", function () {
    window.location.reload();
})
exit.addEventListener("click", function () {
    finish.className += " hidden";
    table.className += " hidden"
    setTimeout(function () {
        finish.style.display = "none";
        table.style.display = "none";
    }, 1000)
})

function check() {
    for (let l = 0; l < 3; l++) {
        if (mapNumbers[l][0] === mapNumbers[l][1] && mapNumbers[l][0] === mapNumbers[l][2]) {
            if (mapNumbers[l][0] !== 0) {
                if (mapNumbers[l][0] === 1) {
                    lost();
                    break;
                } else {
                    win();
                    break;
                }
            }
        }
    }
    for (let l = 0; l < 3; l++) {
        if (mapNumbers[0][l] === mapNumbers[1][l] && mapNumbers[0][l] === mapNumbers[2][l]) {
            if (mapNumbers[0][l] !== 0) {
                if (mapNumbers[0][l] === 1) {
                    lost();
                    break;
                } else {
                    win();
                    break;
                }
            }
        }
    }

    if (mapNumbers[0][0] === mapNumbers[1][1] && mapNumbers[0][0] === mapNumbers[2][2]) {
        if (mapNumbers[0][0] !== 0) {
            if (mapNumbers[0][0] === 1)
                lost();
            else
                win();
        }
    }

    if (mapNumbers[0][2] === mapNumbers[1][1] && mapNumbers[0][2] === mapNumbers[2][0]) {
        if (mapNumbers[0][2] !== 0) {
            if (mapNumbers[0][2] === 1)
                lost();
            else
                win();
        }
    }

    if (completeElements >= 9 && isTie)
        tie();
}


function meghdarDehi() {
    for (let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            mapNumbers[i][j] = 0;
}
function SystemPlay() {
    setTimeout(function () {
        while (completeElements < 9) {
            let rowIndex = Math.floor(Math.random() * 3);
            let columnIndex = Math.floor(Math.random() * 3);
            if (mapNumbers[rowIndex][columnIndex] === 0) {
                let img = document.createElement("img");
                img.src = "multiply.png";
                img.classList.add("newImg");
                let div = rowIndex * 3 + columnIndex;
                switch (div) {
                    case 0:
                        first.append(img);
                        break;
                    case 1:
                        second.append(img);
                        break;
                    case 2:
                        third.append(img);
                        break;
                    case 3:
                        fourth.append(img);
                        break;
                    case 4:
                        fifth.append(img);
                        break;
                    case 5:
                        sixth.append(img);
                        break;
                    case 6:
                        seventh.append(img);
                        break;
                    case 7:
                        eighth.append(img);
                        break;
                    case 8:
                        ninth.append(img);
                        break;
                }
                mapNumbers[rowIndex][columnIndex] = 1;
                completeElements++;
                yourTurn = true;
                check();
                break;
            }
        }
    }, 1000)
}
function myTurn(divNum, target) {
    if(completeElements < 9 && mapNumbers[Math.floor(divNum / 3)][divNum % 3] === 0) {
        let img = document.createElement("img");
        img.src = "circle.png";
        img.classList.add("newImg");
        target.append(img);
        mapNumbers[Math.floor(divNum / 3)][divNum % 3] = 2;
        completeElements++;
        yourTurn = false;
        x = true;
        check();
    }else {
        x = false
        switch (divNum) {
            case 0:
                first.firstChild.className += " Error";
                setTimeout(function () {
                    first.firstChild.classList.remove("Error");
                    first.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 1:
                second.firstChild.className += " Error";
                setTimeout(function () {
                    second.firstChild.classList.remove("Error");
                    second.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 2:
                third.firstChild.className += " Error";
                setTimeout(function () {
                    third.firstChild.classList.remove("Error");
                    third.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 3:
                fourth.firstChild.className += " Error";
                setTimeout(function () {
                    fourth.firstChild.classList.remove("Error");
                    fourth.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 4:
                fifth.firstChild.className += " Error";
                setTimeout(function () {
                    fifth.firstChild.classList.remove("Error");
                    fifth.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 5:
                sixth.firstChild.className += " Error";
                setTimeout(function () {
                    sixth.firstChild.classList.remove("Error");
                    sixth.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 6:
                seventh.firstChild.className += " Error";
                setTimeout(function () {
                    seventh.firstChild.classList.remove("Error");
                    seventh.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 7:
                eighth.firstChild.className += " Error";
                setTimeout(function () {
                    eighth.firstChild.classList.remove("Error");
                    eighth.firstChild.classList.remove("newImg");
                }, 1000)
                break;
            case 8:
                ninth.firstChild.className += " Error";
                setTimeout(function () {
                    ninth.firstChild.classList.remove("Error");
                    ninth.firstChild.classList.remove("newImg");
                }, 1000)
                break;
        }

    }
}
function systemTurn() {
    SystemPlay();
}


function win() {
    finish.style.display = "flex";
    finishStatus.innerHTML = "You Win"
    finish.style.backgroundColor = "limegreen";
    isTie = false;
    completeElements = 9;
}
function lost() {
    finish.style.display = "flex";
    finishStatus.innerHTML = "You Lost"
    finish.style.backgroundColor = "red";
    isTie = false;
    completeElements = 9;
}
function tie() {
    finish.style.display = "flex";
    finishStatus.innerHTML = "Tie"
    finish.style.backgroundColor = "yellow";
    completeElements = 9;
}