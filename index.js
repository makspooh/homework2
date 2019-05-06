// task 1
function Car(name, year, distance, color) {
    this._name = name;
    this._year = year;
    this._distance = distance;
    this._color = color;
    this._enabled = false;
    this._run = false;
    this._gasAmount = 0;
}

Car.prototype.enable = function() {
    if (this._gasAmount) {
        this._enabled = true;
    } else console.log('Нужно заправить автомобиль');
};

Car.prototype.start = function() {
    if (this._enabled) {
        console.log('Машина марки ' + this._name + ' поехала!');
        this._run = true;
    } else console.log('Сначала включите зажигание!');
};

Car.prototype.stop = function() {
    if (!this._enabled) {
        console.log('Зажигание и так выключено!')
    } else {
        this._run = false;
        this._enabled = false;
        console.log('Машина остановилась')
    }
};

Car.prototype.fillCar = function(value) {
    this._gasAmount += value;
};

let ford = new Car('Ford', 2018, 1000, 'Red');
let ford2 = new Car('Ford2', 2018, 1000, 'Red');

ford2.fillCar(100);
ford2.enable();
ford2.start();
ford2.stop();

ford.fillCar(100);
ford.enable();
ford.start();
ford.stop();

function NewCar() {
    Car.apply(this, arguments);
}
NewCar.prototype = Object.create(Car.prototype);
NewCar.prototype.constructor = NewCar;

let ford3 = new NewCar('Ford3', 2000, 500000, 'White');

ford3.fillCar(100);
ford3.enable();
ford3.start();
ford3.stop();

// task 2
function City(name, population, country) {
    this._name = name;
    this._population = population;
    this._country = country;
}

City.prototype.getPopulation = function() {
    return this._population;
};

City.prototype.getCityName = function() {
    return this._name;
};

City.prototype.addCitizen = function() {
    return this._population += 1;
};

let kremen = new City('Kremenchug', 200000, 'Ukraine')

console.log(kremen.getPopulation());
console.log(kremen.getCityName());
console.log(kremen.addCitizen());

// task 3
var transport = {
	stop: null
};
var car = {
	stop: true
};
car.__proto__ = transport;

console.log(car.stop); // ? (1)
delete car.stop;
console.log(car.stop); // ? (2)
delete transport.stop;
console.log(car.stop); // ? (3)
// (1) - true, потому что значение будет браться напрямую из объекта car
// (2) - null, потому что значение stop было удалено из объекта сar, и далее оно будет найдено в прототипе transport
// (3) - undefined, потому как значения stop теперь нет ни в одном из объектов
