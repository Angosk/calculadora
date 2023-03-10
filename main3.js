
//# In development!!!

const screenAccumulation = document.getElementById('screenTop')
const screenIntro = document.getElementById('screenBottom')

function printNumber(digit) {
    if (digit === '+') {
        typeOfAction('+')
    }else if (digit === '×') {
        typeOfAction('×')
    }else if (digit === '÷') {
        typeOfAction('÷')
    }else if (digit === '%') {
        !(/[\×\÷\√\%]/g).test(screenIntro.textContent) ? //! review negative at the beginning
        screenIntro.innerHTML += digit : screenIntro.innerHTML = digit 
    }else if (digit === '-') { 
        // if ((/--/g).test(screenIntro.textContent)){
        //     //! remove --
        // }
        //# If the " - " is used like a negative sing, it can be use only
        //# in +, x, ÷ and √
        if((/[\+\×\÷\√]/g).test(screenIntro.textContent)) {//? here could add parameters for --
            screenIntro.innerHTML += digit;
        }else
            typeOfAction('-')
    }else if (digit === '.') {
        if (!screenIntro.textContent.includes('.')){
            if(screenIntro.textContent == '0') {
                screenIntro.textContent = '0.'
            }else if ((/[\+\-\×\÷\√\%]/g).test(screenIntro.textContent)){
                screenIntro.innerHTML += '0.'
            }else {
                screenIntro.innerHTML += digit
            }
        }
    }else if (digit ==='√') {
        clsAccumulation()
        clsIntro()
        screenIntro.textContent = '√'
    }else if (screenIntro.textContent == '0') {
        screenIntro.textContent = digit
    }else{
        screenIntro.innerHTML += digit;
    }
}

function typeOfAction (kind){
    //# match returns an array with each element it could find 
    //# NULL in other cases
    const isNumber = screenIntro.textContent.match(/[0-9]/g)
    const isOperator = screenIntro.textContent.match(/[\+\-\×\÷\√\%]/g)
    if ((/[0-9]/g).test(screenAccumulation.textContent)) {
        if(
            (isOperator ===  null ? true : false) && (isNumber != null ? true : false)){
                if(screenIntro.textContent == '0'){
                    clsIntro()
                    operator(kind) 
                }else{
                    screenAccumulation.innerHTML = screenIntro.textContent
                    operator(kind) 
                }
        }else if(
            (isOperator != null ? true : false) && (isNumber === null ? true : false)){
            operator(kind)
        }else if(
            (isOperator != null ? true : false) && (isNumber != null ? true : false)){
            calculation()
        }else operator()

    }else if (screenAccumulation.textContent.includes('=')){
        screenAccumulation.innerHTML = screenIntro.textContent
        operator(kind)
    }else {
        calculation()
    }
}

function calculation() {
    let num = screenIntro.innerText;
    if (num.includes('%')) {
        per(num)//# .........................Each function should be split if it need it
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
        //*___________________________________________________________________^^^^^^^^
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
        //*____________________________________________________________________^^^^^^^^
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
    let num = screenIntro.textContent;
    let size = num.length
    num = num.slice(0, size - 1)
    if (num == 0) {
        screenIntro.innerHTML = '0'
    } else {
        screenIntro.innerHTML = num
    }
}

function operator(kind) {
    screenIntro.innerHTML = kind
    
}

function clsIntro() {
    screenIntro.innerHTML = '0'
}

function clsAccumulation() {
    screenAccumulation.innerHTML = '0'
}