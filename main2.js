const screenElm = document.getElementById('screen')
const screenOpe = document.getElementById('operation')
const keysElms = document.getElementsByClassName('keys')

function printNumber(digit) {
    if (digit == '+') {
        screenOpe.innerHTML = screenElm.textContent
        operation('+')
    }else if (digit == '×') {
        screenOpe.innerHTML = screenElm.textContent
        operation('×')
    }else if (digit == '÷') {
        screenOpe.innerHTML = screenElm.textContent
        operation('÷')
    }else if (digit == '-') {
        if(!screenElm.textContent.includes('+') &&
            !screenElm.textContent.includes('×') &&
            !screenElm.textContent.includes('÷') &&
            !screenElm.textContent.includes('√')) {
            screenOpe.innerHTML = screenElm.textContent
            operation('-')
        }else
            screenElm.innerHTML += digit;
        
    }else if (screenElm.textContent == 0){
        screenElm.innerHTML = digit
    }else {
        screenElm.innerHTML += digit;
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
    }else {
        //TODO  add re calculation 
        cls()
        clsOpe()
    }
    console.log(num)
}

function sum(num) {
    let fst = Number.parseFloat(screenOpe.textContent);
    let scd = Number.parseFloat(num[1])
    clsOpe()
    screenOpe.innerHTML = `${fst} + ${scd} =`
    screenElm.innerHTML = fst + scd
}

function mul(num) {
    let fst = Number.parseFloat(screenOpe.textContent);
    let scd = Number.parseFloat(num[1])
    clsOpe()
    screenOpe.innerHTML = `${fst} × ${scd} =`
    screenElm.innerHTML = fst * scd
}

function div(num) {
    let fst = Number.parseFloat(screenOpe.textContent);
    let scd = Number.parseFloat(num[1])
    clsOpe()
    screenOpe.innerHTML = `${fst} ÷ ${scd} =`
    screenElm.innerHTML = fst / scd
}

function per(num) {
    let res = (num[1] * num[0]) / 100
    screenOpe.innerHTML = `${num[0]} % ${num[1]} =`
    screenElm.innerHTML = res
}

function subs(num) {
    let fst = Number.parseFloat(screenOpe.textContent);
    let scd = Number.parseFloat(num[1])
    clsOpe()
    screenOpe.innerHTML = `${fst} - ${scd} =`
    screenElm.innerHTML = fst - scd
}

function sr(num) {
    let res = num;
    console.log('res', res[1])
    screenOpe.innerHTML = `√${res[1]}`
    if (screenElm.textContent.includes('-')){
        res = Math.sqrt(Number.parseFloat(Math.abs(res[1])))
        screenElm.innerHTML = `im ${res}`
    }else{
        res = Math.sqrt(Number.parseFloat(res[1]))
        screenElm.innerHTML = res
    }
    
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

function operation(kind) {
    screenElm.innerHTML = kind
}

function cls() {
    screenElm.innerHTML = '0'
}

function clsOpe() {
    screenOpe.innerHTML = '0'
}