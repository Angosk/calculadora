const screenIntro = document.getElementById('screen')
const screenAcumulation = document.getElementById('operation')
const keysSelectionated = document.getElementsByClassName('keys')

function printNumber(digit) {
    if (digit == '+') {
        screenAcumulation.innerHTML = screenIntro.textContent
        operation('+')
    }else if (digit == '×') {
        screenAcumulation.innerHTML = screenIntro.textContent
        operation('×')
    }else if (digit == '÷') {
        screenAcumulation.innerHTML = screenIntro.textContent
        operation('÷')
    }else if (digit == '-') {
        if(
            !screenIntro.textContent.includes('+') &&
            !screenIntro.textContent.includes('×') &&
            !screenIntro.textContent.includes('÷') &&
            !screenIntro.textContent.includes('√')
            ) {
            screenAcumulation.innerHTML = screenIntro.textContent
            operation('-')
        }else
            screenIntro.innerHTML += digit;
        
    }else if (screenIntro.textContent == 0){
        screenIntro.innerHTML = digit
    }else {
        screenIntro.innerHTML += digit;
    }
}

function calculation() {
    let num = screenIntro.innerText;
    if (num.includes('%')) {
        // num = num.split('%');
        // console.log(num)//!
        per(num)
    }else if (num.includes('×')) {
        num = num.split('×');
        mul(num)
    }
    else if (num.includes('÷')) {
        num = num.split('÷');
        div(num)
    }
    else if (num.includes('+')) {
        num = num.split('+');
        sum(num);
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
}

function sum(num) {
    let first = Number.parseFloat(screenAcumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsOpe()
    screenAcumulation.innerHTML = `${first} + ${second} =`
    screenIntro.innerHTML = first + second
}

function mul(num) {
    let first = Number.parseFloat(screenAcumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsOpe()
    screenAcumulation.innerHTML = `${first} × ${second} =`
    screenIntro.innerHTML = first * second
}

function div(num) {
    let first = Number.parseFloat(screenAcumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsOpe()
    screenAcumulation.innerHTML = `${first} ÷ ${second} =`
    screenIntro.innerHTML = first / second
}

function per(num) {
    console.log(num, 'line 90')
    if (num.includes('-')) {
        num = num.split('-')
        num = num[1].split('%')
        //*___________________________________________________________________
        let first = Number.parseFloat(screenAcumulation.textContent);
        let second = Number.parseFloat(num[0])
        screenAcumulation.innerHTML = `${first} - ${second}%${first} =`
        res = (first * second) / 100
        res = first - res
        screenIntro.innerHTML = res
        //*___________________________________________________________________

        console.log("yata minus")
        console.log(num)
    }else if (num.includes('+')) {
        num = num.split('+');
        num = num[1].split('%')
        //*___________________________________________________________________
        let first = Number.parseFloat(screenAcumulation.textContent);
        let second = Number.parseFloat(num[0])
        screenAcumulation.innerHTML = `${first} + ${second}%${first} =`
        res = (first * second) / 100
        res = first + res
        screenIntro.innerHTML = res
        //*___________________________________________________________________
        console.log("yata plus")
        console.log(num)
    }else{
        num = num.split('%')
        let res = (num[1] * num[0]) / 100
        screenAcumulation.innerHTML = `${num[0]} % ${num[1]} =`
        screenIntro.innerHTML = res
    }
    
}

function subs(num) {
    let first = Number.parseFloat(screenAcumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsOpe()
    screenAcumulation.innerHTML = `${first} - ${second} =`
    screenIntro.innerHTML = first - second
}

function sr(num) {
    let res = num;
    console.log('res', res[1])
    screenAcumulation.innerHTML = `√${res[1]}`
    if (screenIntro.textContent.includes('-')){
        res = Math.sqrt(Number.parseFloat(Math.abs(res[1])))
        screenIntro.innerHTML = `im ${res}`
    }else{
        res = Math.sqrt(Number.parseFloat(res[1]))
        screenIntro.innerHTML = res
    }
    
}

function del() {
    let num = screenIntro.innerText;
    let size = num.length
    num = num.slice(0, size - 1)
    if (num == 0) {
        screenIntro.innerHTML = '0'
    } else {
        screenIntro.innerHTML = num
    }
}

function operation(kind) {
    screenIntro.innerHTML = kind
}

function cls() {
    screenIntro.innerHTML = '0'
}

function clsOpe() {
    screenAcumulation.innerHTML = '0'
}