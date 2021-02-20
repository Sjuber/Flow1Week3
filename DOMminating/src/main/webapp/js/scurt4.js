var d1 = document.getElementById("d1")
var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];
var cart = cars.map(car => "<tr><td>"+car.id+"</td><td>"+car.year+"</td><td>"+car.make+"</td><td>"+car.model+"</td><td>"+car.price+"</td></tr>").join("")
var tab1 = "<table class='table'><thead><tr><th>Id</th><th>year</th><th>make</th><th>model</th><th>price</th></tr></thead><tbody>"
var tab2 = "</tbody></table>"
var sortPrisFil = document.getElementById("put1")
var sortPrisBut = document.getElementById("but1")
d1.innerHTML = tab1 + cart + tab2

sortPrisBut.onclick = function(){
    var tal = sortPrisFil.value
    cart5K = cars.filter(car => car.price < tal)
    var cart5kt = cart5K.map(car => "<tr><td>"+car.id+"</td><td>"+car.year+"</td><td>"+car.make+"</td><td>"+car.model+"</td><td>"+car.price+"</td></tr>").join("")
    d1.innerHTML = tab1 + cart5kt + tab2
}

