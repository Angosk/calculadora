
//# In development!!!

const screenIntro = document.getElementById('screen')
const screenAccumulation = document.getElementById('operation')

function printNumber(digit) {
    if (
        digit == '+'
        ) {
        screenAccumulation.innerHTML = screenIntro.textContent
        operation('+')
    }else if (digit == '×') {
        screenAccumulation.innerHTML = screenIntro.textContent
        operation('×')
    }else if (digit == '÷') {
        screenAccumulation.innerHTML = screenIntro.textContent
        operation('÷')
    }else if (digit == '-') {
        if(
            !screenIntro.textContent.includes('+') &&
            !screenIntro.textContent.includes('×') &&
            !screenIntro.textContent.includes('÷') &&
            !screenIntro.textContent.includes('√')
            ) {
            screenAccumulation.innerHTML = screenIntro.textContent
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
        per(num)//# .........................Each function most split if it needs
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
        clsIntro()
        clsAccumulation()
    }
}

function sum(num) {
    let first = Number.parseFloat(screenAccumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsAccumulation()
    screenAccumulation.innerHTML = `${first} + ${second} =`
    screenIntro.innerHTML = first + second
}

function mul(num) {
    let first = Number.parseFloat(screenAccumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsAccumulation()
    screenAccumulation.innerHTML = `${first} × ${second} =`
    screenIntro.innerHTML = first * second
}

function div(num) {
    let first = Number.parseFloat(screenAccumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsAccumulation()
    screenAccumulation.innerHTML = `${first} ÷ ${second} =`
    screenIntro.innerHTML = first / second
}

function per(num) {
    if (num.includes('-')) {
        num = num.split('-')
        num = num[1].split('%')
        //*_________________________________________Section for subtract a percentage
        let first = Number.parseFloat(screenAccumulation.textContent);
        let second = Number.parseFloat(num[0])
        screenAccumulation.innerHTML = `${first} - ${second}%${first} =`
        res = (first * second) / 100
        res = first - res
        screenIntro.innerHTML = res
        //*____________________________________________________________________________
    }else if (num.includes('+')) {
        num = num.split('+');
        num = num[1].split('%')
        //*_______________________________________________Section for add a percentage
        let first = Number.parseFloat(screenAccumulation.textContent);
        let second = Number.parseFloat(num[0])
        screenAccumulation.innerHTML = `${first} + ${second}%${first} =`
        res = (first * second) / 100
        res = first + res
        screenIntro.innerHTML = res
        //*_____________________________________________________________________________
    }else{
        num = num.split('%')
        let res = (num[1] * num[0]) / 100
        screenAccumulation.innerHTML = `${num[0]} % ${num[1]} =`
        screenIntro.innerHTML = res
    }
    
}

function subs(num) {
    let first = Number.parseFloat(screenAccumulation.textContent);
    let second = Number.parseFloat(num[1])
    clsAccumulation()
    screenAccumulation.innerHTML = `${first} - ${second} =`
    screenIntro.innerHTML = first - second
}

function sr(num) {
    let res = num;
    console.log('res', res[1])
    screenAccumulation.innerHTML = `√${res[1]}`
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

function clsIntro() {
    screenIntro.innerHTML = '0'
}

function clsAccumulation() {
    screenAccumulation.innerHTML = '0'
}