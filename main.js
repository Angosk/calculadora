const screenElm = document.getElementById('screen')
const keysElms = document.getElementsByClassName('keys')

function printNumber(num) {
    let aux = screenElm.innerText
    if (aux === '0') {
        screenElm.innerHTML = num
    } else {
        screenElm.innerHTML += num;
    }

}

function calculation() {
    let num = screenElm.innerText;
    if (num.includes('+')) {
        num = num.split('+');
        sum(num);
    }else if (num.includes('×')) {
        num = num.split('×');
        mul(num)
    }
    else if (num.includes('÷')) {
        num = num.split('÷');
        div(num)
    }
    else if (num.includes('%')) {
        num = num.split('%');
        per(num)
    }else if (num.includes('√')) {
        num = num.split('√');
        sr(num)
    }else if (num.includes('-')) {
        num = num.split('-');
        subs(num)
    }
    console.log(num)
}

function sum(num) {
    let res = 0;
    let aux;
    for (let i = 0; i < num.length; i++) {
        aux = Number.parseFloat(num[i]);
        res += aux
    }
    screenElm.innerHTML = res
}

function mul(num) {
    let res = 1;
    let aux;
    for (let i = 0; i < num.length; i++) {
        aux = Number.parseFloat(num[i]);
        res *= aux
    }
    screenElm.innerHTML = res
}

function div(num) {
    let res;
    let aux;
    for (let i = 0; i < num.length; i++) {
        if (i == 0) {
            res = Number.parseFloat(num[i]);
            continue;
        }
        aux = Number.parseFloat(num[i]);
        res = res / aux;
    }
    screenElm.innerHTML = res
}

function per(num) {
    let res = (num[1] * num[0]) / 100

    screenElm.innerHTML = res
}

function subs(num) {
    let res = 0;
    let aux;
    for (let i = 0; i < num.length; i++) {
        if (i == 0) {
            if (num[0] == "") {
                res = -0;
            } else {
                res = Number.parseFloat(num[i]);
                continue;
            }
        }
        aux = Number.parseFloat(num[i]);
        res = res - aux
    }
    console.log(res)
    screenElm.innerHTML = res
}

function sr(num) {
    let res = num;
    console.log('res',res[1])

    screenElm.innerHTML = `√${res[1]}`
    setTimeout(function(){
        res = Math.sqrt(res[1])
        screenElm.innerHTML = res
    }, 600);
}

function del() {
    let num = screenElm.innerText;
    let size = num.length
    num = num.slice(0, size - 1)
    if (num == 0) {
        screenElm.innerHTML = '0'
    } else {
        screenElm.innerHTML = num
    }
}

function cls() {
    screenElm.innerHTML = '0'
}