var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799},
    {id: 6, year: 2021, make: 'Volvo', model: 'V991', price: 54579}
];
console.log(cars)
console.log("*-----------------------------------------------*\n*-----------------------------------------------*\n*-----------------------------------------------*")
console.log(cars.filter(e => e.year <= 1999));
console.log("*-----------------------------------------------*\n*-----------------------------------------------*\n*-----------------------------------------------*")
console.log(cars.filter(e => e.make == "Volvo"));
console.log("*-----------------------------------------------*\n*-----------------------------------------------*\n*-----------------------------------------------*")
console.log(cars.filter(e => e.price < 5000));
console.log("*-----------------------------------------------*\n*-----------------------------------------------*\n*-----------------------------------------------*")
console.log("INSERT INTO cars (id,year,make,model,price) VALUES ("+cars[1].id+","+cars[1].year+","+cars[1].make+","+cars[1].model+","+cars[1].price+",)");
