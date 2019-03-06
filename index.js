var numBut = document.getElementsByTagName('Buton')
var actBut = document.getElementsByClassName('action')
var functBut = document.getElementsByClassName('function')
var count = 0
var num1 = []


function callBut() {
    var outPut = document.getElementById('output')
    for (i = 0; i < numBut.length; i++) {
        numBut[i].addEventListener('click', function() {
            outPut.innerHTML = this.innerHTML
            num1.push(this.innerText)
            outPut.innerHTML = num1.join('')
            if (this.innerHTML == 'AC') {
                outPut.innerHTML = ''
                num1 = []
            } else if (this.innerHTML == '=') {
                num1.pop()
                num1 = num1.join('')
                test = eval(num1) 
                outPut.innerHTML = test
                setTimeout(function(){
                    window.location.reload(1);
                 }, 3000)
            }
        })
    }
}

function operateBut(text) {

}



callBut()
