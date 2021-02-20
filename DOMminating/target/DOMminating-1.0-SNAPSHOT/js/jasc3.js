var lel = document.getElementById("duk")
var but = document.getElementById("btn")
var butTop = document.getElementById("btnTop")
var butBot = document.getElementById("btnBot")
var fo = document.getElementById("for")
var fruit = ["apple", "banana", "pineapple", "mango"]

var basket = fruit.map(e => e).join("\n")

console.log(basket)
lel.innerText = basket

but.onclick = function () {
    fruit.push(fo.value)
    lel.innerText = fruit.map(e => e).join("\n")

}
butTop.onclick = function () {
    fruit.shift()
    lel.innerText = fruit.map(e => e).join("\n")
}
butBot.onclick = function () {
    fruit.pop()
    lel.innerText = fruit.map(e => e).join("\n")
}