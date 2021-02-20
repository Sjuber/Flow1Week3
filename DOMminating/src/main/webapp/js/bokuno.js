

var p = document.getElementById("pack")
var dev1 = document.getElementById("d1")


dev1.setAttribute("style", "width: 255px; height: 45px; background-color: lightblue; margin:1px;")

document.getElementById("outer").onclick = function (clicked) {
    var target = clicked.target
    console.log("Nice, heres my id: " + target.getAttribute("id"))
    p.innerText = "Nice, heres my id: " + target.getAttribute("id")
}
//document.getElementById("d1").onclick = function() {
//    console.log("fuck hvor vildt " + dev1.getAttribute("id") + ", hej drenge!")};
//
//document.getElementById("d2").onclick = function() {
//    console.log("fuck hvor vildt " + dev2.getAttribute("id") + ", hej piger!")
//    };